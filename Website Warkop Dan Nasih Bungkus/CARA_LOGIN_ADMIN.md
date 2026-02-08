# 🔐 Cara Login Admin Panel - Warung Oma

## 📌 Informasi Login

**Username:** `admin`  
**Password:** `admin123`

---

## 🚀 Langkah-Langkah Login

### Metode 1: Buka Langsung File admin.html

#### Langkah 1: Buka File Explorer
1. Tekan tombol **Windows + E** di keyboard
2. Atau klik icon folder di taskbar Windows

#### Langkah 2: Cari Folder Website
1. Buka folder tempat Anda menyimpan website
2. Contoh: `C:\Users\NamaAnda\Documents\website-warung-oma`

#### Langkah 3: Buka admin.html
1. Cari file bernama **`admin.html`**
2. **Double-click** file tersebut
3. File akan terbuka di browser default Anda

#### Langkah 4: Login
1. Anda akan melihat **form login** di tengah layar
2. Isi **Username:** `admin`
3. Isi **Password:** `admin123`
4. Klik tombol **"Login"**
5. Anda akan masuk ke **Dashboard Admin**

---

## 🖼️ Tampilan Login

```
┌─────────────────────────────────┐
│                                 │
│        Login Admin              │
│                                 │
│  Username: [admin          ]    │
│                                 │
│  Password: [admin123       ]    │
│                                 │
│         [  Login  ]             │
│                                 │
└─────────────────────────────────┘
```

---

## ✅ Setelah Login Berhasil

Anda akan melihat:

### 1. Header
- Judul: **"Admin Panel - Warung Oma"**
- Username Anda: **admin**
- Tombol **Logout**

### 2. Menu Navigasi
- 📊 **Dashboard** - Statistik dan ringkasan
- 📦 **Pesanan** - Kelola pesanan pelanggan
- 🍽️ **Produk** - Kelola produk/menu
- 📈 **Laporan** - Lihat laporan penjualan
- ⚙️ **Pengaturan** - Atur informasi bisnis

### 3. Dashboard (Halaman Utama)
Anda akan melihat:
- **Total Pesanan** - Jumlah semua pesanan
- **Pesanan Hari Ini** - Pesanan yang masuk hari ini
- **Total Pendapatan** - Total uang yang masuk
- **Pesanan Pending** - Pesanan yang belum diproses
- **Tabel Pesanan Terbaru** - 5 pesanan terakhir

---

## 🔄 Cara Logout

Jika ingin keluar dari admin panel:

1. Klik tombol **"Logout"** di pojok kanan atas
2. Akan muncul konfirmasi: "Apakah Anda yakin ingin logout?"
3. Klik **"OK"**
4. Anda akan kembali ke halaman login

---

## ❌ Jika Login Gagal

### Error: "Username atau password salah!"

**Penyebab:**
- Username atau password salah
- Ada spasi di awal/akhir
- Caps Lock aktif

**Solusi:**
1. Pastikan username: `admin` (huruf kecil semua)
2. Pastikan password: `admin123` (huruf kecil semua)
3. Cek Caps Lock tidak aktif
4. Jangan ada spasi di awal atau akhir
5. Copy-paste dari sini jika perlu:
   - Username: `admin`
   - Password: `admin123`

---

## 🔧 Troubleshooting

### Problem 1: File admin.html Tidak Bisa Dibuka

**Solusi:**
1. Klik kanan pada file `admin.html`
2. Pilih **"Open with"** atau **"Buka dengan"**
3. Pilih browser:
   - Google Chrome (Recommended)
   - Mozilla Firefox
   - Microsoft Edge
4. Klik **"OK"**

### Problem 2: Halaman Login Tidak Muncul

**Solusi:**
1. Refresh halaman (tekan **F5**)
2. Clear cache browser:
   - Tekan **Ctrl + Shift + Delete**
   - Pilih "Cached images and files"
   - Klik "Clear data"
3. Tutup browser dan buka lagi
4. Coba browser lain

### Problem 3: Sudah Login Tapi Kembali ke Login

**Solusi:**
1. Buka Console browser (tekan **F12**)
2. Ketik: `localStorage.clear()`
3. Tekan **Enter**
4. Refresh halaman (**F5**)
5. Login lagi

### Problem 4: Lupa Password

**Solusi:**
Password default adalah: `admin123`

Jika ingin ganti password:
1. Buka file `admin-script.js` dengan text editor
2. Cari baris:
   ```javascript
   if (username === 'admin' && password === 'admin123') {
   ```
3. Ganti `admin123` dengan password baru
4. Save file
5. Refresh halaman admin

---

## 🔒 Keamanan

### Tips Keamanan:

1. **Ganti Password Default**
   - Jangan gunakan `admin123` untuk production
   - Gunakan password yang kuat
   - Minimal 8 karakter, kombinasi huruf & angka

2. **Jangan Share Login**
   - Jangan berikan username/password ke orang lain
   - Logout setelah selesai menggunakan

