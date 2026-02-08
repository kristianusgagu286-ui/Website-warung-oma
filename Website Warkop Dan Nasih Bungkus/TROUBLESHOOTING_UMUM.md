# 🔧 Troubleshooting Umum - Warung Oma

## 🆘 Panduan Mengatasi Masalah Umum

---

## 🌐 MASALAH WEBSITE

### 1. Website Tidak Muncul / Blank

**Gejala:**
- Halaman putih/kosong
- Tidak ada konten

**Solusi:**
```
✅ Cek apakah file index.html ada
✅ Buka dengan browser (double-click)
✅ Cek console browser (F12) untuk error
✅ Pastikan file style.css dan script.js ada di folder yang sama
✅ Refresh browser (Ctrl+F5 atau Cmd+Shift+R)
```

### 2. Gambar Produk Tidak Muncul

**Gejala:**
- Kotak gambar kosong
- Icon broken image

**Solusi:**
```
✅ Cek koneksi internet (gambar dari Unsplash)
✅ Cek URL gambar valid
✅ Tunggu beberapa detik untuk loading
✅ Refresh halaman
✅ Coba browser lain
```

### 3. Form Pemesanan Tidak Bisa Submit

**Gejala:**
- Klik "Kirim Pesanan" tidak ada respon
- Form tidak tervalidasi

**Solusi:**
```
✅ Pastikan semua field diisi
✅ Nama minimal 2 karakter
✅ Produk harus dipilih
✅ Jumlah minimal 1
✅ Alamat minimal 10 karakter
✅ Cek console untuk error (F12)
```

### 4. Menu Navigasi Tidak Berfungsi

**Gejala:**
- Klik menu tidak scroll
- Link tidak bekerja

**Solusi:**
```
✅ Pastikan JavaScript enabled di browser
✅ Cek console untuk error
✅ Refresh halaman
✅ Clear cache browser
```

### 5. Responsive Tidak Bekerja di Mobile

**Gejala:**
- Tampilan berantakan di mobile
- Text terlalu kecil/besar

**Solusi:**
```
✅ Pastikan viewport meta tag ada di HTML
✅ Zoom browser di 100%
✅ Rotate device (portrait/landscape)
✅ Coba browser mobile lain
```

---

## 🔐 MASALAH BACKEND

### 6. Tidak Bisa Login

**Gejala:**
- Error "Invalid username or password"
- Login tidak berhasil

**Solusi:**
```
✅ Username: admin (lowercase, no space)
✅ Password: admin123 (no space)
✅ Cek Caps Lock OFF
✅ Copy-paste dari dokumentasi
✅ Clear browser cache
✅ Coba browser lain
```

**Kredensial Benar:**
```
Username: admin
Password: admin123
```

### 7. Setelah Login Kembali ke Login Screen

**Gejala:**
- Login berhasil tapi balik ke login
- Tidak bisa masuk dashboard

**Solusi:**
```
✅ Cek localStorage enabled di browser
✅ Jangan gunakan Incognito/Private mode
✅ Allow cookies di browser
✅ Clear cache dan coba lagi
✅ Cek console untuk error
```

### 8. Dashboard Statistik Tidak Muncul

**Gejala:**
- Angka statistik 0 semua
- Tidak ada data

**Solusi:**
```
✅ Ini normal jika belum ada pesanan
✅ Submit order dari website dulu
✅ Refresh dashboard
✅ Cek localStorage ada data orders
```

### 9. Produk Tidak Muncul di Products Management

**Gejala:**
- Tabel produk kosong
- "No Products Yet"

**Solusi:**
```
✅ Ini normal jika localStorage kosong
✅ Sistem akan load 8 produk default otomatis
✅ Refresh halaman
✅ Clear cache dan reload
✅ Cek console untuk error
```

### 10. Upload Gambar Gagal

**Gejala:**
- Error "File too large"
- Error "File must be an image"
- Gambar tidak muncul

**Solusi:**
```
✅ Ukuran file maksimal 2MB
✅ Format: JPG, PNG, GIF, WebP
✅ Compress gambar jika terlalu besar
✅ Atau gunakan URL gambar
✅ Cek preview sebelum save
```

**Cara Compress Gambar:**
- Online: tinypng.com, compressor.io
- Software: Paint, Photoshop
- Target: < 2MB, 300x200px

### 11. Edit Produk Tidak Tersimpan

**Gejala:**
- Klik Save tapi data tidak berubah
- Perubahan hilang setelah refresh

**Solusi:**
```
✅ Pastikan klik tombol "Save Product"
✅ Tunggu alert "Product updated successfully"
✅ Jangan close modal sebelum save
✅ Cek localStorage di DevTools
✅ Refresh halaman untuk lihat perubahan
```

### 12. Delete Produk/Order Tidak Berfungsi

**Gejala:**
- Klik Delete tidak ada efek
- Data masih ada

