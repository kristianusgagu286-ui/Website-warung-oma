# 🔧 Cara Kerja Website Warung Oma

## 📖 Penjelasan Lengkap Sistem

---

## 🎯 Gambaran Umum

Website Warung Oma terdiri dari **2 bagian utama**:

1. **Website Publik** (`index.html`) - Untuk pelanggan
2. **Backend System** (`backend.html`) - Untuk admin/pemilik

Kedua bagian ini **saling terhubung** melalui **localStorage** browser.

---

## 🌐 BAGIAN 1: Website Publik (index.html)

### Cara Kerja Website Pelanggan

#### 1. Saat Website Dibuka
```
Pelanggan buka index.html
    ↓
Browser load HTML, CSS, JavaScript
    ↓
JavaScript membaca data produk dari localStorage
    ↓
Produk ditampilkan di halaman
```

#### 2. Menampilkan Produk

**Proses:**
```javascript
// Di script.js
function loadProductsFromStorage() {
    // 1. Ambil data produk dari localStorage
    const products = localStorage.getItem('products');
    
    // 2. Jika ada data, parse JSON
    if (products) {
        const productList = JSON.parse(products);
        
        // 3. Tampilkan setiap produk
        productList.forEach(product => {
            // Buat card produk
            // Tampilkan gambar, nama, harga, deskripsi
        });
    }
}
```

**Yang Terjadi:**
1. JavaScript cek localStorage
2. Ambil data produk (format JSON)
3. Ubah JSON jadi objek JavaScript
4. Loop setiap produk
5. Buat HTML card untuk setiap produk
6. Tampilkan di halaman

#### 3. Form Pemesanan

**Proses Pelanggan Pesan:**
```
Pelanggan klik "Pesan Sekarang"
    ↓
Scroll otomatis ke form pemesanan
    ↓
Produk otomatis terpilih di dropdown
    ↓
Pelanggan isi:
  - Nama
  - Jumlah
  - Alamat
    ↓
Klik "Kirim Pesanan"
    ↓
JavaScript validasi form
    ↓
Jika valid, simpan ke localStorage
    ↓
Tampilkan pesan sukses
```

**Validasi Form:**
```javascript
// Cek nama (minimal 2 karakter)
if (nama.length < 2) {
    tampilkan error
}

// Cek produk dipilih
if (!produk) {
    tampilkan error
}

// Cek jumlah (minimal 1, maksimal 50)
if (jumlah < 1 || jumlah > 50) {
    tampilkan error
}

// Cek alamat (minimal 10 karakter)
if (alamat.length < 10) {
    tampilkan error
}
```

#### 4. Menyimpan Pesanan

**Proses:**
```javascript
// 1. Buat objek pesanan
const pesanan = {
    id: Date.now(),
    customer_name: "Nama Pelanggan",
    product_name: "Nasi Jagung",
    quantity: 2,
    delivery_address: "Alamat lengkap",
    status: "pending",
    created_at: "2024-01-01T10:00:00"
};

// 2. Ambil pesanan lama dari localStorage
const orders = JSON.parse(localStorage.getItem('orders')) || [];

// 3. Tambahkan pesanan baru
orders.push(pesanan);

// 4. Simpan kembali ke localStorage
localStorage.setItem('orders', JSON.stringify(orders));
```

---

## 🔐 BAGIAN 2: Backend System (backend.html)

### Cara Kerja Admin Panel

#### 1. Login System

**Proses Login:**
```
Admin buka backend.html
    ↓
Tampil halaman login
    ↓
Admin masukkan:
  - Username: admin
  - Password: admin123
    ↓
JavaScript cek kredensial
    ↓
Jika benar:
  - Simpan token ke localStorage
  - Simpan username ke localStorage
  - Tampilkan dashboard
    ↓
Jika salah:
  - Tampilkan error message
```

**Kode Login:**
```javascript
if (username === 'admin' && password === 'admin123') {
    // Login berhasil
    localStorage.setItem('backendToken', 'token-12345');
    localStorage.setItem('backendUsername', 'admin');
    
    // Tampilkan dashboard
    showBackend();
} else {
    // Login gagal
    tampilkan error
}
```

#### 2. Dashboard

