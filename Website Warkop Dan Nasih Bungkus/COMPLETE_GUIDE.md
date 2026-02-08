# 📚 Complete Guide - Warung Oma Website & Backend System

## 🎯 Overview

Website UMKM lengkap untuk Warung Oma dengan sistem backend profesional untuk mengelola produk dan pesanan.

### Komponen Utama
1. **Website** (`index.html`) - Halaman publik untuk pelanggan
2. **Backend System** (`backend.html`) - Panel admin profesional
3. **Admin Simple** (`admin-simple.html`) - Panel admin sederhana (alternative)

---

## 🚀 Quick Start

### 1. Jalankan Website
```
1. Buka index.html di browser
2. Website siap digunakan!
```

### 2. Login ke Backend
```
1. Klik tombol "🔐 Admin" di website
   ATAU buka backend.html langsung
2. Login:
   Username: admin
   Password: admin123
3. Mulai kelola produk dan pesanan!
```

---

## 📖 Dokumentasi Lengkap

### Untuk Pengguna Website
- `README.md` - Overview proyek
- `CARA_MENJALANKAN.md` - Cara menjalankan website
- `QUICK_REFERENCE.md` - Referensi cepat

### Untuk Admin
- `BACKEND_GUIDE.md` - ⭐ Panduan lengkap backend
- `BACKEND_QUICK_START.md` - ⭐ Quick start backend
- `CARA_LOGIN_ADMIN.md` - Cara login admin
- `AKSES_ADMIN.md` - Informasi akses admin
- `PANDUAN_UPLOAD_GAMBAR.md` - Cara upload gambar produk

### Untuk Testing
- `BACKEND_TESTING.md` - ⭐ Testing checklist backend
- `TESTING_CHECKLIST.md` - Testing checklist website

### Untuk Troubleshooting
- `TROUBLESHOOTING_LOGIN.md` - Masalah login

### Untuk Presentasi
- `PANDUAN_PRESENTASI.md` - Panduan presentasi proyek

---

## 🎨 Struktur Website

### Halaman Utama (index.html)

#### 1. Header & Navigation
- Logo "Warung Oma"
- Menu: Beranda, Tentang Kami, Produk, Pesan, Kontak, Admin
- Hamburger menu untuk mobile

#### 2. Hero Section
- Banner dengan gambar latar belakang
- Judul dan deskripsi
- Tombol "Lihat Menu"

#### 3. About Section
- Informasi usaha
- Alamat: Jalan Kuwus-Golowelu, Nantal, Manggarai Barat, NTT
- Kontak: WhatsApp 085339204829
- Jam operasional: 07.00 - 21.00 WITA

#### 4. Products Section
- Grid produk (8 produk default)
- Setiap produk: Gambar, Nama, Harga, Deskripsi, Tombol Pesan
- **Dynamic:** Produk dimuat dari localStorage (sync dengan backend)

#### 5. Order Form
- Nama pelanggan
- Pilih produk (dropdown)
- Jumlah pesanan
- Alamat pengiriman
- Validasi JavaScript
- **Dynamic:** Dropdown produk update otomatis dari backend

#### 6. Contact Section
- WhatsApp button
- Telepon
- Alamat lengkap

#### 7. Footer
- Copyright
- Link login admin

---

## 🔐 Backend System

### Login Screen
- Username: `admin`
- Password: `admin123`
- Gradient background dengan animasi
- Info box dengan credentials

### Dashboard
**Statistics Cards:**
- 📦 Total Orders
- 🕒 Today Orders
- 💰 Total Revenue
- ⏳ Pending Orders

**Recent Orders:**
- Tabel 5 pesanan terakhir
- Button "View All" ke Orders Management

### Orders Management
**Features:**
- View all orders dalam tabel
- Filter by status (All, Pending, Confirmed, Preparing, Ready, Delivered, Cancelled)
- Update status dengan dropdown
- Delete order dengan konfirmasi
- Real-time statistics update

**Order Status Flow:**
```
Pending → Confirmed → Preparing → Ready → Delivered
         ↓
      Cancelled
```

### Products Management
**Features:**
- View all products dengan thumbnail
- Add product dengan modal form
- Edit product
- Delete product dengan konfirmasi
- Toggle availability

**Add/Edit Product Form:**
- Nama produk * (required)
- Harga * (required)
- Deskripsi
- Kategori (Makanan/Minuman/Snack)
- Upload gambar (max 2MB) ATAU URL gambar
- Product Available checkbox
- Preview gambar otomatis

**Image Upload:**
- Max size: 2MB
- Format: JPG, PNG, GIF, WebP
- Preview sebelum save
- Alternative: Paste URL gambar

### Analytics (Coming Soon)
- Sales analytics
- Charts and graphs
- Reports

