# 📊 Template PowerPoint - Presentasi Warung Oma

## Cara Menggunakan Template Ini:

1. Buka Microsoft PowerPoint
2. Buat presentasi baru
3. Copy-paste konten dari template ini ke setiap slide
4. Tambahkan screenshot website
5. Sesuaikan design sesuai selera

---

## SLIDE 1: COVER

```
PENGEMBANGAN WEBSITE
INFORMASI DAN PEMESANAN UMKM

WARUNG OMA
Makanan Tradisional Manggarai, NTT

[Logo/Gambar Warung Oma]

Kelompok: [Nama Kelompok]
Kelas: [Kelas]
Tahun: 2024
```

---

## SLIDE 2: IDENTITAS KELOMPOK

```
ANGGOTA KELOMPOK

1. [Nama Anggota 1] - [NIS] - [Tugas]
2. [Nama Anggota 2] - [NIS] - [Tugas]
3. [Nama Anggota 3] - [NIS] - [Tugas]
4. [Nama Anggota 4] - [NIS] - [Tugas]
5. [Nama Anggota 5] - [NIS] - [Tugas]

Guru Pembimbing: [Nama Guru]
Mata Pelajaran: Rekayasa Perangkat Lunak (RPL)
```

---

## SLIDE 3: LATAR BELAKANG

```
LATAR BELAKANG

🎯 Permasalahan:
• UMKM masih promosi manual (poster, WA)
• Informasi produk tidak tersusun rapi
• Pemesanan masih manual
• Jangkauan pasar terbatas

💡 Solusi:
• Website informasi UMKM
• Katalog produk online
• Form pemesanan online
• Backend management system
```

---

## SLIDE 4: PROFIL UMKM

```
PROFIL UMKM

Nama Usaha: Warung Oma
Pemilik: Oma
Lokasi: Jalan Kuwus-Golowelu, Nantal
         Kabupaten Manggarai Barat
         Nusa Tenggara Timur

Kontak: 085339204829 (WhatsApp)
Jam Operasional: 07.00 - 21.00 WITA

Jenis Usaha: Makanan Tradisional Manggarai/NTT
```

---

## SLIDE 5: TUJUAN PROYEK

```
TUJUAN PROYEK

1. Membuat website informasi UMKM yang lengkap
   dan profesional

2. Mengimplementasikan sistem pemesanan online
   dengan validasi JavaScript

3. Membuat backend system untuk manajemen
   produk dan pesanan

4. Membuat website responsive untuk desktop,
   tablet, dan mobile

5. Menerapkan HTML, CSS, JavaScript tanpa framework
```

---

## SLIDE 6: TEKNOLOGI YANG DIGUNAKAN

```
TEKNOLOGI

Frontend:
✅ HTML5 - Struktur website
✅ CSS3 - Styling & responsive design
✅ JavaScript (ES6+) - Interaktivitas & validasi

Storage:
✅ localStorage - Penyimpanan data browser

Tools:
✅ Visual Studio Code - Code editor
✅ Chrome DevTools - Testing & debugging

Hosting (Optional):
✅ Netlify / Vercel / GitHub Pages
```

---

## SLIDE 7: FITUR WEBSITE - HALAMAN UTAMA

```
FITUR WEBSITE UTAMA

1. Hero Section
   • Banner dengan background image
   • Judul dan deskripsi usaha

2. About Section
   • Informasi lengkap usaha
   • Alamat dan kontak

3. Products Section
   • 8 produk Manggarai/NTT
   • Gambar, nama, harga, deskripsi

4. Order Form
   • Form pemesanan online
   • Validasi JavaScript

5. Contact Section
   • WhatsApp integration
```

[Tambahkan screenshot website]

---

## SLIDE 8: PRODUK YANG DIJUAL

