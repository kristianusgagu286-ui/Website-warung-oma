# ⚡ Backend Quick Start - Warung Oma

## 🔑 Login
```
URL: backend.html
Username: admin
Password: admin123
```

## 📋 Menu Utama

### 📊 Dashboard
- Lihat statistik: Total orders, Today orders, Revenue, Pending
- Recent orders (5 terakhir)

### 📦 Orders Management
- Lihat semua pesanan
- Filter by status
- Update status pesanan
- Delete pesanan

### 🍽️ Products Management
- Lihat semua produk
- Add product (+ Add Product)
- Edit product
- Delete product
- Toggle availability

### 📈 Analytics
Coming soon

### ⚙️ Settings
Coming soon

## ➕ Tambah Produk Cepat

1. Klik "Products Management"
2. Klik "+ Add Product"
3. Isi:
   - Nama produk *
   - Harga *
   - Deskripsi
   - Kategori
   - Upload gambar (max 2MB) atau URL
   - ✓ Product Available
4. Klik "Save Product"
5. Refresh website untuk lihat produk baru

## 📦 Update Status Pesanan

1. Klik "Orders Management"
2. Pilih status dari dropdown:
   - Pending → Confirmed → Preparing → Ready → Delivered
   - Atau Cancelled untuk batalkan
3. Status otomatis tersimpan

## 💾 Data Storage

- **Lokasi:** localStorage browser
- **Keys:**
  - `products` - Daftar produk
  - `orders` - Daftar pesanan
  - `backendToken` - Token login
  - `backendUsername` - Username

## 🔄 Sinkronisasi

- Produk di backend → Otomatis muncul di website (setelah refresh)
- Pesanan di website → Otomatis masuk ke backend
- Data tersimpan di localStorage browser

## ⚠️ Penting

- Jangan clear browser cache (data akan hilang)
- Refresh website setelah tambah/edit produk
- Backup data secara manual jika perlu
- Ganti password default untuk production

## 🎨 Fitur Upload Gambar

### Upload File
- Max: 2MB
- Format: JPG, PNG, GIF, WebP
- Preview otomatis muncul

### Atau URL
- Paste URL gambar
- Rekomendasi: Unsplash, Imgur

## 📱 Responsive

- Desktop: Full sidebar + main content
- Mobile: Hidden sidebar, full-width

## 🚀 Tips

1. **Produk Baru:** Gunakan gambar berkualitas (300x200px)
2. **Deskripsi:** Tulis detail yang menarik
3. **Harga:** Update secara berkala
4. **Status:** Set "Available" hanya untuk ready stock
5. **Pesanan:** Cek rutin dan update status

## 🔧 Troubleshooting Cepat

| Problem | Solution |
|---------|----------|
| Tidak bisa login | Username: `admin`, Password: `admin123` |
| Produk tidak muncul | Refresh website (F5) |
| Data hilang | Jangan clear cache browser |
| Gambar error | Cek URL valid atau upload ulang |

## 📞 Support Files

- `BACKEND_GUIDE.md` - Panduan lengkap
- `TROUBLESHOOTING_LOGIN.md` - Masalah login
- `PANDUAN_UPLOAD_GAMBAR.md` - Panduan upload gambar

---

**Quick Access:** Klik "🔐 Admin" di website → Login → Mulai kelola!
