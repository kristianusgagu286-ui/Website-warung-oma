# ✅ Backend Testing Checklist - Warung Oma

## 🔐 Login Testing

### Test 1: Login Berhasil
- [ ] Buka `backend.html`
- [ ] Masukkan username: `admin`
- [ ] Masukkan password: `admin123`
- [ ] Klik "Login to Backend"
- [ ] **Expected:** Masuk ke dashboard backend
- [ ] **Expected:** Muncul username "Admin" di top bar

### Test 2: Login Gagal - Wrong Password
- [ ] Masukkan username: `admin`
- [ ] Masukkan password: `wrong123`
- [ ] Klik "Login to Backend"
- [ ] **Expected:** Muncul error "❌ Invalid username or password!"
- [ ] **Expected:** Tetap di halaman login

### Test 3: Login Gagal - Wrong Username
- [ ] Masukkan username: `user`
- [ ] Masukkan password: `admin123`
- [ ] Klik "Login to Backend"
- [ ] **Expected:** Muncul error message
- [ ] **Expected:** Tetap di halaman login

### Test 4: Logout
- [ ] Login ke backend
- [ ] Klik tombol "Logout" di top bar
- [ ] Konfirmasi logout
- [ ] **Expected:** Kembali ke halaman login
- [ ] **Expected:** Token dihapus dari localStorage

## 📊 Dashboard Testing

### Test 5: Dashboard Statistics
- [ ] Login ke backend
- [ ] Lihat dashboard
- [ ] **Expected:** Muncul 4 stat cards:
  - Total Orders
  - Today Orders
  - Total Revenue
  - Pending Orders
- [ ] **Expected:** Angka statistik sesuai data

### Test 6: Recent Orders
- [ ] Di dashboard
- [ ] Scroll ke "Recent Orders"
- [ ] **Expected:** Muncul tabel 5 pesanan terakhir
- [ ] **Expected:** Jika tidak ada pesanan, muncul empty state

### Test 7: View All Orders Button
- [ ] Di dashboard
- [ ] Klik tombol "View All" di Recent Orders
- [ ] **Expected:** Pindah ke halaman Orders Management

## 📦 Orders Management Testing

### Test 8: View All Orders
- [ ] Klik menu "Orders Management"
- [ ] **Expected:** Muncul tabel semua pesanan
- [ ] **Expected:** Kolom: ID, Customer, Product, Quantity, Amount, Status, Actions

### Test 9: Filter Orders by Status
- [ ] Di Orders Management
- [ ] Pilih filter "Pending"
- [ ] **Expected:** Hanya muncul pesanan dengan status Pending
- [ ] Pilih filter "Delivered"
- [ ] **Expected:** Hanya muncul pesanan dengan status Delivered
- [ ] Pilih "All Status"
- [ ] **Expected:** Muncul semua pesanan

### Test 10: Update Order Status
- [ ] Di Orders Management
- [ ] Pilih pesanan
- [ ] Ubah status dari dropdown (misal: Pending → Confirmed)
- [ ] **Expected:** Muncul alert "✅ Order status updated successfully!"
- [ ] **Expected:** Status berubah di tabel
- [ ] Refresh halaman
- [ ] **Expected:** Status tetap tersimpan

### Test 11: Delete Order
- [ ] Di Orders Management
- [ ] Klik tombol "Delete" pada pesanan
- [ ] Konfirmasi penghapusan
- [ ] **Expected:** Muncul alert "✅ Order deleted successfully!"
- [ ] **Expected:** Pesanan hilang dari tabel
- [ ] **Expected:** Statistik di dashboard update

### Test 12: Empty Orders State
- [ ] Hapus semua pesanan
- [ ] **Expected:** Muncul empty state "No Orders Found"

## 🍽️ Products Management Testing

### Test 13: View All Products
- [ ] Klik menu "Products Management"
- [ ] **Expected:** Muncul tabel semua produk
- [ ] **Expected:** Kolom: Image, Name, Price, Category, Status, Actions
- [ ] **Expected:** Gambar produk muncul dengan benar

### Test 14: Add Product - Upload Image
- [ ] Klik "+ Add Product"
- [ ] Isi form:
  - Nama: "Test Product"
  - Harga: 10000
  - Deskripsi: "Test description"
  - Kategori: Makanan
  - Upload gambar (< 2MB)
  - ✓ Product Available