### Settings (Coming Soon)
- Business info
- System configuration

---

## 🔄 Data Synchronization

### Backend → Website
```
1. Admin tambah/edit produk di backend
2. Data tersimpan di localStorage
3. Website membaca dari localStorage
4. Refresh website untuk lihat perubahan
```

### Website → Backend
```
1. Pelanggan submit order di website
2. Order tersimpan di localStorage
3. Backend membaca dari localStorage
4. Order muncul di Orders Management
```

### localStorage Keys
- `products` - Array produk
- `orders` - Array pesanan
- `backendToken` - Token autentikasi backend
- `backendUsername` - Username yang login

---

## 📱 Responsive Design

### Desktop (> 768px)
- Full sidebar (280px)
- Main content dengan margin
- Grid layout untuk products
- Tabel full-width

### Mobile (< 768px)
- Sidebar tersembunyi
- Full-width content
- Stack layout untuk products
- Tabel scrollable horizontal
- Hamburger menu

---

## 🎨 Design System

### Colors
**Website:**
- Primary: #e74c3c (Red)
- Secondary: #27ae60 (Green)
- Accent: #3498db (Blue)
- Dark: #2c3e50

**Backend:**
- Background: #0f172a (Dark Blue)
- Sidebar: #1e293b
- Cards: #1e293b
- Border: #334155
- Text: #e2e8f0 (Light Gray)
- Gradient: #667eea → #764ba2 (Purple-Blue)

### Typography
- Font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Headings: Bold, larger sizes
- Body: Regular, readable sizes

