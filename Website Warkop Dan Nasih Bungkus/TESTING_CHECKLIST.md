# Testing Checklist - Website Warung Oma

## ✅ Checklist Testing Sebelum Presentasi

### 🌐 Halaman Utama (index.html)

#### Navigation
- [ ] Logo "Warung Oma" tampil dengan benar
- [ ] Menu navigasi (Beranda, Tentang Kami, Produk, Pesan, Kontak) berfungsi
- [ ] Smooth scrolling ke setiap section
- [ ] Hamburger menu muncul di mobile view
- [ ] Hamburger menu dapat dibuka dan ditutup
- [ ] Menu tertutup otomatis saat link diklik

#### Hero Section
- [ ] Gambar background tampil dengan baik
- [ ] Teks "Selamat Datang di Warung Makan Oma" terbaca jelas
- [ ] Animasi fadeInUp berjalan smooth
- [ ] Button "Lihat Menu" berfungsi scroll ke produk
- [ ] Hero section responsive di mobile

#### Section Tentang Kami
- [ ] Nama "Warung Makan Oma" tampil
- [ ] Deskripsi usaha terbaca dengan baik
- [ ] Alamat lengkap: "Jalan Kuwus-Golowelu, Nantal, Kabupaten Manggarai Barat, Nusa Tenggara Timur"
- [ ] Kontak WhatsApp: 085339204829
- [ ] Kontak Telepon: (0385) 123456
- [ ] Jam operasional: "Senin - Minggu: 07.00 - 21.00 WITA"
- [ ] Info cards memiliki hover effect
- [ ] Layout responsive di berbagai ukuran layar

#### Section Produk
- [ ] Semua 8 produk tampil dengan benar:
  1. Nasi Jagung Manggarai - Rp 15.000
  2. Ja'i Wuut (Daging Babi) - Rp 35.000
  3. Ikan Bakar Sambal Lu'at - Rp 30.000
  4. Ayam Taliwang NTT - Rp 28.000
  5. Rumpu Rampe - Rp 20.000
  6. Kopi Flores Panas - Rp 8.000
  7. Kopi Hitam Warkop - Rp 2.000
  8. Nasi Bungkus Warkop - Rp 5.000
- [ ] Gambar produk tampil (dari Unsplash)
- [ ] Harga terformat dengan benar (Rp)
- [ ] Deskripsi produk terbaca
- [ ] Hover effect pada product card
- [ ] Button "Pesan Sekarang" berfungsi
- [ ] Klik button scroll ke form dan select produk
- [ ] Grid responsive (1 kolom di mobile, 2-3 di desktop)

#### Form Pemesanan
- [ ] Form tampil dengan lengkap
- [ ] Field "Nama Pelanggan" berfungsi
- [ ] Dropdown "Produk yang Dipesan" menampilkan semua produk
- [ ] Field "Jumlah Pesanan" hanya menerima angka
- [ ] Field "Alamat Pengiriman" berfungsi
- [ ] Character counter muncul di alamat (max 200)

**Validasi Form:**
- [ ] Submit dengan field kosong menampilkan error
- [ ] Nama minimal 2 karakter
- [ ] Produk harus dipilih
- [ ] Jumlah minimal 1, maksimal 50
- [ ] Alamat minimal 10 karakter
- [ ] Error message tampil dengan jelas
- [ ] Field error ditandai dengan border merah
- [ ] Submit berhasil menampilkan pesan sukses
- [ ] Data tersimpan di localStorage
- [ ] Form dapat di-reset setelah submit
- [ ] Auto-save form data berfungsi

#### Section Kontak
- [ ] Informasi kontak lengkap tampil
- [ ] Button "Chat WhatsApp" berfungsi (link ke wa.me)
- [ ] Background gradient tampil dengan baik
- [ ] Hover effect pada contact cards
- [ ] Responsive di mobile

#### Footer
- [ ] Copyright text tampil: "© 2024 Warung Makan Oma"
- [ ] Background gradient tampil
- [ ] Responsive di semua ukuran

#### Fitur Tambahan
- [ ] Scroll to top button muncul saat scroll down
- [ ] Scroll to top button berfungsi
- [ ] Animasi fadeInUp pada product cards
- [ ] Smooth transitions pada semua hover effects
- [ ] Loading state pada form submission

---

### 🔐 Admin Panel (admin.html)

#### Login
- [ ] Modal login tampil saat pertama buka
- [ ] Field username dan password berfungsi
- [ ] Login dengan username: "admin" berhasil
- [ ] Login dengan password: "admin123" berhasil
- [ ] Login gagal menampilkan error message
- [ ] Session tersimpan di localStorage
- [ ] Auto-login jika sudah pernah login

#### Dashboard
- [ ] Header "Admin Panel - Warung Oma" tampil
- [ ] Username admin tampil di header
- [ ] Button logout berfungsi
- [ ] Statistik cards tampil:
  - Total Pesanan
  - Pesanan Hari Ini
  - Total Pendapatan (format Rp)
  - Pesanan Pending
