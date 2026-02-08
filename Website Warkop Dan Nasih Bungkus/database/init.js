const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

// Create database directory if it doesn't exist
const fs = require('fs');
const dbDir = path.dirname(__filename);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Create database connection
const db = new sqlite3.Database('./database/umkm.db');

// Initialize database tables
db.serialize(() => {
    // Products table
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price INTEGER NOT NULL,
        description TEXT,
        image_url TEXT,
        category TEXT DEFAULT 'makanan',
        is_available BOOLEAN DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Orders table
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT NOT NULL,
        customer_phone TEXT,
        delivery_address TEXT NOT NULL,
        total_amount INTEGER NOT NULL,
        status TEXT DEFAULT 'pending',
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Order items table
    db.run(`CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        price INTEGER NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders (id),
        FOREIGN KEY (product_id) REFERENCES products (id)
    )`);

    // Admin users table
    db.run(`CREATE TABLE IF NOT EXISTS admin_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        email TEXT,
        role TEXT DEFAULT 'admin',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Business settings table
    db.run(`CREATE TABLE IF NOT EXISTS business_settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        setting_key TEXT UNIQUE NOT NULL,
        setting_value TEXT,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Insert sample products
    const sampleProducts = [
        {
            name: 'Nasi Gudeg Komplit',
            price: 25000,
            description: 'Nasi gudeg dengan ayam, telur, tahu, tempe, dan sambal krecek. Cita rasa Yogyakarta yang autentik.',
            image_url: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Nasi+Gudeg',
            category: 'makanan'
        },
        {
            name: 'Soto Ayam Lamongan',
            price: 20000,
            description: 'Soto ayam dengan kuah bening, dilengkapi dengan telur, tahu, dan kerupuk. Hangat dan menyegarkan.',
            image_url: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Soto+Ayam',
            category: 'makanan'
        },
        {
            name: 'Gado-Gado Jakarta',
            price: 18000,
            description: 'Sayuran segar dengan bumbu kacang khas Jakarta, dilengkapi kerupuk dan lontong.',
            image_url: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Gado-Gado',
            category: 'makanan'
        },
        {
            name: 'Ayam Bakar Madu',
            price: 30000,
            description: 'Ayam bakar dengan bumbu madu spesial, disajikan dengan nasi, lalapan, dan sambal.',
            image_url: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Ayam+Bakar',
            category: 'makanan'
        },
        {
            name: 'Nasi Pecel Madiun',
            price: 15000,
            description: 'Nasi dengan sayuran rebus dan bumbu pecel khas Madiun yang pedas dan gurih.',
            image_url: 'https://via.placeholder.com/300x200/FFEAA7/333333?text=Nasi+Pecel',
            category: 'makanan'
        },
        {
            name: 'Es Teh Manis',
            price: 5000,
            description: 'Minuman segar es teh manis yang cocok untuk menemani makanan Anda.',
            image_url: 'https://via.placeholder.com/300x200/FD79A8/FFFFFF?text=Es+Teh+Manis',
            category: 'minuman'
        }
    ];

    // Insert products if table is empty
    db.get("SELECT COUNT(*) as count FROM products", (err, row) => {
        if (err) {
            console.error('Error checking products:', err);
            return;
        }
        
        if (row.count === 0) {
            const stmt = db.prepare(`INSERT INTO products (name, price, description, image_url, category) 
                                   VALUES (?, ?, ?, ?, ?)`);
            
            sampleProducts.forEach(product => {
                stmt.run([product.name, product.price, product.description, product.image_url, product.category]);
            });
            
            stmt.finalize();
            console.log('Sample products inserted');
        }
    });

    // Create default admin user
    db.get("SELECT COUNT(*) as count FROM admin_users", (err, row) => {
        if (err) {
            console.error('Error checking admin users:', err);
            return;
        }
        
        if (row.count === 0) {
            const hashedPassword = bcrypt.hashSync('admin123', 10);
            db.run(`INSERT INTO admin_users (username, password, email, role) 
                   VALUES (?, ?, ?, ?)`, 
                   ['admin', hashedPassword, 'admin@warungbusari.com', 'admin'], 
                   function(err) {
                       if (err) {
                           console.error('Error creating admin user:', err);
                       } else {
                           console.log('Default admin user created (username: admin, password: admin123)');
                       }
                   });
        }
    });

    // Insert business settings
    const businessSettings = [
        { key: 'business_name', value: 'Warung Makan Bu Sari' },
        { key: 'business_address', value: 'Jl. Merdeka No. 123, Kelurahan Sukamaju, Kecamatan Bandung Tengah, Kota Bandung' },
        { key: 'business_phone', value: '(022) 1234567' },
        { key: 'business_whatsapp', value: '0812-3456-7890' },
        { key: 'operating_hours', value: 'Senin - Minggu: 07.00 - 21.00 WIB' },
        { key: 'delivery_fee', value: '5000' },
        { key: 'min_order', value: '20000' }
    ];

    businessSettings.forEach(setting => {
        db.run(`INSERT OR IGNORE INTO business_settings (setting_key, setting_value) VALUES (?, ?)`,
               [setting.key, setting.value]);
    });
});

db.close((err) => {
    if (err) {
        console.error('Error closing database:', err.message);
    } else {
        console.log('Database initialized successfully');
        console.log('Tables created and sample data inserted');
    }
});

console.log('Database initialization completed!');