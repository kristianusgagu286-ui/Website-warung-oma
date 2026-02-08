# 🚀 Cara Menjalankan Website Warung Oma

## 📌 Cara Paling Mudah (Tanpa Server)

### Metode 1: Buka Langsung di Browser

1. **Buka File Explorer / Windows Explorer**
   - Tekan `Windows + E` di keyboard
   - Atau klik icon folder di taskbar

2. **Cari Folder Website**
   - Buka folder tempat Anda menyimpan file website
   - Contoh: `C:\Users\NamaAnda\Documents\website-warung-oma`

3. **Buka Halaman Utama**
   - Cari file `index.html`
   - **Klik kanan** pada file `index.html`
   - Pilih **"Open with"** atau **"Buka dengan"**
   - Pilih browser favorit Anda:
     - Google Chrome (Recommended)
     - Mozilla Firefox
     - Microsoft Edge
   
   **ATAU**
   
   - **Double-click** file `index.html`
   - Website akan terbuka di browser default

4. **Buka Admin Panel**
   - Cari file `admin.html`
   - **Double-click** atau klik kanan → Open with → Browser
   - Login dengan:
     - Username: `admin`
     - Password: `admin123`

---

## 🌐 Cara Menjalankan dengan Live Server (Recommended untuk Development)

### Menggunakan Visual Studio Code (VS Code)

1. **Install VS Code**
   - Download dari: https://code.visualstudio.com/
   - Install seperti biasa

2. **Install Extension Live Server**
   - Buka VS Code
   - Klik icon Extensions (Ctrl + Shift + X)
   - Cari "Live Server"
   - Klik "Install" pada extension oleh Ritwick Dey

3. **Buka Folder Website**
   - File → Open Folder
   - Pilih folder website Anda
   - Klik "Select Folder"

4. **Jalankan Live Server**
   - Klik kanan pada file `index.html`
   - Pilih **"Open with Live Server"**
   - Website akan terbuka di browser secara otomatis
   - URL biasanya: `http://127.0.0.1:5500/index.html`

5. **Keuntungan Live Server:**
   - Auto-reload saat ada perubahan file
   - Bisa diakses dari HP di jaringan yang sama
   - Lebih mirip dengan website asli

---

## 📱 Cara Membuka di HP/Tablet

### Metode 1: Transfer File ke HP

1. **Copy Folder Website**
   - Copy seluruh folder website ke HP
   - Via USB cable, Bluetooth, atau Google Drive

2. **Buka di HP**
   - Buka File Manager di HP
   - Cari folder website
   - Tap file `index.html`
   - Pilih browser (Chrome, Firefox, dll)

### Metode 2: Via Live Server (Satu Jaringan WiFi)

1. **Jalankan Live Server di Laptop**
   - Ikuti langkah Live Server di atas

2. **Cek IP Address Laptop**
   - Windows: Buka CMD → ketik `ipconfig`
   - Cari "IPv4 Address", contoh: `192.168.1.100`

3. **Buka di HP**
   - Pastikan HP dan Laptop di WiFi yang sama
   - Buka browser di HP
   - Ketik: `http://192.168.1.100:5500/index.html`
   - Ganti `192.168.1.100` dengan IP laptop Anda

---

## 🖥️ Cara Menjalankan dengan Python (Simple HTTP Server)

### Jika Anda Punya Python Terinstall

1. **Buka Command Prompt / Terminal**
   - Windows: Tekan `Windows + R` → ketik `cmd` → Enter
   - Atau cari "Command Prompt" di Start Menu

2. **Masuk ke Folder Website**
   ```cmd
   cd C:\Users\NamaAnda\Documents\website-warung-oma
   ```
   Ganti path sesuai lokasi folder Anda

3. **Jalankan Server**
   
   **Python 3:**
   ```cmd
   python -m http.server 8000
   ```
   
   **Python 2:**
   ```cmd
   python -m SimpleHTTPServer 8000
   ```

4. **Buka di Browser**
   - Buka browser
   - Ketik: `http://localhost:8000`
   - Website akan muncul

5. **Stop Server**
   - Tekan `Ctrl + C` di Command Prompt

---

## 🌍 Cara Menjalankan dengan XAMPP (Seperti Website Asli)

### Install XAMPP

1. **Download XAMPP**
   - Download dari: https://www.apachefriends.org/
   - Pilih versi untuk Windows

2. **Install XAMPP**
   - Jalankan installer
   - Install di `C:\xampp` (default)
   - Centang Apache (minimal)

3. **Copy File Website**
   - Buka folder `C:\xampp\htdocs`
   - Buat folder baru: `warung-oma`
   - Copy semua file website ke folder tersebut

4. **Jalankan Apache**
   - Buka XAMPP Control Panel
   - Klik tombol "Start" di Apache
   - Tunggu sampai background jadi hijau

5. **Buka di Browser**
   - Buka browser
   - Ketik: `http://localhost/warung-oma/index.html`
   - Website akan muncul

6. **Akses dari HP (Satu WiFi)**
   - Cek IP laptop (ipconfig)
   - Di HP, buka: `http://192.168.1.100/warung-oma/index.html`

---

## 🎯 Cara Terbaik untuk Presentasi

### Persiapan Sebelum Presentasi:

1. **Test di Laptop Presentasi**
   - Copy folder website ke laptop yang akan dipakai presentasi
   - Test buka `index.html` dan `admin.html`
   - Pastikan semua fitur berjalan