```
DAFTAR PRODUK

Makanan Utama:
1. Nasi Jagung Manggarai - Rp 15.000
2. Ja'i Wuut (Daging Babi) - Rp 35.000
3. Ikan Bakar Sambal Lu'at - Rp 30.000
4. Ayam Taliwang NTT - Rp 28.000
5. Rumpu Rampe - Rp 20.000

Minuman & Warkop:
6. Kopi Flores Panas - Rp 8.000
7. Kopi Hitam Warkop - Rp 2.000
8. Nasi Bungkus Warkop - Rp 5.000
```

[Tambahkan foto produk]

---

## SLIDE 9: FORM PEMESANAN

```
FORM PEMESANAN ONLINE

Field Input:
• Nama Pelanggan
• Produk yang Dipesan (dropdown)
• Jumlah Pesanan
• Alamat Pengiriman

Validasi JavaScript:
✅ Nama minimal 2 karakter
✅ Produk harus dipilih
✅ Jumlah 1-50 porsi
✅ Alamat minimal 10 karakter

Output:
✅ Pesan sukses dengan detail pesanan
✅ Data tersimpan di localStorage
```

[Tambahkan screenshot form]

---

## SLIDE 10: BACKEND SYSTEM

```
BACKEND MANAGEMENT SYSTEM

Login:
• Username: admin
• Password: admin123

Fitur:
1. Dashboard - Statistik real-time
2. Orders Management - Kelola pesanan
3. Products Management - Kelola produk
4. Analytics - Laporan (Coming Soon)
5. Settings - Pengaturan (Coming Soon)

Design:
• Dark theme profesional
• Sidebar navigation
• Responsive design
```

[Tambahkan screenshot backend]

---

## SLIDE 11: DASHBOARD BACKEND

```
DASHBOARD STATISTICS

Real-time Data:
📦 Total Orders - Jumlah semua pesanan
🕒 Today Orders - Pesanan hari ini
💰 Total Revenue - Total pendapatan
⏳ Pending Orders - Pesanan menunggu

Recent Orders:
• Tabel 5 pesanan terakhir
• Quick view order details
• Status pesanan
```

[Tambahkan screenshot dashboard]

---

## SLIDE 12: ORDERS MANAGEMENT

```
KELOLA PESANAN

Fitur:
• View all orders dalam tabel
• Filter by status (Pending, Confirmed, dll)
• Update status pesanan
• Delete orders
• Real-time statistics update

Status Flow:
Pending → Confirmed → Preparing → Ready → Delivered

Atau: Cancelled
```

[Tambahkan screenshot orders management]

---

## SLIDE 13: PRODUCTS MANAGEMENT

```
KELOLA PRODUK

Fitur:
• View all products dengan thumbnail
• Add new product
• Edit existing product
• Delete product
• Upload image (max 2MB) atau URL
• Toggle availability

Form Input:
• Nama produk
• Harga
• Deskripsi
• Kategori (Makanan/Minuman/Snack)
• Gambar
• Status ketersediaan
```

[Tambahkan screenshot products management]

---

## SLIDE 14: DATA SYNCHRONIZATION

```
SINKRONISASI DATA

Backend → Website:
1. Admin tambah/edit produk di backend
2. Data tersimpan di localStorage
3. Website membaca dari localStorage
4. Produk muncul di website (setelah refresh)

Website → Backend:
1. Customer pesan di website
2. Order tersimpan di localStorage
3. Backend membaca dari localStorage
4. Order muncul di Orders Management

Storage: localStorage Browser
```

[Tambahkan diagram alur]

---

## SLIDE 15: RESPONSIVE DESIGN

```
RESPONSIVE DESIGN

Desktop (> 768px):
• Layout 4 kolom produk
• Sidebar backend terlihat
• Full navigation menu

Tablet (481-768px):
• Layout 2 kolom produk
• Responsive navigation
• Touch-friendly

Mobile (< 480px):
• Layout 1 kolom produk
• Hamburger menu
• Optimized for touch
• Scrollable tables
```

[Tambahkan screenshot responsive]

---

## SLIDE 16: STRUKTUR PROYEK