- [ ] Angka statistik update otomatis
- [ ] Tabel pesanan terbaru tampil (5 terakhir)
- [ ] Klik row pesanan membuka detail

#### Navigation Menu
- [ ] Menu Dashboard aktif default
- [ ] Menu Pesanan berfungsi
- [ ] Menu Produk berfungsi
- [ ] Menu Laporan berfungsi
- [ ] Menu Pengaturan berfungsi
- [ ] Active state menu berubah saat diklik
- [ ] Section berganti dengan smooth

#### Manajemen Pesanan
- [ ] Tabel pesanan tampil semua data
- [ ] Filter status berfungsi (All, Pending, Confirmed, dll)
- [ ] Button refresh berfungsi
- [ ] Dropdown status di setiap row berfungsi
- [ ] Update status tersimpan
- [ ] Button "Detail" membuka modal
- [ ] Button "Hapus" menampilkan konfirmasi
- [ ] Hapus pesanan berfungsi
- [ ] Data update di dashboard setelah perubahan

**Modal Detail Pesanan:**
- [ ] Modal tampil dengan benar
- [ ] Informasi pesanan lengkap
- [ ] Informasi pelanggan lengkap
- [ ] Detail produk dalam tabel
- [ ] Total pembayaran terformat Rp
- [ ] Button "Cetak" berfungsi
- [ ] Print preview tampil dengan baik
- [ ] Button "Tutup" menutup modal
- [ ] Klik di luar modal menutup modal

#### Manajemen Produk
- [ ] Tabel produk tampil dengan 6 produk default
- [ ] Button "Tambah Produk" membuka modal
- [ ] Button "Edit" membuka modal dengan data produk
- [ ] Button "Hapus" menampilkan konfirmasi
- [ ] Status tersedia/tidak tersedia tampil

**Modal Form Produk:**
- [ ] Modal tambah produk tampil
- [ ] Modal edit produk tampil dengan data
- [ ] Field nama produk berfungsi
- [ ] Field harga hanya menerima angka
- [ ] Field deskripsi berfungsi
- [ ] Dropdown kategori berfungsi
- [ ] Field URL gambar berfungsi
- [ ] Checkbox "Tersedia" berfungsi
- [ ] Submit form menyimpan data
- [ ] Data baru muncul di tabel
- [ ] Edit produk update data
- [ ] Validasi form berfungsi
- [ ] Button tutup menutup modal

#### Laporan
- [ ] Input tanggal mulai berfungsi
- [ ] Input tanggal akhir berfungsi
- [ ] Dropdown periode berfungsi
- [ ] Button "Generate" laporan penjualan berfungsi
- [ ] Laporan menampilkan:
  - Total pesanan
  - Total pendapatan
  - Rata-rata per pesanan
  - Periode laporan
- [ ] Button "Generate" laporan produk berfungsi
- [ ] Laporan produk menampilkan:
  - Nama produk
  - Jumlah terjual
  - Total pendapatan
- [ ] Produk diurutkan dari terpopuler

#### Pengaturan
- [ ] Form pengaturan tampil
- [ ] Field nama usaha terisi default "Warung Oma"
- [ ] Field alamat terisi default
- [ ] Field telepon terisi default
- [ ] Field WhatsApp terisi default
- [ ] Field jam operasional terisi default
- [ ] Field biaya pengiriman berfungsi
- [ ] Submit form menyimpan pengaturan
- [ ] Notifikasi sukses tampil
- [ ] Data tersimpan di localStorage

#### Notifikasi
- [ ] Notifikasi sukses tampil (hijau)
- [ ] Notifikasi error tampil (merah)
- [ ] Notifikasi info tampil (biru)
- [ ] Notifikasi auto-close setelah 3 detik
- [ ] Animasi slide in/out smooth

#### Logout
- [ ] Button logout menampilkan konfirmasi
- [ ] Logout menghapus session
- [ ] Redirect ke login modal
- [ ] Data tidak hilang setelah logout

---

### 📱 Responsive Testing

#### Desktop (> 768px)
- [ ] Layout 3 kolom untuk produk
- [ ] Navigation horizontal
- [ ] Semua elemen proporsional
- [ ] Hover effects berfungsi
- [ ] Tidak ada horizontal scroll

#### Tablet (481px - 768px)
- [ ] Layout 2 kolom untuk produk
- [ ] Navigation masih horizontal atau hamburger
- [ ] Font size terbaca
- [ ] Spacing proporsional
- [ ] Touch-friendly buttons

#### Mobile (< 480px)
- [ ] Layout 1 kolom untuk produk
- [ ] Hamburger menu aktif
- [ ] Font size optimal
- [ ] Buttons cukup besar untuk touch
- [ ] Form fields tidak terlalu kecil
- [ ] Tidak ada horizontal scroll
- [ ] Hero height sesuai (80vh)
- [ ] Padding dan margin proporsional

