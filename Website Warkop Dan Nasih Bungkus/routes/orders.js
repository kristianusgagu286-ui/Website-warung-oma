const express = require('express');
const router = express.Router();

// Create new order
router.post('/', (req, res) => {
    const db = req.app.locals.db;
    const { customer_name, customer_phone, delivery_address, items, notes } = req.body;
    
    // Validation
    if (!customer_name || !delivery_address || !items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ 
            success: false, 
            message: 'Data pesanan tidak lengkap' 
        });
    }
    
    // Validate items
    for (let item of items) {
        if (!item.product_id || !item.quantity || item.quantity <= 0) {
            return res.status(400).json({ 
                success: false, 
                message: 'Data item pesanan tidak valid' 
            });
        }
    }
    
    // Start transaction
    db.serialize(() => {
        db.run('BEGIN TRANSACTION');
        
        // Get product prices and validate availability
        const productIds = items.map(item => item.product_id);
        const placeholders = productIds.map(() => '?').join(',');
        
        db.all(`SELECT id, name, price, is_available FROM products WHERE id IN (${placeholders})`, 
               productIds, (err, products) => {
            if (err) {
                db.run('ROLLBACK');
                console.error('Error fetching products:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal memvalidasi produk' 
                });
            }
            
            // Check if all products exist and are available
            const productMap = {};
            products.forEach(product => {
                productMap[product.id] = product;
            });
            
            for (let item of items) {
                const product = productMap[item.product_id];
                if (!product) {
                    db.run('ROLLBACK');
                    return res.status(400).json({ 
                        success: false, 
                        message: `Produk dengan ID ${item.product_id} tidak ditemukan` 
                    });
                }
                
                if (!product.is_available) {
                    db.run('ROLLBACK');
                    return res.status(400).json({ 
                        success: false, 
                        message: `Produk ${product.name} sedang tidak tersedia` 
                    });
                }
            }
            
            // Calculate total amount
            let totalAmount = 0;
            const orderItems = items.map(item => {
                const product = productMap[item.product_id];
                const itemTotal = product.price * item.quantity;
                totalAmount += itemTotal;
                
                return {
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: product.price
                };
            });
            
            // Insert order
            const orderQuery = `INSERT INTO orders (customer_name, customer_phone, delivery_address, total_amount, notes) 
                               VALUES (?, ?, ?, ?, ?)`;
            
            db.run(orderQuery, [customer_name, customer_phone || '', delivery_address, totalAmount, notes || ''], 
                   function(err) {
                if (err) {
                    db.run('ROLLBACK');
                    console.error('Error creating order:', err);
                    return res.status(500).json({ 
                        success: false, 
                        message: 'Gagal membuat pesanan' 
                    });
                }
                
                const orderId = this.lastID;
                
                // Insert order items
                const itemQuery = `INSERT INTO order_items (order_id, product_id, quantity, price) 
                                  VALUES (?, ?, ?, ?)`;
                
                let itemsInserted = 0;
                const totalItems = orderItems.length;
                
                orderItems.forEach(item => {
                    db.run(itemQuery, [orderId, item.product_id, item.quantity, item.price], 
                           function(err) {
                        if (err) {
                            db.run('ROLLBACK');
                            console.error('Error inserting order item:', err);
                            return res.status(500).json({ 
                                success: false, 
                                message: 'Gagal menyimpan item pesanan' 
                            });
                        }
                        
                        itemsInserted++;
                        
                        if (itemsInserted === totalItems) {
                            db.run('COMMIT');
                            
                            res.status(201).json({
                                success: true,
                                message: 'Pesanan berhasil dibuat',
                                data: {
                                    order_id: orderId,
                                    customer_name,
                                    total_amount: totalAmount,
                                    status: 'pending',
                                    items: orderItems.length
                                }
                            });
                        }
                    });
                });
            });
        });
    });
});

// Get all orders (admin)
router.get('/', (req, res) => {
    const db = req.app.locals.db;
    const { status, limit = 50, offset = 0 } = req.query;
    
    let query = `SELECT o.*, COUNT(oi.id) as item_count 
                 FROM orders o 
                 LEFT JOIN order_items oi ON o.id = oi.order_id 
                 WHERE 1=1`;
    let params = [];
    
    if (status) {
        query += ' AND o.status = ?';
        params.push(status);
    }
    
    query += ' GROUP BY o.id ORDER BY o.created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));
    
    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error fetching orders:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil data pesanan' 
            });
        }
        
        res.json({
            success: true,
            data: rows,
            count: rows.length
        });
    });
});

