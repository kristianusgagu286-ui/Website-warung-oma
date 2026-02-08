# 🌐 Cara Membuat Website Online - Warung Oma

## 🎯 Tujuan: Website Bisa Diakses via Link/URL

Saat ini website masih **lokal** (hanya di komputer Anda).  
Setelah di-deploy, website akan **online** dan bisa diakses dari mana saja!

---

## 🚀 Pilihan Hosting GRATIS

### 1. Netlify (PALING MUDAH) ⭐ RECOMMENDED

**Kelebihan:**
- ✅ 100% GRATIS
- ✅ Paling mudah (drag & drop)
- ✅ Dapat link otomatis (contoh: warung-oma.netlify.app)
- ✅ HTTPS otomatis
- ✅ Deploy dalam 2 menit

**Cara Deploy:**

#### Step 1: Siapkan File
```
1. Buat folder baru bernama "warung-oma-deploy"
2. Copy file-file ini ke folder tersebut:
   - index.html
   - style.css
   - script.js
   - backend.html
   - backend-script.js
   - admin-simple.html
3. Zip folder tersebut (klik kanan → Compress/Send to → Compressed folder)
```

#### Step 2: Buat Akun Netlify
```
1. Buka: https://www.netlify.com
2. Klik "Sign up" (pojok kanan atas)
3. Pilih "Sign up with GitHub" atau "Sign up with Email"
4. Isi data dan verifikasi email
```

#### Step 3: Deploy Website
```
1. Login ke Netlify
2. Klik "Add new site" → "Deploy manually"
3. Drag & drop file ZIP Anda ke area upload
4. Tunggu 30 detik - 1 menit
5. ✅ Website online!
```

#### Step 4: Dapatkan Link
```
Netlify akan memberikan link otomatis seperti:
https://random-name-12345.netlify.app

Anda bisa ganti nama:
1. Klik "Site settings"
2. Klik "Change site name"
3. Ketik: warung-oma (atau nama lain)
4. Link jadi: https://warung-oma.netlify.app
```

**Video Tutorial:**
- YouTube: "How to deploy website to Netlify"
- Durasi: 5-10 menit

---

### 2. Vercel (MUDAH)

**Kelebihan:**
- ✅ 100% GRATIS
- ✅ Cepat dan modern
- ✅ Link otomatis (contoh: warung-oma.vercel.app)
- ✅ HTTPS otomatis

**Cara Deploy:**

#### Step 1: Buat Akun Vercel
```
1. Buka: https://vercel.com
2. Klik "Sign Up"
3. Pilih "Continue with GitHub" (recommended)
4. Authorize Vercel
```

#### Step 2: Deploy
```
1. Login ke Vercel
2. Klik "Add New" → "Project"
3. Klik "Deploy" tanpa Git (atau upload folder)
4. Drag & drop folder website Anda
5. Klik "Deploy"
6. ✅ Website online!
```

#### Step 3: Dapatkan Link
```
Vercel akan memberikan link seperti:
https://warung-oma.vercel.app
```

---

### 3. GitHub Pages (GRATIS, Butuh GitHub)

**Kelebihan:**
- ✅ 100% GRATIS
- ✅ Link: username.github.io/warung-oma
- ✅ Unlimited bandwidth

**Cara Deploy:**

#### Step 1: Buat Akun GitHub
```
1. Buka: https://github.com
2. Klik "Sign up"
3. Isi username, email, password
4. Verifikasi email
```

#### Step 2: Buat Repository
```
1. Login ke GitHub
2. Klik tombol "+" (pojok kanan atas)
3. Klik "New repository"
4. Nama repository: warung-oma
5. Pilih "Public"
6. Klik "Create repository"
```

#### Step 3: Upload File
```
1. Di halaman repository, klik "uploading an existing file"
2. Drag & drop semua file website:
   - index.html
   - style.css
   - script.js
   - backend.html
   - backend-script.js
   - admin-simple.html
3. Klik "Commit changes"
```

#### Step 4: Aktifkan GitHub Pages
```
1. Klik tab "Settings"
2. Scroll ke bawah, cari "Pages" di sidebar kiri
3. Di "Source", pilih "main" branch
4. Klik "Save"
5. Tunggu 1-2 menit
6. ✅ Website online!
```