2. **Siapkan Data Demo**
   - Buat beberapa pesanan sample
   - Login ke admin panel
   - Pastikan ada data untuk ditampilkan

3. **Bookmark Halaman**
   - Buka `index.html` di browser
   - Bookmark halaman (Ctrl + D)
   - Buka `admin.html` di tab baru
   - Bookmark juga

4. **Siapkan HP untuk Demo Responsive**
   - Copy file ke HP
   - Atau gunakan Live Server
   - Test buka di HP sebelum presentasi

### Saat Presentasi:

1. **Tutup Aplikasi Lain**
   - Tutup semua aplikasi yang tidak perlu
   - Matikan notifikasi (Windows + A → Focus Assist)

2. **Buka Browser**
   - Buka browser dalam mode Full Screen (F11)
   - Siapkan 2 tab: index.html dan admin.html

3. **Demo Halaman Utama**
   - Tunjukkan navigasi
   - Scroll ke setiap section
   - Demo form pemesanan

4. **Demo Admin Panel**
   - Switch ke tab admin
   - Login (jika belum)
   - Tunjukkan dashboard
   - Demo manajemen pesanan dan produk

5. **Demo Responsive**
   - Resize browser (Ctrl + Shift + I → Toggle device toolbar)
   - Atau tunjukkan di HP

---

## ⚠️ Troubleshooting

### Website Tidak Muncul

**Problem:** Double-click index.html tapi tidak terbuka

**Solusi:**
1. Klik kanan → Properties
2. Cek "Opens with:" → harus browser
3. Jika bukan, klik "Change" → pilih browser
4. Klik OK dan coba lagi

### CSS Tidak Muncul (Tampilan Berantakan)

**Problem:** Website terbuka tapi tidak ada warna/styling

**Solusi:**
1. Pastikan file `style.css` ada di folder yang sama dengan `index.html`
2. Refresh browser (Ctrl + F5)
3. Cek console browser (F12) untuk error

### JavaScript Tidak Jalan

**Problem:** Form tidak bisa submit, button tidak berfungsi

**Solusi:**
1. Pastikan file `script.js` ada di folder yang sama
2. Cek console browser (F12) untuk error
3. Pastikan JavaScript enabled di browser

### Admin Tidak Bisa Login

**Problem:** Login gagal terus

**Solusi:**
1. Pastikan username: `admin` (huruf kecil semua)
2. Pastikan password: `admin123`
3. Clear localStorage: F12 → Console → ketik `localStorage.clear()` → Enter
4. Refresh halaman

### Data Pesanan Hilang

**Problem:** Pesanan yang dibuat hilang

**Solusi:**
1. Data tersimpan di localStorage browser
2. Jangan clear browser data/history
3. Gunakan browser yang sama
4. Jangan buka di Incognito/Private mode

---

## 💡 Tips Pro

### Untuk Presentasi Lancar:

1. **Siapkan Backup**
   - Copy folder ke USB
   - Upload ke Google Drive
   - Siapkan di 2 laptop berbeda

2. **Test Koneksi Proyektor**
   - Test sebelum presentasi dimulai
   - Pastikan resolusi layar pas
   - Test audio jika ada video

3. **Siapkan Skenario**
   - Tulis urutan demo
   - Latihan minimal 2x
   - Timing: jangan terlalu cepat/lambat

4. **Siapkan Data Menarik**
   - Buat pesanan dengan nama yang menarik
   - Gunakan produk khas Manggarai
   - Tunjukkan fitur-fitur unggulan

### Untuk Development:

1. **Gunakan VS Code + Live Server**
   - Paling mudah dan praktis
   - Auto-reload saat edit
   - Bisa test di HP

2. **Backup Berkala**
   - Copy folder setiap ada perubahan
   - Gunakan Google Drive
   - Atau gunakan Git/GitHub

3. **Test di Berbagai Browser**
   - Chrome (utama)
   - Firefox
   - Edge
   - Safari (jika ada Mac)

4. **Test di Device Asli**
   - Jangan hanya emulator
   - Test di HP Android
   - Test di iPhone (jika ada)

---

## 📞 Butuh Bantuan?

Jika masih ada masalah:

1. **Cek Console Browser**
   - Tekan F12
   - Lihat tab Console
   - Screenshot error yang muncul

2. **Cek File Structure**
   - Pastikan semua file ada:
     - index.html
     - style.css
     - script.js
     - admin.html
     - admin-style.css
     - admin-script.js

3. **Hubungi Tim**
   - WhatsApp: 085339204829
   - Tanya ke anggota kelompok

---

## ✅ Checklist Sebelum Presentasi

- [ ] File website sudah di-copy ke laptop presentasi
- [ ] Test buka index.html - berjalan normal
- [ ] Test buka admin.html - bisa login
- [ ] Test form pemesanan - bisa submit
- [ ] Test admin panel - semua fitur jalan
- [ ] Test responsive - resize browser OK
- [ ] Test di HP - tampilan OK
- [ ] Data demo sudah disiapkan
- [ ] Browser bookmark sudah dibuat
- [ ] Backup file di USB
- [ ] Latihan presentasi sudah dilakukan

---

## 🎉 Selamat!

Website Warung Oma Anda siap dijalankan dan dipresentasikan!

**Good luck untuk presentasinya! 🚀**

---

**Catatan:** Website ini adalah static website (HTML, CSS, JS) yang bisa langsung dibuka di browser tanpa perlu server khusus. Sangat cocok untuk tugas sekolah dan presentasi!
