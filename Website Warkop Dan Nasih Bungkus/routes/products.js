const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    const db = req.app.locals.db;
    const { category, available } = req.query;
    
    let query = 'SELECT * FROM products WHERE 1=1';
    let params = [];
    
    if (category) {
        query += ' AND category = ?';
        params.push(category);
    }
    
    if (available !== undefined) {
        query += ' AND is_available = ?';
        params.push(available === 'true' ? 1 : 0);
    }
    
    query += ' ORDER BY created_at DESC';
    
    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil data produk' 
            });
        }
        
        res.json({
            success: true,
            data: rows,
            count: rows.length
        });
    });
});

// Get single product
router.get('/:id', (req, res) => {
    const db = req.app.locals.db;
    const productId = req.params.id;
    
    db.get('SELECT * FROM products WHERE id = ?', [productId], (err, row) => {
        if (err) {
            console.error('Error fetching product:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil data produk' 
            });
        }
        
        if (!row) {
            return res.status(404).json({ 
                success: false, 
                message: 'Produk tidak ditemukan' 
            });
        }
        
        res.json({
            success: true,
            data: row
        });
    });
});

// Add new product (admin only)
router.post('/', (req, res) => {
    const db = req.app.locals.db;
    const { name, price, description, image_url, category } = req.body;
    
    // Validation
    if (!name || !price) {
        return res.status(400).json({ 
            success: false, 
            message: 'Nama dan harga produk harus diisi' 
        });
    }
    
    if (price < 0) {
        return res.status(400).json({ 
            success: false, 
            message: 'Harga produk tidak boleh negatif' 
        });
    }
    
    const query = `INSERT INTO products (name, price, description, image_url, category) 
                   VALUES (?, ?, ?, ?, ?)`;
    
    db.run(query, [name, price, description || '', image_url || '', category || 'makanan'], 
           function(err) {
               if (err) {
                   console.error('Error adding product:', err);
                   return res.status(500).json({ 
                       success: false, 
                       message: 'Gagal menambahkan produk' 
                   });
               }
               
               res.status(201).json({
                   success: true,
                   message: 'Produk berhasil ditambahkan',
                   data: {
                       id: this.lastID,
                       name,
                       price,
                       description,
                       image_url,
                       category
                   }
               });
           });
});

// Update product (admin only)
router.put('/:id', (req, res) => {
    const db = req.app.locals.db;
    const productId = req.params.id;
    const { name, price, description, image_url, category, is_available } = req.body;
    
    // Check if product exists
    db.get('SELECT * FROM products WHERE id = ?', [productId], (err, row) => {
        if (err) {
            console.error('Error checking product:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal memeriksa produk' 
            });
        }
        
        if (!row) {
            return res.status(404).json({ 
                success: false, 
                message: 'Produk tidak ditemukan' 
            });
        }
        
        // Update product
        const query = `UPDATE products 
                       SET name = ?, price = ?, description = ?, image_url = ?, 
                           category = ?, is_available = ?, updated_at = CURRENT_TIMESTAMP 
                       WHERE id = ?`;
        
        db.run(query, [
            name || row.name,
            price !== undefined ? price : row.price,
            description !== undefined ? description : row.description,
            image_url !== undefined ? image_url : row.image_url,
            category || row.category,
            is_available !== undefined ? is_available : row.is_available,
            productId
        ], function(err) {
            if (err) {
                console.error('Error updating product:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal mengupdate produk' 
                });
            }
            
            res.json({
                success: true,
                message: 'Produk berhasil diupdate'
            });
        });
    });
});

// Delete product (admin only)
router.delete('/:id', (req, res) => {
    const db = req.app.locals.db;
    const productId = req.params.id;
    
    // Check if product exists
    db.get('SELECT * FROM products WHERE id = ?', [productId], (err, row) => {
        if (err) {
            console.error('Error checking product:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal memeriksa produk' 
            });
        }
        
        if (!row) {
            return res.status(404).json({ 
                success: false, 
                message: 'Produk tidak ditemukan' 
            });
        }
        
        // Delete product
        db.run('DELETE FROM products WHERE id = ?', [productId], function(err) {
            if (err) {
                console.error('Error deleting product:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Gagal menghapus produk' 
                });
            }
            
            res.json({
                success: true,
                message: 'Produk berhasil dihapus'
            });
        });
    });
});

// Get product categories
router.get('/categories/list', (req, res) => {
    const db = req.app.locals.db;
    
    db.all('SELECT DISTINCT category FROM products ORDER BY category', (err, rows) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Gagal mengambil kategori' 
            });
        }
        
        const categories = rows.map(row => row.category);
        
        res.json({
            success: true,
            data: categories
        });
    });
});

module.exports = router;