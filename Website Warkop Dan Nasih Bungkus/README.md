# 🍽️ Website UMKM - Warung Oma

> Website informasi dan pemesanan online untuk Warung Makan Oma - Makanan Tradisional Manggarai, Nusa Tenggara Timur

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://username.github.io/warung-oma)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌟 Tentang Proyek

Website ini dibuat untuk **Warung Oma**, sebuah UMKM yang menjual makanan tradisional khas Manggarai dan Nusa Tenggara Timur. Platform ini memudahkan pelanggan untuk melihat menu dan memesan makanan secara online, serta menyediakan sistem backend untuk pemilik usaha mengelola produk dan pesanan.

### ✨ Highlights
- 🍜 **8 Produk Makanan Tradisional** Manggarai/NTT
- 📱 **Responsive Design** - Desktop, Tablet, Mobile
- 🎨 **Modern UI/UX** - Clean & Professional
- 🔐 **Backend System** - Dark theme dengan full CRUD
- 📊 **Real-time Statistics** - Dashboard analytics
- 🖼️ **Image Upload** - Upload gambar produk (max 2MB)
- 💾 **localStorage** - Data persistence tanpa database
- ⚡ **No Framework** - Pure vanilla JavaScript

## 📋 Informasi Proyek

**Nama Usaha:** Warung Oma  
**Alamat:** Jalan Kuwus-Golowelu, Nantal, Kabupaten Manggarai Barat, Nusa Tenggara Timur  
**Kontak:** 
- WhatsApp: 085339204829
- Telepon: (0385) 123456

**Jam Operasional:** Senin - Minggu: 07.00 - 21.00 WITA

## 🚀 Fitur Website

### Halaman Utama (index.html)
1. **Hero Section** - Banner utama dengan gambar latar belakang makanan yang menarik
2. **Informasi UMKM** - Detail lengkap tentang usaha, alamat, kontak, dan jam operasional
3. **Katalog Produk** - Menampilkan 6 produk makanan dan minuman dengan:
   - Gambar produk
   - Nama produk
   - Harga
   - Deskripsi
   - Tombol pesan
4. **Form Pemesanan** - Form online dengan validasi JavaScript untuk:
   - Nama pelanggan
   - Pilihan produk
   - Jumlah pesanan
   - Alamat pengiriman
5. **Kontak** - Informasi kontak lengkap dengan tombol WhatsApp

### Halaman Admin (admin-simple.html & backend.html)

#### Admin Simple (admin-simple.html)
Panel admin sederhana dengan semua fitur dalam satu file:
1. **Login System** - Username: admin, Password: admin123
2. **Dashboard** - Statistik bisnis real-time
3. **Manajemen Pesanan** - Kelola semua pesanan
4. **Manajemen Produk** - CRUD produk lengkap dengan upload gambar

#### Backend System (backend.html) ⭐ RECOMMENDED
Panel admin profesional dengan desain backend modern:
1. **Dashboard** - Statistik bisnis real-time:
   - Total pesanan
   - Pesanan hari ini
   - Total pendapatan
   - Pesanan pending
2. **Orders Management** - Kelola semua pesanan dengan fitur:
   - Filter berdasarkan status
   - Update status pesanan (Pending → Confirmed → Preparing → Ready → Delivered)
   - Detail pesanan
   - Hapus pesanan
3. **Products Management** - Kelola produk dengan fitur:
   - Tambah produk baru
   - Edit produk
   - Hapus produk
   - Upload gambar (max 2MB) atau URL
   - Toggle ketersediaan
4. **Analytics** - Dashboard analitik (Coming Soon)
5. **Settings** - Pengaturan sistem (Coming Soon)

