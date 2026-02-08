const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'umkm_secret_key_2024';

// Middleware untuk verifikasi admin
const verifyAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: 'Token tidak ditemukan' 
        });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ 
            success: false, 
            message: 'Token tidak valid' 
        });
    }
};

// Admin login
router.post('/login', (req, res) => {
    const db = req.app.locals.db;
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username dan password harus diisi' 
        });
    }
    
    db.get('SELECT * FROM admin_users WHERE username = ?', [username], (err, user) => {
        if (err) {
            console.error('Error fetching admin user:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal memeriksa user' 
            });
        }
        
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Username atau password salah' 
            });
        }
        
        // Verify password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing password:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal memverifikasi password' 
                });
            }
            
            if (!isMatch) {
                return res.status(401).json({ 
                    success: false, 
                    message: 'Username atau password salah' 
                });
            }
            
            // Generate JWT token
            const token = jwt.sign(
                { 
                    id: user.id, 
                    username: user.username, 
                    role: user.role 
                },
                JWT_SECRET,
                { expiresIn: '24h' }
            );
            
            res.json({
                success: true,
                message: 'Login berhasil',
                data: {
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        role: user.role
                    }
                }
            });
        });
    });
});

// Verify token
router.get('/verify', verifyAdmin, (req, res) => {
    res.json({
        success: true,
        message: 'Token valid',
        data: {
            user: req.admin
        }
    });
});

// Get dashboard statistics
router.get('/dashboard', verifyAdmin, (req, res) => {
    const db = req.app.locals.db;
    
    const queries = {
        total_products: 'SELECT COUNT(*) as count FROM products',
        total_orders: 'SELECT COUNT(*) as count FROM orders',
        pending_orders: 'SELECT COUNT(*) as count FROM orders WHERE status = "pending"',
        total_revenue: 'SELECT SUM(total_amount) as total FROM orders WHERE status IN ("confirmed", "preparing", "ready", "delivered")',
        today_orders: 'SELECT COUNT(*) as count FROM orders WHERE DATE(created_at) = DATE("now")',
        today_revenue: 'SELECT SUM(total_amount) as total FROM orders WHERE DATE(created_at) = DATE("now") AND status IN ("confirmed", "preparing", "ready", "delivered")'
    };
    
    const stats = {};
    let completed = 0;
    const totalQueries = Object.keys(queries).length;
    
    Object.entries(queries).forEach(([key, query]) => {
        db.get(query, (err, row) => {
            if (err) {
                console.error(`Error fetching ${key}:`, err);
                stats[key] = 0;
            } else {
                stats[key] = row.count || row.total || 0;
            }
            
            completed++;
            if (completed === totalQueries) {
                // Get recent orders
                db.all(`SELECT o.*, COUNT(oi.id) as item_count 
                       FROM orders o 
                       LEFT JOIN order_items oi ON o.id = oi.order_id 
                       GROUP BY o.id 
                       ORDER BY o.created_at DESC 
                       LIMIT 5`, (err, recentOrders) => {
                    if (err) {
                        console.error('Error fetching recent orders:', err);
                        recentOrders = [];
                    }
                    
                    res.json({
                        success: true,
                        data: {
                            statistics: stats,
                            recent_orders: recentOrders
                        }
                    });
                });
            }
        });
    });
});

// Get business settings
router.get('/settings', verifyAdmin, (req, res) => {
    const db = req.app.locals.db;
    
    db.all('SELECT * FROM business_settings ORDER BY setting_key', (err, rows) => {
        if (err) {
            console.error('Error fetching settings:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil pengaturan' 
            });
        }
        
        const settings = {};
        rows.forEach(row => {
            settings[row.setting_key] = row.setting_value;
        });
        
        res.json({
            success: true,
            data: settings
        });
    });
});

// Update business settings
router.put('/settings', verifyAdmin, (req, res) => {
    const db = req.app.locals.db;
    const settings = req.body;
    
    if (!settings || typeof settings !== 'object') {
        return res.status(400).json({ 
            success: false, 
            message: 'Data pengaturan tidak valid' 
        });
    }
    
    db.serialize(() => {
        db.run('BEGIN TRANSACTION');
        
        let updated = 0;
        const totalSettings = Object.keys(settings).length;
        
        if (totalSettings === 0) {
            db.run('ROLLBACK');
            return res.status(400).json({ 
                success: false, 
                message: 'Tidak ada pengaturan yang diupdate' 
            });
        }
        
        Object.entries(settings).forEach(([key, value]) => {
            db.run(`INSERT OR REPLACE INTO business_settings (setting_key, setting_value, updated_at) 
                   VALUES (?, ?, CURRENT_TIMESTAMP)`, [key, value], function(err) {
                if (err) {
                    db.run('ROLLBACK');
                    console.error('Error updating setting:', err);
                    return res.status(500).json({ 
                        success: false, 
                        message: 'Gagal mengupdate pengaturan' 
                    });
                }
                
                updated++;
                if (updated === totalSettings) {
                    db.run('COMMIT');
                    res.json({
                        success: true,
                        message: 'Pengaturan berhasil diupdate'
                    });
                }
            });
        });
    });
});