```
STRUKTUR FILE

Main Files:
├── index.html          # Website utama
├── style.css           # Styling
├── script.js           # JavaScript
├── backend.html        # Backend system
├── backend-script.js   # Backend JS
└── admin-simple.html   # Admin alternatif

Documentation: 28 files (~250+ pages)
├── Panduan penggunaan
├── Panduan backend
├── Panduan deploy
├── Testing checklists
└── Troubleshooting guides
```

---

## SLIDE 17: TESTING

```
TESTING RESULTS

✅ Functional Testing
   • Semua fitur berfungsi dengan baik
   • Form validasi bekerja
   • Data sync berfungsi

✅ Responsive Testing
   • Desktop: Perfect
   • Tablet: Perfect
   • Mobile: Perfect

✅ Cross-Browser Testing
   • Chrome: ✅
   • Firefox: ✅
   • Edge: ✅
   • Safari: ✅

✅ Performance Testing
   • Load time < 3 detik
   • Smooth animations
```

---

## SLIDE 18: DOKUMENTASI

```
DOKUMENTASI LENGKAP

Total: 28 File Dokumentasi (~250+ halaman)

Kategori:
📖 Panduan Utama (4 files)
🚀 Panduan Penggunaan (4 files)
🔐 Panduan Backend (4 files)
🌐 Panduan Deploy (4 files)
🧪 Testing & Troubleshooting (5 files)
💡 Tips & Reference (4 files)
📊 Project Info (3 files)

Bahasa: Indonesia
Format: Markdown (.md)
```

---

## SLIDE 19: DEMO WEBSITE

```
LIVE DEMO

[Tampilkan demo website secara langsung]

Demo Flow:
1. Buka website (index.html)
2. Show hero & products section
3. Klik "Pesan Sekarang"
4. Isi form pemesanan
5. Submit order
6. Show success message
7. Login ke backend
8. Show order di Orders Management
9. Add new product
10. Refresh website
11. Show produk baru muncul
```

---

## SLIDE 20: DEPLOYMENT

```
CARA DEPLOY WEBSITE

Pilihan Hosting GRATIS:

1. Netlify (Recommended)
   • Drag & drop ZIP file
   • Deploy dalam 2 menit
   • Link: .netlify.app

2. GitHub Pages
   • Upload ke repository
   • Aktifkan Pages
   • Link: .github.io

3. Vercel
   • Upload folder
   • Auto deploy
   • Link: .vercel.app

Biaya: 100% GRATIS
HTTPS: Otomatis
Bandwidth: 100GB/bulan
```

---

## SLIDE 21: KELEBIHAN PROYEK

```
KELEBIHAN PROYEK

✅ Fitur Lengkap
   • Website + Backend system
   • CRUD operations
   • Image upload
   • Data synchronization

✅ Design Profesional
   • Modern UI/UX
   • Dark theme backend
   • Smooth animations
   • Responsive design

✅ Dokumentasi Excellent
   • 28 file dokumentasi
   • ~250+ halaman
   • Panduan lengkap

✅ Beyond Requirements
   • Melebihi tugas
   • Production-ready
```

---

## SLIDE 22: KENDALA & SOLUSI

```
KENDALA YANG DIHADAPI

Kendala 1: Form Pemesanan Error
Masalah: "Produk tidak ditemukan"
Solusi: Update fungsi processOrder()
        untuk ambil data dari localStorage

Kendala 2: Produk Tidak Sync
Masalah: Produk baru tidak muncul di website
Solusi: Implementasi dynamic product loading
        dari localStorage

Kendala 3: Responsive Design
Masalah: Layout berantakan di mobile
Solusi: Implementasi media queries CSS
        dan mobile-first approach
```

---

## SLIDE 23: PEMBELAJARAN

