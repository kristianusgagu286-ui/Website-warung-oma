# 🔐 Backend System Guide - Warung Oma

## Akses Backend

### URL Backend
- **File:** `backend.html`
- **Link dari Website:** Klik tombol "🔐 Admin" di navigasi atau footer

### Login Credentials
- **Username:** `admin`
- **Password:** `admin123`

## Fitur Backend System

### 1. 📊 Dashboard
- **Total Orders:** Jumlah semua pesanan
- **Today Orders:** Pesanan hari ini
- **Total Revenue:** Total pendapatan dari semua pesanan
- **Pending Orders:** Pesanan yang menunggu konfirmasi
- **Recent Orders:** 5 pesanan terakhir

### 2. 📦 Orders Management
Kelola semua pesanan pelanggan:
- **View Orders:** Lihat semua pesanan dengan detail lengkap
- **Filter Status:** Filter pesanan berdasarkan status
  - Pending (Menunggu)
  - Confirmed (Dikonfirmasi)
  - Preparing (Sedang Disiapkan)
  - Ready (Siap)
  - Delivered (Terkirim)
  - Cancelled (Dibatalkan)
- **Update Status:** Ubah status pesanan dengan dropdown
- **Delete Order:** Hapus pesanan yang tidak valid

### 3. 🍽️ Products Management
Kelola produk yang dijual:
- **View Products:** Lihat semua produk dengan gambar
- **Add Product:** Tambah produk baru
  - Nama produk
  - Harga
  - Deskripsi
  - Kategori (Makanan/Minuman/Snack)
  - Upload gambar atau URL gambar
  - Status ketersediaan
- **Edit Product:** Edit informasi produk
- **Delete Product:** Hapus produk
- **Toggle Availability:** Aktifkan/nonaktifkan produk

### 4. 📈 Analytics
Dashboard analitik penjualan (Coming Soon)

### 5. ⚙️ Settings
Pengaturan sistem (Coming Soon)

## Cara Menggunakan Backend

### Login ke Backend
1. Buka `backend.html` di browser
2. Masukkan username: `admin`
3. Masukkan password: `admin123`
4. Klik "Login to Backend"

### Menambah Produk Baru
1. Login ke backend
2. Klik menu "Products Management"
3. Klik tombol "+ Add Product"
4. Isi form:
   - Nama produk (wajib)
   - Harga (wajib)
   - Deskripsi
   - Kategori
   - Upload gambar (max 2MB) atau masukkan URL gambar
   - Centang "Product Available" jika produk tersedia
5. Klik "Save Product"
6. Produk akan otomatis muncul di website setelah refresh

### Mengedit Produk
1. Di halaman Products Management
2. Klik tombol "Edit" pada produk yang ingin diedit
3. Ubah informasi yang diperlukan
4. Klik "Save Product"

### Menghapus Produk
1. Di halaman Products Management
2. Klik tombol "Delete" pada produk
3. Konfirmasi penghapusan
4. Produk akan dihapus dari sistem

### Mengelola Pesanan
1. Klik menu "Orders Management"
2. Lihat semua pesanan yang masuk
3. Untuk mengubah status:
   - Pilih status baru dari dropdown
   - Status akan otomatis tersimpan
4. Untuk menghapus pesanan:
   - Klik tombol "Delete"
   - Konfirmasi penghapusan

## Sinkronisasi Data

### Produk
- Produk yang ditambah/edit/hapus di backend akan otomatis muncul di website
- Website membaca data dari localStorage
- Refresh halaman website untuk melihat perubahan

### Pesanan
- Pesanan dari website otomatis masuk ke backend
- Lihat di menu "Orders Management" atau Dashboard

## Penyimpanan Data

### localStorage
Backend menggunakan localStorage browser untuk menyimpan:
- **products:** Daftar semua produk
- **orders:** Daftar semua pesanan
- **backendToken:** Token autentikasi backend
- **backendUsername:** Username yang login

### Default Products
Jika localStorage kosong, sistem akan menggunakan 8 produk default:
1. Nasi Jagung Manggarai - Rp 15.000
2. Ja'i Wuut (Daging Babi) - Rp 35.000
3. Ikan Bakar Sambal Lu'at - Rp 30.000
4. Ayam Taliwang NTT - Rp 28.000
5. Rumpu Rampe - Rp 20.000
6. Kopi Flores Panas - Rp 8.000
7. Kopi Hitam Warkop - Rp 2.000
8. Nasi Bungkus Warkop - Rp 5.000

## Desain Backend

### Dark Theme
- Background: #0f172a (dark blue)
- Sidebar: #1e293b
- Cards: #1e293b dengan border #334155
- Text: #e2e8f0 (light gray)

### Gradient Buttons
- Primary: Linear gradient purple-blue (#667eea → #764ba2)
- Success: #10b981 (green)
- Warning: #f59e0b (orange)
- Danger: #ef4444 (red)

### Responsive Design
- Desktop: Sidebar 280px, main content dengan margin
- Mobile: Sidebar tersembunyi, full-width content

## Tips & Best Practices

### Upload Gambar
- Maksimal ukuran: 2MB
- Format: JPG, PNG, GIF, WebP
- Rekomendasi ukuran: 300x200px atau rasio 3:2
- Alternatif: Gunakan URL gambar dari Unsplash atau sumber lain

### Manajemen Produk
- Gunakan nama produk yang jelas dan deskriptif
- Isi deskripsi untuk informasi detail
- Set status "Available" hanya untuk produk yang ready
- Update harga secara berkala

### Manajemen Pesanan
- Cek pesanan baru secara rutin
- Update status pesanan sesuai progress
- Hubungi pelanggan via WhatsApp untuk konfirmasi
- Hapus pesanan spam atau tidak valid

## Troubleshooting

### Tidak Bisa Login
- Pastikan username: `admin` dan password: `admin123`
- Cek console browser untuk error
- Clear cache dan cookies browser

### Produk Tidak Muncul di Website
- Refresh halaman website (F5)
- Cek localStorage di browser DevTools
- Pastikan produk di-set "Available"

### Data Hilang
- Data tersimpan di localStorage browser
- Jangan clear browser data/cache
- Backup data secara manual jika perlu

### Gambar Tidak Muncul
- Cek URL gambar valid dan accessible
- Pastikan ukuran file tidak terlalu besar
- Gunakan HTTPS URL untuk gambar

## Keamanan

### Password
- Ganti password default di production
- Edit di file `backend-script.js` baris login validation

### Data Protection
- Data tersimpan lokal di browser
- Tidak ada enkripsi default
- Untuk production, gunakan backend server dengan database

## File Backend

### File Utama
- `backend.html` - Halaman backend dengan inline CSS
- `backend-script.js` - JavaScript untuk semua fungsi backend

### Integrasi dengan Website
- `index.html` - Link ke backend di navigasi dan footer
- `script.js` - Membaca produk dari localStorage

## Support

Jika ada masalah atau pertanyaan:
1. Cek file `TROUBLESHOOTING_LOGIN.md`
2. Cek file `PANDUAN_UPLOAD_GAMBAR.md`
3. Cek console browser untuk error messages
4. Review dokumentasi ini

---

**Dibuat untuk:** Warung Oma - UMKM Manggarai Barat, NTT
**Versi:** 1.0
**Tanggal:** 2024