- [ ] **Expected:** Preview gambar muncul
- [ ] Klik "Save Product"
- [ ] **Expected:** Alert "✅ Product added successfully!"
- [ ] **Expected:** Produk muncul di tabel
- [ ] **Expected:** Modal tertutup

### Test 15: Add Product - Image URL
- [ ] Klik "+ Add Product"
- [ ] Isi form dengan URL gambar
- [ ] Klik "Save Product"
- [ ] **Expected:** Produk tersimpan dengan gambar dari URL

### Test 16: Add Product - Validation
- [ ] Klik "+ Add Product"
- [ ] Kosongkan nama produk
- [ ] Klik "Save Product"
- [ ] **Expected:** Browser validation error
- [ ] Kosongkan harga
- [ ] **Expected:** Browser validation error

### Test 17: Edit Product
- [ ] Klik tombol "Edit" pada produk
- [ ] **Expected:** Modal terbuka dengan data produk
- [ ] **Expected:** Title modal "Edit Product"
- [ ] Ubah nama produk
- [ ] Ubah harga
- [ ] Klik "Save Product"
- [ ] **Expected:** Alert "✅ Product updated successfully!"
- [ ] **Expected:** Perubahan tersimpan di tabel

### Test 18: Delete Product
- [ ] Klik tombol "Delete" pada produk
- [ ] Konfirmasi penghapusan
- [ ] **Expected:** Alert "✅ Product deleted successfully!"
- [ ] **Expected:** Produk hilang dari tabel

### Test 19: Product Availability Toggle
- [ ] Edit produk
- [ ] Uncheck "Product Available"
- [ ] Save
- [ ] **Expected:** Status badge berubah jadi "Unavailable" (red)
- [ ] Check "Product Available"
- [ ] Save
- [ ] **Expected:** Status badge berubah jadi "Available" (green)

### Test 20: Image Upload - File Too Large
- [ ] Klik "+ Add Product"
- [ ] Upload gambar > 2MB
- [ ] **Expected:** Alert "❌ File size too large! Maximum 2MB"
- [ ] **Expected:** File tidak di-upload

### Test 21: Image Upload - Invalid File Type
- [ ] Klik "+ Add Product"
- [ ] Upload file PDF atau TXT
- [ ] **Expected:** Alert "❌ File must be an image!"
- [ ] **Expected:** File tidak di-upload

### Test 22: Close Modal
- [ ] Klik "+ Add Product"
- [ ] Klik tombol X (close)
- [ ] **Expected:** Modal tertutup
- [ ] **Expected:** Form di-reset

### Test 23: Empty Products State
- [ ] Hapus semua produk
- [ ] **Expected:** Muncul empty state "No Products Yet"
- [ ] **Expected:** Muncul pesan "Click 'Add Product' to create..."

## 🔄 Data Sync Testing

### Test 24: Product Sync to Website
- [ ] Login ke backend
- [ ] Tambah produk baru
- [ ] Buka `index.html` di tab baru
- [ ] Refresh halaman
- [ ] **Expected:** Produk baru muncul di website
- [ ] **Expected:** Produk muncul di dropdown order form

### Test 25: Product Edit Sync
- [ ] Edit produk di backend (ubah nama/harga)
- [ ] Refresh website
- [ ] **Expected:** Perubahan muncul di website

### Test 26: Product Delete Sync
- [ ] Hapus produk di backend
- [ ] Refresh website
- [ ] **Expected:** Produk hilang dari website
- [ ] **Expected:** Produk hilang dari dropdown order form

### Test 27: Product Availability Sync
- [ ] Set produk jadi "Unavailable" di backend
- [ ] Refresh website
- [ ] **Expected:** Produk tidak muncul di website
- [ ] **Expected:** Produk tidak ada di dropdown order form

### Test 28: Order from Website to Backend
- [ ] Buka website
- [ ] Isi form pemesanan
- [ ] Submit pesanan
- [ ] Buka backend
- [ ] Refresh dashboard
- [ ] **Expected:** Pesanan baru muncul di backend
- [ ] **Expected:** Statistik update

## 🎨 UI/UX Testing