#### Step 5: Dapatkan Link
```
Link akan muncul di halaman Pages:
https://username.github.io/warung-oma

Ganti "username" dengan username GitHub Anda
```

---

### 4. Surge (PALING CEPAT via Terminal)

**Kelebihan:**
- ✅ GRATIS
- ✅ Deploy via command line
- ✅ Super cepat (30 detik)

**Cara Deploy:**

#### Step 1: Install Surge
```bash
# Buka Command Prompt/Terminal
npm install --global surge
```

#### Step 2: Deploy
```bash
# Masuk ke folder website
cd path/to/warung-oma

# Deploy
surge

# Ikuti instruksi:
# - Email: [email Anda]
# - Password: [buat password]
# - Domain: warung-oma.surge.sh (atau custom)
```

#### Step 3: Dapatkan Link
```
Link: https://warung-oma.surge.sh
```

---

## 📋 Perbandingan Hosting

| Hosting | Kemudahan | Kecepatan | Link | Recommended |
|---------|-----------|-----------|------|-------------|
| Netlify | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡⚡ | .netlify.app | ✅ YES |
| Vercel | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡⚡ | .vercel.app | ✅ YES |
| GitHub Pages | ⭐⭐⭐⭐ | ⚡⚡⚡⚡ | .github.io | ✅ YES |
| Surge | ⭐⭐⭐ | ⚡⚡⚡⚡⚡ | .surge.sh | For developers |

---

## 🎯 Rekomendasi Saya

### Untuk Pemula: NETLIFY ⭐

**Kenapa?**
- Paling mudah (drag & drop)
- Tidak perlu install apapun
- Tidak perlu command line
- Dapat link bagus
- Deploy dalam 2 menit

**Langkah Singkat:**
1. Zip file website
2. Daftar di netlify.com
3. Drag & drop ZIP
4. ✅ Online!

---

## 📝 Checklist Sebelum Deploy

### File yang Harus Di-upload:
- [x] index.html
- [x] style.css
- [x] script.js
- [x] backend.html
- [x] backend-script.js
- [x] admin-simple.html

### File yang TIDAK Perlu Di-upload:
- [ ] File .md (dokumentasi) - optional
- [ ] File test-login.html - optional
- [ ] Folder .vscode - tidak perlu
- [ ] Folder node_modules - tidak perlu

### Cek Sebelum Deploy:
- [ ] Semua file ada
- [ ] Website berfungsi di lokal
- [ ] Tidak ada error di console
- [ ] Gambar muncul semua
- [ ] Form berfungsi
- [ ] Backend bisa login

---

## 🔧 Setelah Deploy

### 1. Test Website Online

**Cek Halaman Utama:**
```
Buka: https://your-site.netlify.app
✅ Hero section muncul
✅ Produk muncul
✅ Form berfungsi
```

**Cek Backend:**
```
Buka: https://your-site.netlify.app/backend.html
✅ Halaman login muncul
✅ Bisa login (admin/admin123)
✅ Dashboard muncul
```

### 2. Share Link

**Link Website:**
```
https://warung-oma.netlify.app
```

**Link Backend:**
```
https://warung-oma.netlify.app/backend.html
```

**Share via:**
- WhatsApp
- Facebook
- Instagram
- Email
- QR Code

### 3. Update Website

**Netlify:**
```
1. Login ke Netlify
2. Klik site Anda
3. Klik "Deploys"
4. Drag & drop file baru
5. ✅ Website updated!
```

**GitHub Pages:**
```
1. Edit file di GitHub
2. Commit changes
3. Tunggu 1-2 menit
4. ✅ Website updated!
```

---

## 🎨 Custom Domain (Optional)

### Beli Domain
```
Beli domain di:
- Namecheap.com
- GoDaddy.com
- Niagahoster.co.id (Indonesia)

Harga: ~Rp 100.000 - 200.000/tahun
```

### Connect Domain ke Netlify
```
1. Login Netlify
2. Klik site → "Domain settings"
3. Klik "Add custom domain"
4. Masukkan domain Anda (contoh: warungoma.com)
5. Update DNS di registrar domain
6. Tunggu 24 jam
7. ✅ Website dengan domain sendiri!
```

**Hasil:**
```
Dari: https://warung-oma.netlify.app
Jadi: https://warungoma.com
```

---

## ⚠️ Catatan Penting

### localStorage di Hosting