**Solusi:**
```
✅ Pastikan klik "OK" di konfirmasi
✅ Tunggu alert success
✅ Refresh halaman
✅ Cek console untuk error
```

---

## 🔄 MASALAH DATA SYNC

### 13. Produk Baru Tidak Muncul di Website

**Gejala:**
- Tambah produk di backend
- Tidak muncul di website

**Solusi:**
```
✅ REFRESH website (F5 atau Ctrl+R)
✅ Pastikan produk di-set "Available"
✅ Clear cache browser
✅ Cek localStorage di DevTools
✅ Pastikan backend dan website buka di browser yang sama
```

**Penting:**
- Backend dan website harus di browser yang sama
- localStorage tidak shared antar browser
- Harus refresh website untuk lihat perubahan

### 14. Order Tidak Muncul di Backend

**Gejala:**
- Submit order di website
- Tidak muncul di backend

**Solusi:**
```
✅ Refresh backend (F5)
✅ Cek Orders Management
✅ Cek localStorage ada data orders
✅ Pastikan form tersubmit dengan benar
✅ Cek console untuk error
```

### 15. Data Hilang Setelah Close Browser

**Gejala:**
- Data produk/order hilang
- Harus input ulang

**Solusi:**
```
✅ Ini normal jika clear cache/cookies
✅ Jangan gunakan "Clear browsing data"
✅ Jangan gunakan Incognito mode
✅ localStorage bersifat permanen kecuali dihapus manual
✅ Backup data secara manual jika perlu
```

**Cara Backup Data:**
1. Buka DevTools (F12)
2. Tab Application → localStorage
3. Copy value dari "products" dan "orders"
4. Simpan di text file

---

## 💾 MASALAH localStorage

### 16. localStorage Penuh

**Gejala:**
- Error "QuotaExceededError"
- Tidak bisa simpan data

**Solusi:**
```
✅ Clear localStorage lama
✅ Hapus data yang tidak perlu
✅ Compress gambar sebelum upload
✅ Gunakan URL gambar instead of base64
```

**Cara Clear localStorage:**
```javascript
// Di console browser (F12)
localStorage.clear();
// Atau
localStorage.removeItem('products');
localStorage.removeItem('orders');
```

### 17. localStorage Tidak Berfungsi

**Gejala:**
- Data tidak tersimpan
- Error di console

**Solusi:**
```
✅ Pastikan localStorage enabled di browser
✅ Jangan gunakan Incognito/Private mode
✅ Allow cookies di browser settings
✅ Update browser ke versi terbaru
✅ Coba browser lain
```

---

## 🎨 MASALAH TAMPILAN

### 18. Tampilan Berantakan

**Gejala:**
- Layout tidak rapi
- Element overlap
- Text tidak terbaca

**Solusi:**
```
✅ Pastikan file style.css loaded
✅ Cek console untuk CSS errors
✅ Zoom browser di 100%
✅ Clear cache dan refresh
✅ Coba browser lain
```

### 19. Warna/Theme Tidak Sesuai

**Gejala:**
- Warna berbeda dari yang diharapkan
- Dark theme tidak muncul

**Solusi:**
```
✅ Pastikan CSS file loaded
✅ Cek browser dark mode settings
✅ Clear cache
✅ Hard refresh (Ctrl+Shift+R)
```

### 20. Animasi Tidak Smooth

**Gejala:**
- Animasi patah-patah
- Transisi tidak halus

**Solusi:**
```
✅ Close aplikasi lain (free up RAM)
✅ Update browser
✅ Disable browser extensions
✅ Cek GPU acceleration enabled
```

---

## 🔒 MASALAH KEAMANAN

### 21. Token Hilang Setelah Refresh

**Gejala:**
- Harus login ulang setiap refresh
- Token tidak tersimpan

**Solusi:**
```
✅ Jangan gunakan Incognito mode
✅ Allow cookies di browser
✅ Cek localStorage enabled
✅ Jangan clear cache
```

### 22. Bisa Akses Backend Tanpa Login

**Gejala:**
- Langsung masuk dashboard
- Tidak muncul login screen

**Solusi:**
```
✅ Ini normal jika token masih ada
✅ Token tersimpan di localStorage
✅ Untuk logout: klik tombol Logout
✅ Atau clear localStorage manual
```

---

## 🌐 MASALAH BROWSER

### 23. Website Tidak Berfungsi di Browser Tertentu

**Gejala:**
- Bekerja di Chrome tapi tidak di Firefox
- Atau sebaliknya

**Solusi:**
```
✅ Update browser ke versi terbaru
✅ Enable JavaScript
✅ Clear cache browser
✅ Disable extensions
✅ Coba browser lain
```

**Browser Recommended:**
- Chrome (terbaru)
- Firefox (terbaru)
- Edge (terbaru)

### 24. Console Error: "Uncaught ReferenceError"

**Gejala:**
- Error di console
- Fungsi tidak ditemukan