**Cara Kerja Statistik:**
```javascript
// 1. Ambil semua pesanan dari localStorage
const orders = JSON.parse(localStorage.getItem('orders')) || [];

// 2. Hitung total pesanan
const totalOrders = orders.length;

// 3. Hitung pesanan hari ini
const today = new Date().toDateString();
const todayOrders = orders.filter(order => {
    const orderDate = new Date(order.created_at).toDateString();
    return orderDate === today;
}).length;

// 4. Hitung total pendapatan
const totalRevenue = orders
    .filter(order => order.status !== 'cancelled')
    .reduce((sum, order) => sum + order.total_amount, 0);

// 5. Hitung pesanan pending
const pendingOrders = orders.filter(order => 
    order.status === 'pending'
).length;

// 6. Tampilkan di dashboard
document.getElementById('totalOrders').textContent = totalOrders;
document.getElementById('todayOrders').textContent = todayOrders;
// dst...
```

**Real-time Update:**
- Setiap kali ada perubahan data
- Dashboard otomatis refresh
- Statistik update otomatis

#### 3. Orders Management

**Cara Kerja Kelola Pesanan:**

**A. Menampilkan Pesanan:**
```javascript
// 1. Ambil pesanan dari localStorage
const orders = JSON.parse(localStorage.getItem('orders')) || [];

// 2. Filter berdasarkan status (jika ada filter)
let filteredOrders = orders;
if (filter === 'pending') {
    filteredOrders = orders.filter(o => o.status === 'pending');
}

// 3. Buat tabel HTML
let html = '<table>';
filteredOrders.forEach(order => {
    html += `
        <tr>
            <td>#${order.id}</td>
            <td>${order.customer_name}</td>
            <td>${order.product_name}</td>
            <td>Rp ${order.total_amount}</td>
            <td>
                <select onchange="updateStatus(${order.id})">
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Preparing</option>
                    <option>Ready</option>
                    <option>Delivered</option>
                </select>
            </td>
        </tr>
    `;
});
html += '</table>';

// 4. Tampilkan di halaman
document.getElementById('ordersList').innerHTML = html;
```

**B. Update Status Pesanan:**
```javascript
function updateOrderStatus(orderId, newStatus) {
    // 1. Ambil semua pesanan
    const orders = JSON.parse(localStorage.getItem('orders'));
    
    // 2. Cari pesanan yang akan diupdate
    const orderIndex = orders.findIndex(o => o.id === orderId);
    
    // 3. Update status
    orders[orderIndex].status = newStatus;
    orders[orderIndex].updated_at = new Date().toISOString();
    
    // 4. Simpan kembali ke localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // 5. Refresh tampilan
    loadOrders();
    loadDashboard(); // Update statistik
}
```

**C. Hapus Pesanan:**
```javascript
function deleteOrder(orderId) {
    // 1. Konfirmasi
    if (!confirm('Yakin hapus pesanan?')) return;
    
    // 2. Ambil semua pesanan
    const orders = JSON.parse(localStorage.getItem('orders'));
    
    // 3. Filter (hapus pesanan yang dipilih)
    const filteredOrders = orders.filter(o => o.id !== orderId);
    
    // 4. Simpan kembali
    localStorage.setItem('orders', JSON.stringify(filteredOrders));
    
    // 5. Refresh tampilan
    loadOrders();
    loadDashboard();
}
```

#### 4. Products Management

**A. Menampilkan Produk:**
```javascript
// 1. Ambil produk dari localStorage
const products = JSON.parse(localStorage.getItem('products')) || [];

// 2. Buat tabel dengan gambar
let html = '<table>';
products.forEach(product => {
    html += `
        <tr>
            <td><img src="${product.image_url}" width="60"></td>
            <td>${product.name}</td>
            <td>Rp ${product.price}</td>
            <td>${product.is_available ? 'Available' : 'Unavailable'}</td>
            <td>
                <button onclick="editProduct(${product.id})">Edit</button>
                <button onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        </tr>
    `;
});
html += '</table>';

// 3. Tampilkan
document.getElementById('productsList').innerHTML = html;
```

**B. Tambah Produk:**
```javascript
function addProduct() {
    // 1. Ambil data dari form
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const description = document.getElementById('productDescription').value;
    const category = document.getElementById('productCategory').value;
    const imageUrl = document.getElementById('productImageUrl').value;
    const isAvailable = document.getElementById('productAvailable').checked;
    
    // 2. Buat objek produk baru
    const newProduct = {
        id: Date.now(),
        name: name,
        price: parseFloat(price),
        description: description,
        category: category,
        image_url: imageUrl,
        is_available: isAvailable,
        created_at: new Date().toISOString()
    };
    
    // 3. Ambil produk lama
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    // 4. Tambahkan produk baru
    products.push(newProduct);
    
    // 5. Simpan ke localStorage
    localStorage.setItem('products', JSON.stringify(products));
    
    // 6. Refresh tampilan
    loadProducts();
    closeModal();
}
```