### Buttons
- Primary: Gradient purple-blue
- Success: Green (#10b981)
- Warning: Orange (#f59e0b)
- Danger: Red (#ef4444)
- Hover: Transform translateY(-2px) + shadow

### Cards
- Border radius: 15px
- Padding: 25px
- Border: 1px solid
- Hover effects: Transform + background change

---

## 🔧 Technical Details

### Technologies
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- localStorage API
- No frameworks/libraries

### Browser Support
- Chrome (recommended)
- Firefox
- Edge
- Safari

### File Structure
```
├── index.html              # Main website
├── style.css               # Website styles
├── script.js               # Website JavaScript
├── backend.html            # Backend system
├── backend-script.js       # Backend JavaScript
├── admin-simple.html       # Simple admin (alternative)
└── [documentation files]   # MD files
```

---

## ✅ Testing Checklist

### Website Testing
- [ ] Hero section loads correctly
- [ ] Navigation works (smooth scroll)
- [ ] Products display correctly
- [ ] Order form validation works
- [ ] Form submission successful
- [ ] Responsive on mobile
- [ ] All links work

### Backend Testing
- [ ] Login successful
- [ ] Dashboard statistics correct
- [ ] Orders management works
- [ ] Products management works
- [ ] Add product successful
- [ ] Edit product successful
- [ ] Delete product successful
- [ ] Image upload works
- [ ] Data sync to website works
- [ ] Responsive on mobile

**Full Testing:** See `BACKEND_TESTING.md`

---

## 🐛 Troubleshooting

### Problem: Tidak bisa login
**Solution:**
- Username: `admin` (lowercase)
- Password: `admin123`
- Clear browser cache
- Check console for errors

### Problem: Produk tidak muncul di website
**Solution:**
- Refresh website (F5)
- Check localStorage di DevTools
- Pastikan produk di-set "Available"

### Problem: Data hilang
**Solution:**
- Data tersimpan di localStorage browser
- Jangan clear browser data
- Backup data secara manual

### Problem: Gambar tidak muncul
**Solution:**
- Check URL gambar valid
- Pastikan ukuran < 2MB
- Gunakan HTTPS URL
- Try upload ulang

**Full Troubleshooting:** See `TROUBLESHOOTING_LOGIN.md`

---

## 📊 Default Products

8 produk default Manggarai/NTT:

1. **Nasi Jagung Manggarai** - Rp 15.000
   - Nasi jagung khas dengan lauk ikan asin dan sambal lu'at

2. **Ja'i Wuut (Daging Babi)** - Rp 35.000
   - Daging babi khas Manggarai dengan bumbu tradisional

3. **Ikan Bakar Sambal Lu'at** - Rp 30.000
   - Ikan segar dibakar dengan sambal lu'at pedas

4. **Ayam Taliwang NTT** - Rp 28.000
   - Ayam bakar khas NTT dengan bumbu pedas

5. **Rumpu Rampe** - Rp 20.000
   - Sayur campur khas Manggarai

6. **Kopi Flores Panas** - Rp 8.000
   - Kopi asli Flores dengan aroma khas

7. **Kopi Hitam Warkop** - Rp 2.000
   - Kopi hitam sederhana ala warkop

8. **Nasi Bungkus Warkop** - Rp 5.000
   - Nasi bungkus lengkap dengan lauk sederhana

---

## 🎓 Untuk Presentasi

### Demo Flow
1. **Buka Website**
   - Show hero section
   - Scroll ke products
   - Show order form

2. **Submit Order**
   - Fill form
   - Submit
   - Show success message

3. **Login Backend**
   - Show login screen
   - Login
   - Show dashboard

4. **Show Orders**
   - Navigate to Orders Management
   - Show order yang baru masuk
   - Update status

5. **Manage Products**
   - Navigate to Products Management
   - Add new product
   - Show image upload
   - Save product

6. **Show Sync**
   - Refresh website
   - Show new product muncul

**Full Guide:** See `PANDUAN_PRESENTASI.md`

---

## 🔒 Security Notes

### Current Implementation
- Simple authentication (username/password)
- localStorage for data storage
- No encryption
- Client-side only

### For Production
⚠️ **IMPORTANT:** Untuk production environment:
1. Implement backend server (Node.js, PHP, etc.)
2. Use database (MySQL, PostgreSQL, MongoDB)
3. Add proper authentication (JWT, sessions)
4. Use HTTPS
5. Add CSRF protection
6. Server-side validation
7. Encrypt sensitive data
8. Rate limiting
9. Input sanitization
10. Security headers

---

## 📞 Support & Contact

### Business Contact
- **WhatsApp:** 085339204829
- **Alamat:** Jalan Kuwus-Golowelu, Nantal, Manggarai Barat, NTT

### Technical Support
- Check documentation files
- Review console errors
- Test in different browsers
- Clear cache and try again

---

## 📝 Changelog

### Version 1.0 (Current)
- ✅ Website dengan 8 produk Manggarai/NTT
- ✅ Order form dengan validasi
- ✅ Backend system dengan dark theme
- ✅ Products management dengan upload gambar
- ✅ Orders management dengan status flow
- ✅ Dashboard dengan statistics
- ✅ Data sync antara backend dan website
- ✅ Responsive design
- ✅ Complete documentation

### Future Updates
- [ ] Analytics dashboard
- [ ] Settings panel
- [ ] Export reports
- [ ] Email notifications
- [ ] Payment integration
- [ ] Backend server + database

---

## 🎯 Project Goals

### ✅ Completed
- [x] Website informasi UMKM
- [x] Katalog produk (8 produk)
- [x] Form pemesanan online
- [x] Validasi JavaScript
- [x] Responsive design
- [x] Admin panel
- [x] Manajemen produk
- [x] Manajemen pesanan
- [x] Upload gambar
- [x] Data synchronization
- [x] Professional backend design
- [x] Complete documentation

### 🎓 Learning Outcomes
- HTML structure dan semantic tags
- CSS styling dan responsive design
- JavaScript DOM manipulation
- Form validation
- localStorage API
- Event handling
- Modular code organization
- UI/UX design principles
- Documentation writing

---

## 📚 Additional Resources

### Documentation Files
1. `README.md` - Project overview
2. `BACKEND_GUIDE.md` - Backend complete guide
3. `BACKEND_QUICK_START.md` - Backend quick start
4. `BACKEND_TESTING.md` - Backend testing checklist
5. `CARA_MENJALANKAN.md` - How to run
6. `CARA_LOGIN_ADMIN.md` - Admin login guide
7. `AKSES_ADMIN.md` - Admin access info
8. `TROUBLESHOOTING_LOGIN.md` - Login troubleshooting
9. `PANDUAN_UPLOAD_GAMBAR.md` - Image upload guide
10. `PANDUAN_PRESENTASI.md` - Presentation guide
11. `QUICK_REFERENCE.md` - Quick reference
12. `TESTING_CHECKLIST.md` - Testing checklist
13. `COMPLETE_GUIDE.md` - This file

### External Resources
- Unsplash (images): https://unsplash.com
- MDN Web Docs: https://developer.mozilla.org
- CSS Tricks: https://css-tricks.com

---

## 🏆 Credits

**Developed for:** Warung Oma - UMKM Manggarai Barat, NTT  
**Owner:** Oma  
**Location:** Jalan Kuwus-Golowelu, Nantal, Kabupaten Manggarai Barat, Nusa Tenggara Timur  
**Contact:** 085339204829

**Project Type:** Tugas Kelompok - Pengembangan Website UMKM  
**Technologies:** HTML, CSS, JavaScript (Vanilla)  
**Year:** 2024

---

**Made with ❤️ for Warung Oma**

🍽️ Menyajikan makanan tradisional Manggarai dengan cita rasa autentik!