---

### 🌐 Browser Compatibility

#### Google Chrome
- [ ] Semua fitur berfungsi
- [ ] Tampilan sesuai desain
- [ ] Animasi smooth
- [ ] localStorage berfungsi

#### Mozilla Firefox
- [ ] Semua fitur berfungsi
- [ ] Tampilan sesuai desain
- [ ] Animasi smooth
- [ ] localStorage berfungsi

#### Microsoft Edge
- [ ] Semua fitur berfungsi
- [ ] Tampilan sesuai desain
- [ ] Animasi smooth
- [ ] localStorage berfungsi

#### Safari (jika ada Mac)
- [ ] Semua fitur berfungsi
- [ ] Tampilan sesuai desain
- [ ] Animasi smooth
- [ ] localStorage berfungsi

---

### 💾 Data & Storage

#### localStorage
- [ ] Pesanan tersimpan dengan benar
- [ ] Produk tersimpan dengan benar
- [ ] Pengaturan tersimpan dengan benar
- [ ] Session admin tersimpan
- [ ] Data tidak hilang setelah refresh
- [ ] Data dapat dihapus (clear localStorage)

#### Data Integrity
- [ ] ID pesanan unique
- [ ] ID produk unique
- [ ] Format tanggal konsisten (ISO)
- [ ] Format currency konsisten (Rp)
- [ ] Status pesanan valid
- [ ] Relasi data benar

---

### 🎨 Visual & UX

#### Colors
- [ ] Color scheme konsisten
- [ ] Contrast ratio cukup untuk readability
- [ ] Hover states jelas
- [ ] Active states jelas
- [ ] Error states jelas (merah)
- [ ] Success states jelas (hijau)

#### Typography
- [ ] Font family konsisten
- [ ] Font size hierarchy jelas
- [ ] Line height comfortable
- [ ] Text alignment proper
- [ ] No text overflow

#### Spacing
- [ ] Padding konsisten
- [ ] Margin konsisten
- [ ] Section spacing proporsional
- [ ] Element spacing tidak terlalu rapat/renggang

#### Images
- [ ] Placeholder images load
- [ ] Images tidak distorted
- [ ] Images responsive
- [ ] Alt text ada (accessibility)

#### Animations
- [ ] Smooth transitions (0.3s)
- [ ] No janky animations
- [ ] Hover effects smooth
- [ ] Scroll animations smooth
- [ ] Loading states smooth

---

### ⚡ Performance

- [ ] Page load cepat (< 3 detik)
- [ ] No console errors
- [ ] No console warnings (atau minimal)
- [ ] Images optimized
- [ ] CSS tidak bloated
- [ ] JavaScript tidak bloated
- [ ] No memory leaks
- [ ] Smooth scrolling

---

### 🔒 Security (Basic)

- [ ] No sensitive data di console
- [ ] No SQL injection risk (karena no backend)
- [ ] XSS prevention (basic)
- [ ] Input sanitization
- [ ] Password tidak tampil di console

---

### 📝 Code Quality

#### HTML
- [ ] Valid HTML5
- [ ] Semantic tags
- [ ] Proper indentation
- [ ] No broken links
- [ ] Alt text untuk images

#### CSS
- [ ] Valid CSS3
- [ ] Organized structure
- [ ] No unused styles
- [ ] Proper comments
- [ ] Consistent naming

#### JavaScript
- [ ] No syntax errors
- [ ] Proper indentation
- [ ] Meaningful variable names
- [ ] Functions well-organized
- [ ] Proper comments
- [ ] No unused code

---

## 🐛 Bug Tracking

Jika menemukan bug, catat di sini:

| No | Bug Description | Severity | Status | Fixed By |
|----|----------------|----------|--------|----------|
| 1  |                | High/Med/Low | Open/Fixed | [Nama] |
| 2  |                | High/Med/Low | Open/Fixed | [Nama] |
| 3  |                | High/Med/Low | Open/Fixed | [Nama] |

---

## ✨ Final Check

- [ ] Semua checklist di atas sudah dicentang
- [ ] Tidak ada bug critical
- [ ] Website siap untuk presentasi
- [ ] Backup file sudah dibuat
- [ ] Dokumentasi lengkap
- [ ] Tim sudah latihan demo

---

## 📞 Testing Team

| Tester | Device | Browser | Status |
|--------|--------|---------|--------|
| [Nama 1] | Desktop | Chrome | ✅ |
| [Nama 2] | Laptop | Firefox | ✅ |
| [Nama 3] | Mobile | Chrome | ✅ |
| [Nama 4] | Tablet | Safari | ✅ |
| [Nama 5] | Desktop | Edge | ✅ |

---

**Testing Date:** _______________  
**Tested By:** _______________  
**Approved By:** _______________  

---

**Semua checklist harus ✅ sebelum presentasi!**

**Good luck! 🚀**