**C. Upload Gambar:**
```javascript
// Saat user pilih file
document.getElementById('productImageFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    
    // 1. Validasi ukuran (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('File terlalu besar! Maksimal 2MB');
        return;
    }
    
    // 2. Validasi tipe file
    if (!file.type.startsWith('image/')) {
        alert('File harus gambar!');
        return;
    }
    
    // 3. Baca file sebagai Data URL
    const reader = new FileReader();
    reader.onload = function(event) {
        // 4. Tampilkan preview
        document.getElementById('previewImg').src = event.target.result;
        
        // 5. Data URL ini yang akan disimpan
        // Format: data:image/jpeg;base64,/9j/4AAQSkZJRg...
    };
    reader.readAsDataURL(file);
});
```

**D. Edit Produk:**
```javascript
function editProduct(productId) {
    // 1. Ambil semua produk
    const products = JSON.parse(localStorage.getItem('products'));
    
    // 2. Cari produk yang akan diedit
    const product = products.find(p => p.id === productId);
    
    // 3. Isi form dengan data produk
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productDescription').value = product.description;
    // dst...
    
    // 4. Tampilkan modal
    showModal();
}

function saveEditedProduct() {
    // 1. Ambil data dari form
    const productId = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    // dst...
    
    // 2. Ambil semua produk
    const products = JSON.parse(localStorage.getItem('products'));
    
    // 3. Cari index produk
    const index = products.findIndex(p => p.id === parseInt(productId));
    
    // 4. Update data
    products[index].name = name;
    products[index].price = price;
    // dst...
    
    // 5. Simpan kembali
    localStorage.setItem('products', JSON.stringify(products));
    
    // 6. Refresh
    loadProducts();
}
```

**E. Hapus Produk:**
```javascript
function deleteProduct(productId) {
    // 1. Konfirmasi
    if (!confirm('Yakin hapus produk?')) return;
    
    // 2. Ambil semua produk
    const products = JSON.parse(localStorage.getItem('products'));
    
    // 3. Filter (hapus produk yang dipilih)
    const filteredProducts = products.filter(p => p.id !== productId);
    
    // 4. Simpan kembali
    localStorage.setItem('products', JSON.stringify(filteredProducts));
    
    // 5. Refresh
    loadProducts();
}
```

---

## 🔄 BAGIAN 3: Sinkronisasi Data

### Cara Kerja Data Sync

#### Backend → Website

**Proses:**
```
Admin tambah produk di backend
    ↓
Produk disimpan ke localStorage
    ↓
Website membaca localStorage
    ↓
Produk baru muncul di website
```

**Detail:**
```javascript
// DI BACKEND (backend-script.js)
function addProduct() {
    // Simpan produk ke localStorage
    localStorage.setItem('products', JSON.stringify(products));
}

// DI WEBSITE (script.js)
function loadProductsFromStorage() {
    // Baca produk dari localStorage yang sama
    const products = JSON.parse(localStorage.getItem('products'));
    
    // Tampilkan di website
    displayProducts(products);
}
```

**Kenapa Bisa Sync?**
- Backend dan website buka di browser yang sama
- localStorage adalah storage browser
- Semua tab/window di browser yang sama share localStorage
- Jadi data yang disimpan backend bisa dibaca website

#### Website → Backend

**Proses:**
```
Pelanggan pesan di website
    ↓
Pesanan disimpan ke localStorage
    ↓
Backend membaca localStorage
    ↓
Pesanan muncul di backend
```

**Detail:**
```javascript
// DI WEBSITE (script.js)
function submitOrder() {
    // Simpan pesanan ke localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
}

// DI BACKEND (backend-script.js)
function loadOrders() {
    // Baca pesanan dari localStorage yang sama
    const orders = JSON.parse(localStorage.getItem('orders'));
    
    // Tampilkan di backend
    displayOrders(orders);
}
```

---

## 💾 BAGIAN 4: localStorage

### Apa itu localStorage?

**Penjelasan Sederhana:**
- localStorage = tempat penyimpanan di browser
- Seperti "database mini" di browser
- Data tersimpan permanen (tidak hilang saat browser ditutup)
- Setiap website punya localStorage sendiri
- Format data: key-value (seperti kamus)

### Cara Kerja localStorage