### Test 29: Sidebar Navigation
- [ ] Klik setiap menu item:
  - Dashboard
  - Orders Management
  - Products Management
  - Analytics
  - Settings
- [ ] **Expected:** Section yang sesuai muncul
- [ ] **Expected:** Menu item active (highlight)
- [ ] **Expected:** Page title update

### Test 30: Responsive Design - Mobile
- [ ] Buka backend di mobile/resize browser < 768px
- [ ] **Expected:** Sidebar tersembunyi
- [ ] **Expected:** Main content full-width
- [ ] **Expected:** Tabel scrollable horizontal

### Test 31: Dark Theme
- [ ] Cek semua halaman
- [ ] **Expected:** Background dark (#0f172a)
- [ ] **Expected:** Text readable (light color)
- [ ] **Expected:** Cards dengan border visible

### Test 32: Button Hover Effects
- [ ] Hover semua tombol
- [ ] **Expected:** Transform translateY(-2px)
- [ ] **Expected:** Shadow muncul
- [ ] **Expected:** Smooth transition

### Test 33: Table Hover Effects
- [ ] Hover baris tabel
- [ ] **Expected:** Background berubah
- [ ] **Expected:** Transform translateX(5px)

## 💾 localStorage Testing

### Test 34: Data Persistence
- [ ] Login ke backend
- [ ] Tambah produk
- [ ] Close browser
- [ ] Buka backend lagi
- [ ] **Expected:** Masih login (token tersimpan)
- [ ] **Expected:** Produk masih ada

### Test 35: Clear localStorage
- [ ] Buka DevTools → Application → localStorage
- [ ] Clear all data
- [ ] Refresh backend
- [ ] **Expected:** Kembali ke login screen
- [ ] **Expected:** Default products loaded

### Test 36: localStorage Keys
- [ ] Login ke backend
- [ ] Buka DevTools → Application → localStorage
- [ ] **Expected:** Ada key `backendToken`
- [ ] **Expected:** Ada key `backendUsername`
- [ ] **Expected:** Ada key `products`
- [ ] **Expected:** Ada key `orders` (jika ada pesanan)

## 🔒 Security Testing

### Test 37: Direct Access Without Login
- [ ] Clear localStorage
- [ ] Buka `backend.html`
- [ ] **Expected:** Muncul login screen
- [ ] **Expected:** Tidak bisa akses dashboard

### Test 38: Token Validation
- [ ] Login ke backend
- [ ] Buka DevTools → Application → localStorage
- [ ] Hapus `backendToken`
- [ ] Refresh halaman
- [ ] **Expected:** Kembali ke login screen

## 📱 Cross-Browser Testing

### Test 39: Chrome
- [ ] Test semua fitur di Chrome
- [ ] **Expected:** Semua berfungsi normal

### Test 40: Firefox
- [ ] Test semua fitur di Firefox
- [ ] **Expected:** Semua berfungsi normal

### Test 41: Edge
- [ ] Test semua fitur di Edge
- [ ] **Expected:** Semua berfungsi normal

### Test 42: Safari (jika ada Mac)
- [ ] Test semua fitur di Safari
- [ ] **Expected:** Semua berfungsi normal

## 🚀 Performance Testing

### Test 43: Load Time
- [ ] Buka backend
- [ ] **Expected:** Load < 2 detik
- [ ] **Expected:** Smooth animations

### Test 44: Large Dataset
- [ ] Tambah 50+ produk
- [ ] Tambah 100+ pesanan
- [ ] **Expected:** Tabel masih responsive
- [ ] **Expected:** Filter masih cepat

## ✅ Final Checklist

- [ ] Semua test login passed
- [ ] Semua test dashboard passed
- [ ] Semua test orders management passed
- [ ] Semua test products management passed
- [ ] Semua test data sync passed
- [ ] Semua test UI/UX passed
- [ ] Semua test localStorage passed
- [ ] Semua test security passed
- [ ] Cross-browser testing passed
- [ ] Performance testing passed

## 📝 Bug Report Template

Jika menemukan bug, catat:
```
Bug ID: #
Title: [Judul singkat]
Steps to Reproduce:
1. 
2. 
3. 

Expected Result:
Actual Result:
Browser: 
Screenshot: [jika ada]
```

---

**Testing Date:** ___________
**Tester:** ___________
**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Completed