**Desain Backend:**
- Dark theme profesional (#0f172a background)
- Sidebar navigation dengan icons
- Gradient buttons (purple-blue)
- Responsive design
- Modern UI/UX

## 🎨 Desain & Tampilan

- **Responsive Design** - Tampil sempurna di desktop, tablet, dan mobile
- **Gambar Latar Belakang** - Hero section dengan gambar makanan berkualitas tinggi
- **Gradient Background** - Setiap section memiliki gradient yang menarik
- **Animasi Smooth** - Transisi dan animasi yang halus
- **Color Scheme:**
  - Primary: #e74c3c (Merah)
  - Secondary: #27ae60 (Hijau)
  - Accent: #3498db (Biru)
  - Dark: #2c3e50

## 📁 Struktur File

```
folder-website-umkm/
│
├── index.html              # Halaman utama website
├── style.css               # Styling untuk halaman utama
├── script.js               # JavaScript untuk halaman utama
│
├── admin-simple.html       # Admin panel sederhana (all-in-one)
├── admin.html              # Admin panel (dengan file terpisah)
├── admin-style.css         # Styling untuk admin panel
├── admin-script.js         # JavaScript untuk admin panel
│
├── backend.html            # ⭐ Backend system (RECOMMENDED)
├── backend-script.js       # JavaScript untuk backend system
│
├── test-login.html         # Test page untuk login
│
├── README.md               # Dokumentasi proyek
├── QUICK_REFERENCE.md      # Referensi cepat
├── CARA_MENJALANKAN.md     # Panduan menjalankan website
├── CARA_LOGIN_ADMIN.md     # Panduan login admin
├── AKSES_ADMIN.md          # Informasi akses admin
├── TROUBLESHOOTING_LOGIN.md # Troubleshooting login
├── PANDUAN_UPLOAD_GAMBAR.md # Panduan upload gambar
├── PANDUAN_PRESENTASI.md   # Panduan presentasi
├── TESTING_CHECKLIST.md    # Checklist testing
├── BACKEND_GUIDE.md        # ⭐ Panduan lengkap backend
├── BACKEND_QUICK_START.md  # ⭐ Quick start backend
└── BACKEND_TESTING.md      # ⭐ Testing checklist backend
```

## 🔧 Cara Menggunakan

### Halaman Utama
1. Buka file `index.html` di browser
2. Navigasi melalui menu untuk melihat informasi, produk, dan form pemesanan
3. Isi form pemesanan dan klik "Kirim Pesanan"
4. Pesanan akan tersimpan dan dapat dikelola di admin panel

### Backend System (RECOMMENDED)
1. Buka file `backend.html` di browser
   - Atau klik tombol "🔐 Admin" di website
2. Login dengan kredensial:
   - **Username:** admin
   - **Password:** admin123
3. Kelola pesanan di "Orders Management"
4. Kelola produk di "Products Management"
5. Lihat statistik di "Dashboard"

**Dokumentasi Backend:**
- `BACKEND_GUIDE.md` - Panduan lengkap backend
- `BACKEND_QUICK_START.md` - Quick start guide
- `BACKEND_TESTING.md` - Testing checklist

### Admin Simple (Alternative)
1. Buka file `admin-simple.html` di browser
2. Login dengan kredensial yang sama
3. Semua fitur dalam satu file (inline CSS/JS)

## 💾 Penyimpanan Data

Website ini menggunakan **localStorage** browser untuk menyimpan data:
- Pesanan pelanggan
- Data produk
- Pengaturan bisnis
- Session admin

**Catatan:** Data akan tersimpan di browser lokal. Untuk production, disarankan menggunakan database server.

## 🎯 Validasi Form

Form pemesanan memiliki validasi JavaScript untuk:
- Nama pelanggan (minimal 2 karakter)
- Produk harus dipilih
- Jumlah pesanan (minimal 1, maksimal 50)
- Alamat pengiriman (minimal 10 karakter)

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 481px - 768px
- **Mobile:** < 480px

## 🌟 Fitur Khusus

### Website
1. **Smooth Scrolling** - Navigasi halus antar section
2. **Mobile Menu** - Hamburger menu untuk tampilan mobile
3. **Product Quick Order** - Klik tombol pesan langsung scroll ke form
4. **Auto-save Form** - Form data tersimpan otomatis di localStorage
5. **Dynamic Products** - Produk dimuat dari localStorage (sync dengan backend)
6. **Real-time Update** - Produk yang ditambah di backend muncul di website

### Backend System
1. **Dark Theme** - Desain profesional dengan dark mode
2. **Sidebar Navigation** - Menu navigasi dengan icons
3. **Real-time Statistics** - Dashboard update otomatis
4. **Image Upload** - Upload gambar produk (max 2MB) atau gunakan URL
5. **Order Status Flow** - Update status pesanan dengan dropdown
6. **Data Sync** - Produk di backend otomatis sync ke website
7. **Responsive Design** - Tampil sempurna di desktop dan mobile
8. **localStorage** - Data tersimpan lokal di browser

## 🎨 Gambar Latar Belakang

Website menggunakan gambar dari Unsplash:
- Hero section: Gambar makanan berkualitas tinggi dengan efek slideshow
- Gradient overlays untuk readability
- Animasi subtle untuk visual appeal

## 📝 Catatan Pengembangan

Website ini dibuat untuk memenuhi tugas kelompok Pengembangan Website UMKM dengan ketentuan:
- ✅ HTML untuk struktur
- ✅ CSS untuk styling (responsive)
- ✅ JavaScript untuk validasi dan interaktivitas
- ✅ Tanpa framework
- ✅ Informasi UMKM lengkap
- ✅ 8 produk (termasuk menu warkop)
- ✅ Form pemesanan dengan validasi
- ✅ Responsive design
- ✅ Gambar produk real dari Unsplash

## 🔐 Keamanan

**Penting:** Untuk production:
1. Ganti sistem autentikasi sederhana dengan backend authentication
2. Gunakan HTTPS
3. Implementasi database server
4. Tambahkan CSRF protection
5. Validasi server-side

## 📞 Support

Untuk pertanyaan atau bantuan, hubungi:
- WhatsApp: 085339204829
- Email: warungoma@example.com

## 📄 Lisensi

© 2024 Warung Oma. All rights reserved.

---

**Dibuat dengan ❤️ untuk Warung Oma - Manggarai Barat, NTT**
