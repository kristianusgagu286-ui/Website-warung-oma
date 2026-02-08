const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Import routes
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
const db = new sqlite3.Database('./database/umkm.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Make database available to routes
app.locals.db = db;

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

// Serve main website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Admin panel route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// API endpoint untuk mendapatkan informasi UMKM
app.get('/api/business-info', (req, res) => {
    const businessInfo = {
        name: "Warung Makan Bu Sari",
        description: "Warung Makan Bu Sari adalah usaha keluarga yang telah berdiri sejak tahun 2015. Kami mengkhususkan diri dalam menyajikan makanan tradisional Indonesia dengan resep turun temurun yang telah terjaga kualitasnya.",
        address: "Jl. Merdeka No. 123, Kelurahan Sukamaju, Kecamatan Bandung Tengah, Kota Bandung",
        phone: "(022) 1234567",
        whatsapp: "0812-3456-7890",
        operatingHours: "Senin - Minggu: 07.00 - 21.00 WIB",
        email: "info@warungbusari.com"
    };
    res.json(businessInfo);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Terjadi kesalahan pada server',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'Endpoint tidak ditemukan' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`Admin panel: http://localhost:${PORT}/admin`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nMenutup server...');
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed');
        }
        process.exit(0);
    });
});