**1. Menyimpan Data:**
```javascript
// Simpan string
localStorage.setItem('nama', 'Oma');

// Simpan objek (harus diubah ke JSON dulu)
const produk = { name: 'Nasi Jagung', price: 15000 };
localStorage.setItem('produk', JSON.stringify(produk));

// Simpan array
const products = [produk1, produk2, produk3];
localStorage.setItem('products', JSON.stringify(products));
```

**2. Mengambil Data:**
```javascript
// Ambil string
const nama = localStorage.getItem('nama');
// Hasil: "Oma"

// Ambil objek (harus di-parse dari JSON)
const produk = JSON.parse(localStorage.getItem('produk'));
// Hasil: { name: 'Nasi Jagung', price: 15000 }

// Ambil array
const products = JSON.parse(localStorage.getItem('products'));
// Hasil: [produk1, produk2, produk3]
```

**3. Menghapus Data:**
```javascript
// Hapus satu item
localStorage.removeItem('nama');

// Hapus semua
localStorage.clear();
```

### Data yang Disimpan di Website Warung Oma

**1. products** - Daftar produk
```json
[
    {
        "id": 1,
        "name": "Nasi Jagung Manggarai",
        "price": 15000,
        "description": "Nasi jagung khas...",
        "category": "makanan",
        "image_url": "https://...",
        "is_available": true,
        "created_at": "2024-01-01T10:00:00"
    },
    {
        "id": 2,
        "name": "Ja'i Wuut",
        "price": 35000,
        ...
    }
]
```

**2. orders** - Daftar pesanan
```json
[
    {
        "id": 1704096000000,
        "customer_name": "Budi",
        "product_name": "Nasi Jagung Manggarai",
        "quantity": 2,
        "total_amount": 30000,
        "delivery_address": "Jl. Raya No. 123",
        "status": "pending",
        "created_at": "2024-01-01T10:00:00"
    }
]
```

**3. backendToken** - Token login
```
"backend-token-1704096000000"
```

**4. backendUsername** - Username yang login
```
"admin"
```

---

## 🔧 BAGIAN 5: Teknologi yang Digunakan

### 1. HTML (HyperText Markup Language)

**Fungsi:** Struktur halaman web

**Contoh:**
```html
<!-- Header -->
<header>
    <nav>
        <h1>Warung Oma</h1>
        <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#products">Produk</a></li>
        </ul>
    </nav>
</header>

<!-- Product Card -->
<div class="product-card">
    <img src="gambar.jpg" alt="Produk">
    <h3>Nasi Jagung</h3>
    <p class="price">Rp 15.000</p>
    <button>Pesan</button>
</div>
```

### 2. CSS (Cascading Style Sheets)

**Fungsi:** Styling/tampilan halaman

**Contoh:**
```css
/* Styling product card */
.product-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

/* Responsive untuk mobile */
@media (max-width: 768px) {
    .product-card {
        width: 100%;
    }
}
```

### 3. JavaScript

**Fungsi:** Interaktivitas dan logika

**Contoh:**
```javascript
// Event listener untuk tombol pesan
document.querySelector('.btn-order').addEventListener('click', function() {
    // Scroll ke form
    document.getElementById('order').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Set produk yang dipilih
    selectProduct('Nasi Jagung', 15000);
});

// Validasi form
function validateForm() {
    const name = document.getElementById('customerName').value;
    
    if (name.length < 2) {
        alert('Nama minimal 2 karakter!');
        return false;
    }
    
    return true;
}
```

---

## 🎨 BAGIAN 6: Responsive Design

### Cara Kerja Responsive

**Konsep:**
- Website menyesuaikan tampilan dengan ukuran layar
- Desktop: layout lebar, sidebar terlihat
- Mobile: layout stack, sidebar tersembunyi

**Implementasi:**
```css
/* Desktop (default) */
.sidebar {
    width: 280px;
    position: fixed;
}

.main-content {
    margin-left: 280px;
}

/* Mobile (< 768px) */
@media (max-width: 768px) {
    .sidebar {
        width: 0;
        transform: translateX(-100%);
    }
    
    .main-content {
        margin-left: 0;
        width: 100%;
    }
    
    .products-grid {
        grid-template-columns: 1fr; /* 1 kolom */
    }
}
```

**Breakpoints:**
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

---

## 🔐 BAGIAN 7: Keamanan

### Sistem Keamanan Sederhana

**1. Autentikasi:**
```javascript
// Cek login
function checkAuth() {
    const token = localStorage.getItem('backendToken');
    
    if (!token) {
        // Belum login, tampilkan halaman login
        showLogin();
    } else {
        // Sudah login, tampilkan dashboard
        showDashboard();
    }
}
```

