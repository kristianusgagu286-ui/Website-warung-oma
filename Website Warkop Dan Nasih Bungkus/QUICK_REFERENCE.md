# Quick Reference - Website Warung Oma

## 🚀 Quick Start

### Membuka Website
1. Buka folder proyek
2. Double-click `index.html` untuk halaman utama
3. Double-click `admin.html` untuk admin panel

### Login Admin
- **Username:** `admin`
- **Password:** `admin123`

---

## 📋 Informasi UMKM

**Nama Usaha:** Warung Oma  
**Pemilik:** Oma  
**Alamat:** Jalan Kuwus-Golowelu, Nantal, Kabupaten Manggarai Barat, Nusa Tenggara Timur  
**Telepon:** (0385) 123456  
**WhatsApp:** 085339204829  
**Jam Operasional:** Senin - Minggu: 07.00 - 21.00 WITA  

---

## 🍽️ Daftar Produk

| No | Nama Produk | Harga | Kategori |
|----|-------------|-------|----------|
| 1 | Nasi Jagung Manggarai | Rp 15.000 | Makanan |
| 2 | Ja'i Wuut (Daging Babi) | Rp 35.000 | Makanan |
| 3 | Ikan Bakar Sambal Lu'at | Rp 30.000 | Makanan |
| 4 | Ayam Taliwang NTT | Rp 28.000 | Makanan |
| 5 | Rumpu Rampe | Rp 20.000 | Makanan |
| 6 | Kopi Flores Panas | Rp 8.000 | Minuman |
| 7 | Kopi Hitam Warkop | Rp 2.000 | Minuman |
| 8 | Nasi Bungkus Warkop | Rp 5.000 | Makanan |

---

## 📁 Struktur File

```
folder-website-umkm/
│
├── index.html              # Halaman utama
├── style.css               # Styling halaman utama
├── script.js               # JavaScript halaman utama
│
├── admin.html              # Admin panel
├── admin-style.css         # Styling admin
├── admin-script.js         # JavaScript admin
│
├── README.md               # Dokumentasi lengkap
├── PANDUAN_PRESENTASI.md   # Panduan presentasi
├── TESTING_CHECKLIST.md    # Checklist testing
└── QUICK_REFERENCE.md      # Quick reference (file ini)
```

---

## 🎯 Fitur Utama

### Halaman Utama (index.html)
1. ✅ Hero Section dengan gambar background
2. ✅ Informasi UMKM lengkap
3. ✅ Katalog 8 produk (termasuk menu warkop)
4. ✅ Form pemesanan dengan validasi
5. ✅ Kontak & WhatsApp button
6. ✅ Responsive design
7. ✅ Smooth scrolling
8. ✅ Hamburger menu (mobile)
9. ✅ Gambar produk real dari Unsplash

### Admin Panel (admin.html)
1. ✅ Login system
2. ✅ Dashboard dengan statistik
3. ✅ Manajemen pesanan
4. ✅ Manajemen produk
5. ✅ Laporan penjualan
6. ✅ Pengaturan bisnis
7. ✅ Print pesanan
8. ✅ Notifikasi system

---

## 🔧 Troubleshooting

### Website tidak tampil dengan benar
**Solusi:**
1. Pastikan semua file (HTML, CSS, JS) ada di folder yang sama
2. Refresh browser (Ctrl + F5 / Cmd + Shift + R)
3. Clear cache browser
4. Coba browser lain

### Form tidak bisa submit
**Solusi:**
1. Pastikan semua field terisi
2. Cek console browser (F12) untuk error
3. Pastikan JavaScript enabled
4. Clear localStorage: `localStorage.clear()`

### Admin tidak bisa login
**Solusi:**
1. Pastikan username: `admin` (lowercase)
2. Pastikan password: `admin123`
3. Clear localStorage dan coba lagi
4. Refresh halaman

### Data pesanan hilang
**Solusi:**
1. Data tersimpan di localStorage browser
2. Jangan clear browser data
3. Gunakan browser yang sama
4. Backup data dengan export (jika ada)

### Responsive tidak berfungsi
**Solusi:**
1. Pastikan ada tag `<meta name="viewport">`
2. Test dengan browser developer tools (F12)
3. Coba resize browser window
4. Test di device asli

### Gambar tidak muncul
**Solusi:**
1. Pastikan koneksi internet aktif (untuk placeholder images)
2. Ganti URL gambar jika perlu
3. Gunakan gambar lokal sebagai alternatif

---

## 💡 Tips & Tricks

### Untuk Presentasi
1. **Siapkan data dummy yang menarik** - Buat beberapa pesanan sample
2. **Test semua fitur sebelumnya** - Jangan ada surprise saat demo
3. **Siapkan backup** - Copy file ke USB dan cloud
4. **Latihan timing** - Jangan terlalu cepat atau lambat
5. **Siapkan HP** - Untuk demo responsive

### Untuk Development
1. **Gunakan browser developer tools** (F12) untuk debugging
2. **Test di berbagai browser** - Chrome, Firefox, Edge
3. **Backup berkala** - Copy file setiap ada perubahan
4. **Commit changes** - Catat setiap perubahan yang dibuat
5. **Kolaborasi** - Gunakan Google Drive atau GitHub