```
PEMBELAJARAN YANG DIDAPAT

Technical Skills:
✅ HTML semantic structure
✅ CSS responsive design
✅ JavaScript DOM manipulation
✅ Form validation
✅ localStorage API
✅ FileReader API

Soft Skills:
✅ Project planning
✅ Time management
✅ Problem solving
✅ Documentation writing
✅ Teamwork & collaboration
```

---

## SLIDE 24: PEMBAGIAN TUGAS

```
PEMBAGIAN TUGAS KELOMPOK

[Nama Anggota 1]:
• HTML structure
• Content writing

[Nama Anggota 2]:
• CSS styling
• Responsive design

[Nama Anggota 3]:
• JavaScript functionality
• Form validation

[Nama Anggota 4]:
• Backend system
• Data management

[Nama Anggota 5]:
• Testing
• Documentation
```

---

## SLIDE 25: KESIMPULAN

```
KESIMPULAN

1. Website berhasil dibuat dengan fitur lengkap
   sesuai requirements

2. Teknologi: HTML5, CSS3, JavaScript
   (tanpa framework)

3. Fitur tambahan: Backend system profesional,
   extensive documentation

4. Testing: Semua fitur berfungsi dengan baik,
   responsive, cross-browser compatible

5. Manfaat: UMKM punya website profesional,
   pelanggan mudah pesan, admin mudah kelola
```

---

## SLIDE 26: SARAN PENGEMBANGAN

```
SARAN PENGEMBANGAN

Untuk Production:
1. Backend Server (Node.js/PHP)
2. Database (MySQL/MongoDB)
3. Payment Gateway (Midtrans/Xendit)
4. Email/SMS Notifications
5. Advanced Analytics

Untuk UMKM:
1. Update produk berkala
2. Promosi via social media
3. Custom domain
4. Google My Business listing
```

---

## SLIDE 27: LINK & AKSES

```
LINK & AKSES

Website:
🌐 [Link website jika sudah deploy]
   atau: file:///path/to/index.html

Backend:
🔐 [Link backend]/backend.html
   Username: admin
   Password: admin123

Repository:
📁 [Link GitHub jika ada]

Dokumentasi:
📖 28 file dokumentasi tersedia
   di folder proyek
```

---

## SLIDE 28: TERIMA KASIH

```
TERIMA KASIH

Ucapan Terima Kasih:
• Guru Pembimbing
• Warung Oma (Studi Kasus)
• Teman-teman Kelompok
• Keluarga

Kontak:
📧 Email: [email kelompok]
📱 WhatsApp: [nomor kelompok]

Q&A
Silakan ajukan pertanyaan
```

---

## TIPS MEMBUAT POWERPOINT:

### Design Tips:
1. **Gunakan Template Profesional**
   - Pilih template modern
   - Konsisten warna (merah, hijau, biru)
   - Font readable (Arial, Calibri)

2. **Tambahkan Visual**
   - Screenshot website
   - Screenshot backend
   - Diagram alur
   - Foto produk

3. **Animasi Sederhana**
   - Entrance: Fade in
   - Emphasis: Grow
   - Exit: Fade out
   - Jangan berlebihan

4. **Bullet Points**
   - Maksimal 5-6 poin per slide
   - Singkat dan jelas
   - Gunakan icon/emoji

### Screenshot yang Perlu:
1. Hero section website
2. Products section
3. Order form
4. Backend login
5. Dashboard
6. Orders management
7. Products management
8. Responsive view (mobile)

---

## CARA CONVERT KE PDF:

### Dari PowerPoint:
1. Buka PowerPoint
2. File → Save As
3. Pilih "PDF" di format
4. Klik "Save"

### Dari Google Slides:
1. Buka Google Slides
2. File → Download
3. Pilih "PDF Document (.pdf)"

### Online Converter:
1. https://www.ilovepdf.com/powerpoint_to_pdf
2. https://smallpdf.com/ppt-to-pdf
3. Upload file PPT
4. Download PDF

---

**File ini siap untuk di-copy ke PowerPoint!**
**Sesuaikan dengan kebutuhan presentasi Anda.**