**2. Proteksi Halaman:**
```javascript
// Setiap kali halaman load
document.addEventListener('DOMContentLoaded', function() {
    checkAuth(); // Cek apakah sudah login
});
```

**⚠️ Catatan Keamanan:**
- Ini sistem sederhana untuk pembelajaran
- Untuk production, perlu:
  - Backend server (Node.js, PHP, dll)
  - Database (MySQL, MongoDB, dll)
  - Enkripsi password
  - JWT token
  - HTTPS
  - CSRF protection

---

## 📊 BAGIAN 8: Alur Data Lengkap

### Diagram Alur

```
┌─────────────────────────────────────────────────────────┐
│                    BROWSER                               │
│                                                          │
│  ┌──────────────┐              ┌──────────────┐        │
│  │   Website    │              │   Backend    │        │
│  │ (index.html) │              │(backend.html)│        │
│  └──────┬───────┘              └──────┬───────┘        │
│         │                              │                │
│         │    ┌──────────────────┐     │                │
│         └────┤   localStorage   ├─────┘                │
│              │                  │                       │
│              │  - products      │                       │
│              │  - orders        │                       │
│              │  - backendToken  │                       │
│              │  - backendUsername│                      │
│              └──────────────────┘                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Alur Lengkap

**1. Pelanggan Buka Website:**
```
Browser load index.html
    ↓
Load style.css (tampilan)
    ↓
Load script.js (fungsi)
    ↓
script.js baca localStorage
    ↓
Ambil data products
    ↓
Tampilkan produk di halaman
```

**2. Pelanggan Pesan:**
```
Klik "Pesan Sekarang"
    ↓
Scroll ke form
    ↓
Isi form (nama, produk, jumlah, alamat)
    ↓
Klik "Kirim Pesanan"
    ↓
JavaScript validasi form
    ↓
Jika valid:
  - Buat objek pesanan
  - Simpan ke localStorage
  - Tampilkan pesan sukses
    ↓
Jika tidak valid:
  - Tampilkan error
```

**3. Admin Login:**
```
Buka backend.html
    ↓
Tampil halaman login
    ↓
Masukkan username & password
    ↓
JavaScript cek kredensial
    ↓
Jika benar:
  - Simpan token ke localStorage
  - Tampilkan dashboard
    ↓
Jika salah:
  - Tampilkan error
```

**4. Admin Kelola Produk:**
```
Klik "Products Management"
    ↓
JavaScript baca localStorage
    ↓
Tampilkan semua produk
    ↓
Admin klik "Add Product"
    ↓
Isi form produk
    ↓
Upload gambar atau paste URL
    ↓
Klik "Save Product"
    ↓
JavaScript:
  - Validasi data
  - Buat objek produk
  - Simpan ke localStorage
  - Refresh tampilan
    ↓
Produk baru muncul di tabel
```

**5. Sync ke Website:**
```
Admin refresh website (index.html)
    ↓
script.js baca localStorage
    ↓
Ambil data products (termasuk produk baru)
    ↓
Tampilkan semua produk
    ↓
Produk baru muncul di website!
```

---

## 🎯 Kesimpulan

### Cara Kerja Singkat

1. **Website** = Halaman untuk pelanggan lihat produk dan pesan
2. **Backend** = Panel admin untuk kelola produk dan pesanan
3. **localStorage** = Tempat penyimpanan data di browser
4. **Sync** = Backend dan website share localStorage yang sama

### Teknologi

- **HTML** = Struktur halaman
- **CSS** = Tampilan/styling
- **JavaScript** = Logika dan interaktivitas
- **localStorage** = Penyimpanan data

### Kelebihan Sistem Ini

✅ Sederhana dan mudah dipahami
✅ Tidak perlu server
✅ Tidak perlu database
✅ Bisa jalan offline
✅ Cocok untuk pembelajaran
✅ Gratis (no hosting cost)

### Kekurangan

❌ Data hanya di browser lokal
❌ Jika clear cache, data hilang
❌ Tidak bisa diakses dari device lain
❌ Keamanan terbatas
❌ Tidak cocok untuk production

### Untuk Production

Perlu upgrade ke:
- Backend server (Node.js, PHP, Python)
- Database (MySQL, PostgreSQL, MongoDB)
- API untuk komunikasi
- Proper authentication
- Cloud hosting

---

**Semoga penjelasan ini membantu memahami cara kerja website! 🎉**

Ada pertanyaan? Silakan tanya! 😊