3. **Gunakan HTTPS**
   - Untuk website production, gunakan HTTPS
   - Jangan login di WiFi publik

4. **Logout Setelah Selesai**
   - Selalu logout jika selesai
   - Terutama di komputer umum

---

## 📱 Login dari HP/Tablet

### Langkah 1: Transfer File
1. Copy folder website ke HP
2. Via USB, Bluetooth, atau Google Drive

### Langkah 2: Buka File
1. Buka File Manager di HP
2. Cari folder website
3. Tap file `admin.html`
4. Pilih browser (Chrome, Firefox, dll)

### Langkah 3: Login
1. Isi username: `admin`
2. Isi password: `admin123`
3. Tap tombol "Login"

---

## 🌐 Login via Live Server (Jika Menggunakan VS Code)

### Jika Anda Menggunakan Live Server:

1. **Jalankan Live Server**
   - Buka VS Code
   - Klik kanan `admin.html`
   - Pilih "Open with Live Server"

2. **Buka di Browser**
   - Browser akan terbuka otomatis
   - URL: `http://127.0.0.1:5500/admin.html`

3. **Login**
   - Username: `admin`
   - Password: `admin123`

4. **Akses dari HP (Satu WiFi)**
   - Cek IP laptop: `ipconfig` di CMD
   - Di HP, buka: `http://192.168.1.100:5500/admin.html`
   - Ganti `192.168.1.100` dengan IP laptop Anda

---

## 📊 Apa yang Bisa Dilakukan Setelah Login?

### 1. Dashboard
- Lihat statistik bisnis
- Monitor pesanan terbaru
- Cek pendapatan

### 2. Kelola Pesanan
- Lihat semua pesanan
- Update status pesanan
- Lihat detail pesanan
- Cetak pesanan
- Hapus pesanan

### 3. Kelola Produk
- Tambah produk baru
- Edit produk existing
- Upload gambar produk
- Hapus produk
- Toggle ketersediaan

### 4. Lihat Laporan
- Laporan penjualan
- Produk terpopuler
- Filter berdasarkan tanggal

### 5. Pengaturan
- Update informasi bisnis
- Ubah alamat
- Ubah kontak
- Ubah jam operasional

---

## 🎯 Quick Start Guide

**Untuk yang buru-buru:**

1. Double-click `admin.html`
2. Username: `admin`
3. Password: `admin123`
4. Klik "Login"
5. Selesai! ✅

---

## 📝 Catatan Penting

### Untuk Tugas Sekolah:
- Username dan password sudah cukup sederhana
- Fokus pada fitur dan fungsionalitas
- Demonstrasikan cara login saat presentasi

### Untuk Production/Website Real:
- Ganti dengan sistem autentikasi yang lebih aman
- Gunakan backend server (PHP, Node.js)
- Gunakan database untuk user management
- Implementasi hashing password
- Tambahkan fitur forgot password
- Tambahkan 2FA (Two-Factor Authentication)

---

## 🎥 Video Tutorial

### Cara Login Admin (Step by Step):

```
1. [00:00] Buka folder website
2. [00:05] Double-click admin.html
3. [00:10] Isi username: admin
4. [00:15] Isi password: admin123
5. [00:20] Klik Login
6. [00:25] Masuk ke Dashboard
7. [00:30] Explore menu-menu
8. [00:45] Logout
```

---

## ✅ Checklist Login

Sebelum login, pastikan:
- [ ] File `admin.html` ada di folder
- [ ] File `admin-script.js` ada di folder
- [ ] File `admin-style.css` ada di folder
- [ ] Browser sudah terbuka
- [ ] Koneksi internet aktif (untuk gambar)
- [ ] JavaScript enabled di browser

---

## 📞 Butuh Bantuan?

Jika masih kesulitan login:

1. **Cek file lengkap:**
   - admin.html ✓
   - admin-script.js ✓
   - admin-style.css ✓

2. **Cek browser:**
   - Chrome (Recommended)
   - Firefox
   - Edge

3. **Cek console error:**
   - Tekan F12
   - Lihat tab Console
   - Screenshot error yang muncul

4. **Hubungi:**
   - WhatsApp: 085339204829
   - Tanya ke anggota kelompok

---

## 🎉 Selamat!

Anda sekarang bisa login ke admin panel dan mengelola website Warung Oma!

**Selamat mengelola website! 🚀**

---

## 📚 Dokumentasi Terkait

Setelah login, baca juga:
- `PANDUAN_UPLOAD_GAMBAR.md` - Cara upload gambar produk
- `PANDUAN_PRESENTASI.md` - Cara presentasi website
- `CARA_MENJALANKAN.md` - Cara menjalankan website
- `QUICK_REFERENCE.md` - Referensi cepat

---

**Last Updated:** 2024  
**Version:** 1.0  
**Website:** Warung Oma - Manggarai Barat, NTT