// Get sales report
router.get('/reports/sales', verifyAdmin, (req, res) => {
    const db = req.app.locals.db;
    const { start_date, end_date, period = 'daily' } = req.query;
    
    let dateFilter = '';
    let params = [];
    
    if (start_date && end_date) {
        dateFilter = 'AND DATE(o.created_at) BETWEEN ? AND ?';
        params = [start_date, end_date];
    } else {
        // Default to last 30 days
        dateFilter = 'AND DATE(o.created_at) >= DATE("now", "-30 days")';
    }
    
    let groupBy = '';
    let selectDate = '';
    
    switch (period) {
        case 'daily':
            selectDate = 'DATE(o.created_at) as period';
            groupBy = 'DATE(o.created_at)';
            break;
        case 'weekly':
            selectDate = 'strftime("%Y-W%W", o.created_at) as period';
            groupBy = 'strftime("%Y-W%W", o.created_at)';
            break;
        case 'monthly':
            selectDate = 'strftime("%Y-%m", o.created_at) as period';
            groupBy = 'strftime("%Y-%m", o.created_at)';
            break;
        default:
            selectDate = 'DATE(o.created_at) as period';
            groupBy = 'DATE(o.created_at)';
    }
    
    const query = `
        SELECT 
            ${selectDate},
            COUNT(o.id) as total_orders,
            SUM(o.total_amount) as total_revenue,
            AVG(o.total_amount) as avg_order_value
        FROM orders o 
        WHERE o.status IN ('confirmed', 'preparing', 'ready', 'delivered') ${dateFilter}
        GROUP BY ${groupBy}
        ORDER BY period DESC
    `;
    
    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error fetching sales report:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil laporan penjualan' 
            });
        }
        
        res.json({
            success: true,
            data: rows,
            period: period,
            date_range: {
                start: start_date || 'last 30 days',
                end: end_date || 'today'
            }
        });
    });
});

// Get popular products report
router.get('/reports/products', verifyAdmin, (req, res) => {
    const db = req.app.locals.db;
    const { limit = 10 } = req.query;
    
    const query = `
        SELECT 
            p.id,
            p.name,
            p.price,
            p.category,
            SUM(oi.quantity) as total_sold,
            SUM(oi.quantity * oi.price) as total_revenue,
            COUNT(DISTINCT oi.order_id) as order_count
        FROM products p
        JOIN order_items oi ON p.id = oi.product_id
        JOIN orders o ON oi.order_id = o.id
        WHERE o.status IN ('confirmed', 'preparing', 'ready', 'delivered')
        GROUP BY p.id, p.name, p.price, p.category
        ORDER BY total_sold DESC
        LIMIT ?
    `;
    
    db.all(query, [parseInt(limit)], (err, rows) => {
        if (err) {
            console.error('Error fetching product report:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil laporan produk' 
            });
        }
        
        res.json({
            success: true,
            data: rows
        });
    });
});

// Change admin password
router.put('/change-password', verifyAdmin, (req, res) => {
    const db = req.app.locals.db;
    const { current_password, new_password } = req.body;
    const adminId = req.admin.id;
    
    if (!current_password || !new_password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Password lama dan baru harus diisi' 
        });
    }
    
    if (new_password.length < 6) {
        return res.status(400).json({ 
            success: false, 
            message: 'Password baru minimal 6 karakter' 
        });
    }
    
    // Get current admin data
    db.get('SELECT * FROM admin_users WHERE id = ?', [adminId], (err, user) => {
        if (err) {
            console.error('Error fetching admin:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal memeriksa admin' 
            });
        }
        
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'Admin tidak ditemukan' 
            });
        }
        
        // Verify current password
        bcrypt.compare(current_password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing password:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal memverifikasi password' 
                });
            }
            
            if (!isMatch) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'Password lama tidak benar' 
                });
            }
            
            // Hash new password
            bcrypt.hash(new_password, 10, (err, hashedPassword) => {
                if (err) {
                    console.error('Error hashing password:', err);
                    return res.status(500).json({ 
                        success: false, 
                        message: 'Gagal mengenkripsi password' 
                    });
                }
                
                // Update password
                db.run('UPDATE admin_users SET password = ? WHERE id = ?', 
                       [hashedPassword, adminId], function(err) {
                    if (err) {
                        console.error('Error updating password:', err);
                        return res.status(500).json({ 
                            success: false, 
                            message: 'Gagal mengupdate password' 
                        });
                    }
                    
                    res.json({
                        success: true,
                        message: 'Password berhasil diubah'
                    });
                });
            });
        });
    });
});

module.exports = router;