**Masalah:**
- localStorage bersifat lokal per browser
- Data tidak shared antar device
- Jika clear cache, data hilang

**Solusi untuk Production:**
```
Untuk bisnis real, perlu:
1. Backend server (Node.js, PHP)
2. Database (MySQL, MongoDB)
3. API untuk komunikasi
4. Proper authentication
```

**Untuk Sekarang:**
- Website bisa online
- Fitur berfungsi
- Cocok untuk demo/presentasi
- Cocok untuk portfolio

### HTTPS Otomatis

Semua hosting di atas memberikan HTTPS gratis:
```
✅ https://warung-oma.netlify.app (secure)
❌ http://warung-oma.netlify.app (not secure)
```

### Bandwidth & Storage

**Netlify:**
- Bandwidth: 100GB/bulan (gratis)
- Storage: Unlimited
- Build: 300 menit/bulan

**Vercel:**
- Bandwidth: 100GB/bulan (gratis)
- Storage: Unlimited

**GitHub Pages:**
- Bandwidth: 100GB/bulan (gratis)
- Storage: 1GB

**Cukup untuk:**
- Website UMKM
- Portfolio
- Landing page
- Demo project

---

## 🎓 Tutorial Video

### YouTube Search:
```
"How to deploy website to Netlify"
"Deploy HTML website to Vercel"
"GitHub Pages tutorial"
```

### Recommended Channels:
- Traversy Media
- Web Dev Simplified
- Fireship

---

## 📞 Bantuan Deploy

### Jika Gagal Deploy:

**Cek:**
1. Semua file ada?
2. File index.html di root folder?
3. Tidak ada error di console?
4. Internet stabil?

**Troubleshooting:**
1. Coba hosting lain
2. Cek file structure
3. Test di lokal dulu
4. Baca error message

### Support:
- Netlify: support.netlify.com
- Vercel: vercel.com/support
- GitHub: docs.github.com

---

## ✅ Checklist Deploy

### Sebelum Deploy:
- [ ] Website berfungsi di lokal
- [ ] Semua file siap
- [ ] Tidak ada error
- [ ] Pilih hosting (Netlify recommended)
- [ ] Buat akun hosting

### Saat Deploy:
- [ ] Upload semua file
- [ ] Tunggu proses selesai
- [ ] Cek link yang diberikan
- [ ] Test website online

### Setelah Deploy:
- [ ] Test semua fitur
- [ ] Test di berbagai device
- [ ] Share link
- [ ] Bookmark link
- [ ] Update jika perlu

---

## 🎉 Setelah Online

### Website Anda Akan:
✅ Bisa diakses dari mana saja
✅ Bisa diakses 24/7
✅ Punya link sendiri
✅ HTTPS secure
✅ Gratis selamanya (free tier)

### Anda Bisa:
✅ Share link ke teman
✅ Tambahkan ke CV/portfolio
✅ Gunakan untuk presentasi
✅ Gunakan untuk bisnis real
✅ Update kapan saja

---

## 🚀 Next Steps

### Setelah Deploy:

1. **Test Website**
   - Buka link
   - Test semua fitur
   - Cek di mobile

2. **Share Link**
   - WhatsApp ke teman
   - Post di social media
   - Tambah ke portfolio

3. **Monitor**
   - Cek analytics (jika ada)
   - Monitor traffic
   - Update konten

4. **Upgrade (Optional)**
   - Custom domain
   - Backend server
   - Database
   - Payment gateway

---

## 💡 Tips

### Untuk Presentasi:
- Deploy sebelum presentasi
- Test link berfungsi
- Bookmark link
- Siapkan backup (screenshot)

### Untuk Portfolio:
- Tambahkan ke CV
- Share di LinkedIn
- Tambah ke GitHub profile
- Screenshot untuk portfolio

### Untuk Bisnis:
- Beli custom domain
- Setup backend server
- Implement database
- Add payment gateway

---

## 📋 Summary

**Cara Tercepat:**
1. Zip file website
2. Daftar Netlify.com
3. Drag & drop ZIP
4. ✅ Online dalam 2 menit!

**Link Hasil:**
```
https://warung-oma.netlify.app
```

**Gratis?**
✅ 100% GRATIS selamanya!

---

**Selamat! Website Anda akan segera online! 🎉**

**Butuh bantuan? Tanya saja! 😊**