// Get single order with items
router.get('/:id', (req, res) => {
    const db = req.app.locals.db;
    const orderId = req.params.id;
    
    // Get order details
    db.get('SELECT * FROM orders WHERE id = ?', [orderId], (err, order) => {
        if (err) {
            console.error('Error fetching order:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil data pesanan' 
            });
        }
        
        if (!order) {
            return res.status(404).json({ 
                success: false, 
                message: 'Pesanan tidak ditemukan' 
            });
        }
        
        // Get order items
        const itemsQuery = `SELECT oi.*, p.name as product_name, p.image_url 
                           FROM order_items oi 
                           JOIN products p ON oi.product_id = p.id 
                           WHERE oi.order_id = ?`;
        
        db.all(itemsQuery, [orderId], (err, items) => {
            if (err) {
                console.error('Error fetching order items:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal mengambil item pesanan' 
                });
            }
            
            res.json({
                success: true,
                data: {
                    ...order,
                    items: items
                }
            });
        });
    });
});

// Update order status (admin)
router.put('/:id/status', (req, res) => {
    const db = req.app.locals.db;
    const orderId = req.params.id;
    const { status } = req.body;
    
    const validStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'];
    
    if (!status || !validStatuses.includes(status)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Status pesanan tidak valid' 
        });
    }
    
    // Check if order exists
    db.get('SELECT * FROM orders WHERE id = ?', [orderId], (err, row) => {
        if (err) {
            console.error('Error checking order:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal memeriksa pesanan' 
            });
        }
        
        if (!row) {
            return res.status(404).json({ 
                success: false, 
                message: 'Pesanan tidak ditemukan' 
            });
        }
        
        // Update order status
        db.run('UPDATE orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', 
               [status, orderId], function(err) {
            if (err) {
                console.error('Error updating order status:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal mengupdate status pesanan' 
                });
            }
            
            res.json({
                success: true,
                message: 'Status pesanan berhasil diupdate',
                data: {
                    order_id: orderId,
                    new_status: status
                }
            });
        });
    });
});

// Get order statistics (admin)
router.get('/stats/summary', (req, res) => {
    const db = req.app.locals.db;
    
    const queries = {
        total_orders: 'SELECT COUNT(*) as count FROM orders',
        pending_orders: 'SELECT COUNT(*) as count FROM orders WHERE status = "pending"',
        total_revenue: 'SELECT SUM(total_amount) as total FROM orders WHERE status IN ("confirmed", "preparing", "ready", "delivered")',
        today_orders: 'SELECT COUNT(*) as count FROM orders WHERE DATE(created_at) = DATE("now")'
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
                res.json({
                    success: true,
                    data: stats
                });
            }
        });
    });
});

// Cancel order
router.put('/:id/cancel', (req, res) => {
    const db = req.app.locals.db;
    const orderId = req.params.id;
    
    // Check if order exists and can be cancelled
    db.get('SELECT * FROM orders WHERE id = ?', [orderId], (err, row) => {
        if (err) {
            console.error('Error checking order:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal memeriksa pesanan' 
            });
        }
        
        if (!row) {
            return res.status(404).json({ 
                success: false, 
                message: 'Pesanan tidak ditemukan' 
            });
        }
        
        if (row.status === 'delivered') {
            return res.status(400).json({ 
                success: false, 
                message: 'Pesanan yang sudah dikirim tidak dapat dibatalkan' 
            });
        }
        
        if (row.status === 'cancelled') {
            return res.status(400).json({ 
                success: false, 
                message: 'Pesanan sudah dibatalkan' 
            });
        }
        
        // Cancel order
        db.run('UPDATE orders SET status = "cancelled", updated_at = CURRENT_TIMESTAMP WHERE id = ?', 
               [orderId], function(err) {
            if (err) {
                console.error('Error cancelling order:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal membatalkan pesanan' 
                });
            }
            
            res.json({
                success: true,
                message: 'Pesanan berhasil dibatalkan'
            });
        });
    });
});

module.exports = router;