**Solusi:**
```
✅ Pastikan script.js loaded
✅ Cek urutan loading script
✅ Refresh halaman
✅ Clear cache
✅ Cek typo di function name
```

### 25. Console Error: "Cannot read property of undefined"

**Gejala:**
- Error saat akses data
- Fungsi tidak jalan

**Solusi:**
```
✅ Cek data ada di localStorage
✅ Cek element ID benar
✅ Tunggu DOM loaded
✅ Cek console untuk detail error
```

---

## 📱 MASALAH MOBILE

### 26. Hamburger Menu Tidak Berfungsi

**Gejala:**
- Klik hamburger tidak buka menu
- Menu tidak muncul

**Solusi:**
```
✅ Pastikan JavaScript enabled
✅ Refresh halaman
✅ Clear cache
✅ Coba rotate device
```

### 27. Form Sulit Diisi di Mobile

**Gejala:**
- Keyboard menutupi form
- Zoom otomatis

**Solusi:**
```
✅ Scroll form ke atas
✅ Rotate ke landscape
✅ Zoom out manual
✅ Gunakan browser mobile yang lebih baik
```

### 28. Tabel Tidak Scrollable di Mobile

**Gejala:**
- Tabel terpotong
- Tidak bisa scroll horizontal

**Solusi:**
```
✅ Swipe horizontal pada tabel
✅ Rotate ke landscape
✅ Zoom out
✅ Ini normal, tabel memang scrollable
```

---

## 🔧 TOOLS UNTUK DEBUGGING

### Browser DevTools (F12)

**Console Tab:**
- Lihat error messages
- Test JavaScript code
- Debug functions

**Application Tab:**
- Cek localStorage
- Lihat data tersimpan
- Clear storage

**Network Tab:**
- Cek file loaded
- Lihat request/response
- Debug loading issues

**Elements Tab:**
- Inspect HTML
- Edit CSS live
- Debug layout

### Cara Buka DevTools:
```
Windows/Linux: F12 atau Ctrl+Shift+I
Mac: Cmd+Option+I
```

---

## 📞 BANTUAN LEBIH LANJUT

### Langkah Troubleshooting:

1. **Identifikasi Masalah**
   - Apa yang tidak berfungsi?
   - Kapan masalah terjadi?
   - Error message apa yang muncul?

2. **Cek Console**
   - Buka DevTools (F12)
   - Lihat tab Console
   - Screenshot error jika ada

3. **Coba Solusi Dasar**
   - Refresh halaman (F5)
   - Clear cache (Ctrl+Shift+Delete)
   - Coba browser lain
   - Restart browser

4. **Cek Dokumentasi**
   - TROUBLESHOOTING_LOGIN.md
   - CARA_KERJA_WEBSITE.md
   - BACKEND_GUIDE.md
   - COMPLETE_GUIDE.md

5. **Test Sistematis**
   - Test satu fitur per satu
   - Catat apa yang berhasil/gagal
   - Isolate masalah

---

## ✅ PREVENTION TIPS

### Untuk Menghindari Masalah:

**Sebelum Mulai:**
✅ Gunakan browser modern (Chrome/Firefox/Edge)
✅ Update browser ke versi terbaru
✅ Enable JavaScript
✅ Allow cookies
✅ Jangan gunakan Incognito mode

**Saat Bekerja:**
✅ Save perubahan sebelum close
✅ Jangan clear cache sembarangan
✅ Backup data penting
✅ Test setelah setiap perubahan
✅ Cek console untuk error

**Untuk Presentasi:**
✅ Test semua fitur sebelumnya
✅ Siapkan data dummy
✅ Bookmark halaman penting
✅ Close aplikasi lain
✅ Koneksi internet stabil

---

## 🎯 QUICK FIXES

### Masalah Umum & Solusi Cepat:

| Masalah | Solusi Cepat |
|---------|--------------|
| Tidak bisa login | Username: `admin`, Password: `admin123` |
| Produk tidak muncul | Refresh website (F5) |
| Data hilang | Jangan clear cache |
| Upload gagal | Max 2MB, format image |
| Form error | Isi semua field dengan benar |
| Logout tidak jalan | Klik OK di konfirmasi |
| Backend blank | Clear cache, reload |
| Sync tidak jalan | Refresh halaman |

---

## 📚 DOKUMENTASI TERKAIT

- **TROUBLESHOOTING_LOGIN.md** - Masalah login spesifik
- **CARA_KERJA_WEBSITE.md** - Penjelasan sistem
- **BACKEND_GUIDE.md** - Panduan backend lengkap
- **COMPLETE_GUIDE.md** - Panduan lengkap semua
- **BACKEND_TESTING.md** - Testing checklist

---

**Masih ada masalah?**

1. Cek dokumentasi terkait
2. Review console errors
3. Test di browser berbeda
4. Clear cache dan coba lagi
5. Restart browser/komputer

---

**Good luck! 🍀**