### Untuk Testing
1. **Test di device asli** - Jangan hanya di emulator
2. **Test semua browser** - Minimal 2-3 browser
3. **Test semua fitur** - Gunakan checklist
4. **Test edge cases** - Input yang tidak biasa
5. **Test performance** - Pastikan tidak lag

---

## 🎨 Color Palette

```css
Primary Red:    #e74c3c
Dark Red:       #c0392b
Green:          #27ae60
Light Green:    #2ecc71
Blue:           #3498db
Dark Blue:      #2980b9
Dark Gray:      #2c3e50
Darker Gray:    #1a252f
Light Gray:     #f8f9fa
White:          #ffffff
```

---

## 📱 Responsive Breakpoints

```css
Desktop:  > 768px
Tablet:   481px - 768px
Mobile:   < 480px
```

---

## 🔑 Keyboard Shortcuts

### Browser
- `F5` - Refresh
- `Ctrl + F5` - Hard refresh (clear cache)
- `F12` - Developer tools
- `Ctrl + Shift + I` - Inspect element
- `Ctrl + Shift + M` - Toggle device toolbar (responsive)

### Developer Tools
- `Ctrl + Shift + C` - Select element
- `Ctrl + ]` - Next panel
- `Ctrl + [` - Previous panel
- `Esc` - Toggle console

---

## 📊 Status Pesanan

| Status | Keterangan | Warna Badge |
|--------|------------|-------------|
| pending | Pesanan baru masuk | Kuning |
| confirmed | Pesanan dikonfirmasi | Biru |
| preparing | Sedang diproses | Orange |
| ready | Siap untuk dikirim | Hijau muda |
| delivered | Sudah dikirim | Hijau |
| cancelled | Dibatalkan | Merah |

---

## 🗂️ localStorage Keys

```javascript
'orders'          // Array pesanan
'products'        // Array produk
'settings'        // Object pengaturan
'adminToken'      // Token admin
'adminUsername'   // Username admin
'orderFormData'   // Auto-save form data
```

### Clear localStorage
```javascript
// Di browser console (F12)
localStorage.clear()
```

### View localStorage
```javascript
// Di browser console (F12)
console.log(localStorage)
```

---

## 🔗 Useful Links

### Development
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS reference
- [W3Schools](https://www.w3schools.com/) - Tutorials
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Design
- [Unsplash](https://unsplash.com/) - Free images
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Coolors](https://coolors.co/) - Color palette generator

### Testing
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [BrowserStack](https://www.browserstack.com/) - Cross-browser testing
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing

---

## 📞 Support

### Jika Ada Masalah
1. Cek TESTING_CHECKLIST.md
2. Cek console browser untuk error
3. Tanya ke anggota kelompok
4. Cek dokumentasi (README.md)
5. Google error message

### Contact Team
- WhatsApp Group: [Link Group]
- Email: [Email Kelompok]
- Google Drive: [Link Drive]

---

## ✅ Pre-Presentation Checklist

**1 Hari Sebelum:**
- [ ] Test semua fitur
- [ ] Backup file ke USB dan cloud
- [ ] Latihan presentasi
- [ ] Siapkan laptop dan charger
- [ ] Print handout (opsional)

**Pagi Hari Presentasi:**
- [ ] Charge laptop full
- [ ] Copy file ke laptop presentasi
- [ ] Test buka file
- [ ] Test koneksi proyektor
- [ ] Siapkan HP untuk demo responsive

**Sebelum Presentasi:**
- [ ] Buka index.html dan admin.html
- [ ] Login admin
- [ ] Siapkan data dummy
- [ ] Close aplikasi lain
- [ ] Matikan notifikasi

---

## 🎯 Demo Scenario

### Scenario 1: Customer Order
1. Buka index.html
2. Scroll ke section produk
3. Klik "Pesan Sekarang" pada produk
4. Isi form pemesanan
5. Submit dan lihat success message

### Scenario 2: Admin Management
1. Buka admin.html
2. Login dengan admin/admin123
3. Lihat dashboard statistik
4. Buka menu Pesanan
5. Update status pesanan
6. Lihat detail pesanan
7. Generate laporan

---

## 📝 Notes

### Catatan Penting
- Website ini menggunakan localStorage, data hanya tersimpan di browser lokal
- Untuk production, perlu backend dan database server
- Gambar menggunakan placeholder dari internet
- Admin password sangat sederhana, untuk demo saja

### Future Improvements
1. Backend dengan Node.js/PHP
2. Database MySQL/PostgreSQL
3. Payment gateway
4. WhatsApp API integration
5. Email notification
6. Image upload
7. Multi-user admin
8. Better security

---

## 🏆 Success Criteria

Website dianggap berhasil jika:
- ✅ Semua fitur berfungsi dengan baik
- ✅ Responsive di semua device
- ✅ Validasi form bekerja
- ✅ Admin panel dapat mengelola data
- ✅ Tidak ada bug critical
- ✅ Presentasi berjalan lancar
- ✅ Mendapat nilai bagus! 😊

---

**Last Updated:** [Tanggal]  
**Version:** 1.0  
**Team:** [Nama Kelompok]

---

**Semoga sukses! 🎉**
