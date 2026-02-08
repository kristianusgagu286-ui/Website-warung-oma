// Admin Configuration
const API_BASE_URL = 'http://localhost:3000/api';
let currentUser = null;

// Initialize Admin Panel
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    initializeEventListeners();
});

// Authentication Functions
function checkAuth() {
    const token = localStorage.getItem('adminToken');
    const username = localStorage.getItem('adminUsername');
    
    if (token && username) {
        currentUser = { username, token };
        showDashboard();
        loadDashboardData();
    } else {
        showLoginModal();
    }
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    document.getElementById('adminUsername').textContent = currentUser.username;
}

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (in production, use proper backend authentication)
    if (username === 'admin' && password === 'admin123') {
        const token = 'admin-token-' + Date.now();
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminUsername', username);
        
        currentUser = { username, token };
        showDashboard();
        loadDashboardData();
        
        // Clear form
        document.getElementById('loginForm').reset();
        document.getElementById('loginError').style.display = 'none';
    } else {
        document.getElementById('loginError').textContent = 'Username atau password salah!';
        document.getElementById('loginError').style.display = 'block';
    }
});

function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUsername');
        currentUser = null;
        showLoginModal();
    }
}

// Navigation Functions
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName + '-section').classList.add('active');
    
    // Add active class to clicked nav link
    event.target.classList.add('active');
    
    // Load section data
    switch(sectionName) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'products':
            loadProducts();
            break;
        case 'reports':
            // Reports are generated on demand
            break;
        case 'settings':
            loadSettings();
            break;
    }
}

// Dashboard Functions
async function loadDashboardData() {
    try {
        // Load statistics
        const orders = getOrdersFromStorage();
        const products = getProductsFromStorage();
        
        // Calculate statistics
        const totalOrders = orders.length;
        const todayOrders = orders.filter(order => {
            const orderDate = new Date(order.created_at);
            const today = new Date();
            return orderDate.toDateString() === today.toDateString();
        }).length;
        
        const totalRevenue = orders
            .filter(order => order.status !== 'cancelled')
            .reduce((sum, order) => sum + (order.total_amount || 0), 0);
        
        const pendingOrders = orders.filter(order => order.status === 'pending').length;
        
        // Update dashboard stats
        document.getElementById('totalOrders').textContent = totalOrders;
        document.getElementById('todayOrders').textContent = todayOrders;
        document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
        document.getElementById('pendingOrders').textContent = pendingOrders;
        
        // Load recent orders
        loadRecentOrders();
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showNotification('Gagal memuat data dashboard', 'error');
    }
}

function loadRecentOrders() {
    const orders = getOrdersFromStorage();
    const recentOrders = orders.slice(-5).reverse(); // Get last 5 orders
    
    const tbody = document.querySelector('#recentOrdersTable tbody');
    tbody.innerHTML = '';
    
    if (recentOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Belum ada pesanan</td></tr>';
        return;
    }
    
    recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.customer_name}</td>
            <td>${formatCurrency(order.total_amount)}</td>
            <td><span class="status-badge status-${order.status}">${getStatusText(order.status)}</span></td>
            <td>${formatDate(order.created_at)}</td>
        `;
        row.onclick = () => showOrderDetail(order.id);
        row.style.cursor = 'pointer';
        tbody.appendChild(row);
    });
}

// Orders Management
function loadOrders() {
    const orders = getOrdersFromStorage();
    const statusFilter = document.getElementById('orderStatusFilter').value;
    
    let filteredOrders = orders;
    if (statusFilter) {
        filteredOrders = orders.filter(order => order.status === statusFilter);
    }
    
    const tbody = document.querySelector('#ordersTable tbody');
    tbody.innerHTML = '';
    
    if (filteredOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Tidak ada pesanan</td></tr>';
        return;
    }
    
    filteredOrders.reverse().forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.customer_name}</td>
            <td>${order.customer_phone || '-'}</td>
            <td>${formatCurrency(order.total_amount)}</td>
            <td>
                <select class="status-select" onchange="updateOrderStatus(${order.id}, this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Dikonfirmasi</option>
                    <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Diproses</option>
                    <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Siap</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Dikirim</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Dibatalkan</option>
                </select>
            </td>
            <td>${formatDate(order.created_at)}</td>
            <td>
                <button onclick="showOrderDetail(${order.id})" class="btn-action btn-view">Detail</button>
                <button onclick="deleteOrder(${order.id})" class="btn-action btn-delete">Hapus</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showOrderDetail(orderId) {
    const orders = getOrdersFromStorage();
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
        showNotification('Pesanan tidak ditemukan', 'error');
        return;
    }
    
    const modal = document.getElementById('orderModal');
    const content = document.getElementById('orderDetailContent');
    
    content.innerHTML = `
        <div class="order-detail">
            <div class="detail-section">
                <h3>Informasi Pesanan</h3>
                <p><strong>ID Pesanan:</strong> #${order.id}</p>
                <p><strong>Tanggal:</strong> ${formatDateTime(order.created_at)}</p>
                <p><strong>Status:</strong> <span class="status-badge status-${order.status}">${getStatusText(order.status)}</span></p>
            </div>
            
            <div class="detail-section">
                <h3>Informasi Pelanggan</h3>
                <p><strong>Nama:</strong> ${order.customer_name}</p>
                <p><strong>Telepon:</strong> ${order.customer_phone || '-'}</p>
                <p><strong>Alamat:</strong> ${order.delivery_address}</p>
            </div>
            
            <div class="detail-section">
                <h3>Detail Produk</h3>
                <table class="detail-table">
                    <thead>
                        <tr>
                            <th>Produk</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${order.items ? order.items.map(item => `
                            <tr>
                                <td>${item.product_name}</td>
                                <td>${formatCurrency(item.price)}</td>
                                <td>${item.quantity}</td>
                                <td>${formatCurrency(item.price * item.quantity)}</td>
                            </tr>
                        `).join('') : `
                            <tr>
                                <td>${order.product_name}</td>
                                <td>-</td>
                                <td>${order.quantity}</td>
                                <td>-</td>
                            </tr>
                        `}
                    </tbody>
                </table>
            </div>
            
            <div class="detail-section">
                <h3>Total Pembayaran</h3>
                <p class="total-amount">${formatCurrency(order.total_amount)}</p>
            </div>
            
            <div class="detail-actions">
                <button onclick="printOrder(${order.id})" class="btn-secondary">Cetak</button>
                <button onclick="closeOrderModal()" class="btn-primary">Tutup</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function updateOrderStatus(orderId, newStatus) {
    const orders = getOrdersFromStorage();
    const orderIndex = orders.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        orders[orderIndex].updated_at = new Date().toISOString();
        saveOrdersToStorage(orders);
        
        showNotification('Status pesanan berhasil diupdate', 'success');
        loadDashboardData();
    }
}

function deleteOrder(orderId) {
    if (!confirm('Apakah Anda yakin ingin menghapus pesanan ini?')) {
        return;
    }
    
    const orders = getOrdersFromStorage();
    const filteredOrders = orders.filter(o => o.id !== orderId);
    saveOrdersToStorage(filteredOrders);
    
    showNotification('Pesanan berhasil dihapus', 'success');
    loadOrders();
    loadDashboardData();
}

function printOrder(orderId) {
    const orders = getOrdersFromStorage();
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <html>
        <head>
            <title>Pesanan #${order.id}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
                .total { font-size: 1.2em; font-weight: bold; text-align: right; }
            </style>
        </head>
        <body>
            <h1>Warung Oma</h1>
            <h2>Pesanan #${order.id}</h2>
            <p><strong>Tanggal:</strong> ${formatDateTime(order.created_at)}</p>
            <p><strong>Pelanggan:</strong> ${order.customer_name}</p>
            <p><strong>Telepon:</strong> ${order.customer_phone || '-'}</p>
            <p><strong>Alamat:</strong> ${order.delivery_address}</p>
            <table>
                <thead>
                    <tr>
                        <th>Produk</th>
                        <th>Jumlah</th>
                        <th>Harga</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${order.items ? order.items.map(item => `
                        <tr>
                            <td>${item.product_name}</td>
                            <td>${item.quantity}</td>
                            <td>${formatCurrency(item.price)}</td>
                            <td>${formatCurrency(item.price * item.quantity)}</td>
                        </tr>
                    `).join('') : `
                        <tr>
                            <td>${order.product_name}</td>
                            <td>${order.quantity}</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    `}
                </tbody>
            </table>
            <p class="total">Total: ${formatCurrency(order.total_amount)}</p>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Products Management
function loadProducts() {
    const products = getProductsFromStorage();
    const tbody = document.querySelector('#productsTable tbody');
    tbody.innerHTML = '';
    
    if (products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Belum ada produk</td></tr>';
        return;
    }
    
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${product.id}</td>
            <td>
                ${product.image_url ? `<img src="${product.image_url}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px; margin-right: 10px; vertical-align: middle;">` : ''}
                ${product.name}
            </td>
            <td>${formatCurrency(product.price)}</td>
            <td>${product.category || 'Makanan'}</td>
            <td><span class="status-badge ${product.is_available ? 'status-confirmed' : 'status-cancelled'}">${product.is_available ? 'Tersedia' : 'Tidak Tersedia'}</span></td>
            <td>
                <button onclick="editProduct(${product.id})" class="btn-action btn-edit">Edit</button>
                <button onclick="deleteProduct(${product.id})" class="btn-action btn-delete">Hapus</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showAddProductForm() {
    document.getElementById('productModalTitle').textContent = 'Tambah Produk';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('productModal').style.display = 'flex';
}

function editProduct(productId) {
    const products = getProductsFromStorage();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showNotification('Produk tidak ditemukan', 'error');
        return;
    }
    
    document.getElementById('productModalTitle').textContent = 'Edit Produk';
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productCategory').value = product.category || 'makanan';
    document.getElementById('productImageUrl').value = product.image_url || '';
    document.getElementById('productAvailable').checked = product.is_available !== false;
    
    // Show image preview if exists
    if (product.image_url) {
        document.getElementById('previewImg').src = product.image_url;
        document.getElementById('imagePreview').style.display = 'block';
    } else {
        document.getElementById('imagePreview').style.display = 'none';
    }
    
    // Clear file input
    document.getElementById('productImageFile').value = '';
    
    document.getElementById('productModal').style.display = 'flex';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('productImageFile').value = '';
}

// Image Preview Handler
document.getElementById('productImageFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            showNotification('Ukuran file terlalu besar! Maksimal 2MB', 'error');
            e.target.value = '';
            return;
        }
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            showNotification('File harus berupa gambar!', 'error');
            e.target.value = '';
            return;
        }
        
        // Show preview
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('previewImg').src = event.target.result;
            document.getElementById('imagePreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        document.getElementById('imagePreview').style.display = 'none';
    }
});

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productId = document.getElementById('productId').value;
    const imageFile = document.getElementById('productImageFile').files[0];
    const imageUrl = document.getElementById('productImageUrl').value;
    
    // Determine image source
    let finalImageUrl = imageUrl;
    
    if (imageFile) {
        // Convert image to base64 for localStorage
        const reader = new FileReader();
        reader.onload = function(event) {
            finalImageUrl = event.target.result;
            saveProduct(productId, finalImageUrl);
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveProduct(productId, finalImageUrl);
    }
});

function saveProduct(productId, imageUrl) {
    const productData = {
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        category: document.getElementById('productCategory').value,
        image_url: imageUrl,
        is_available: document.getElementById('productAvailable').checked
    };
    
    const products = getProductsFromStorage();
    
    if (productId) {
        // Update existing product
        const index = products.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            products[index] = { ...products[index], ...productData, updated_at: new Date().toISOString() };
            showNotification('Produk berhasil diupdate', 'success');
        }
    } else {
        // Add new product
        const newProduct = {
            id: Date.now(),
            ...productData,
            created_at: new Date().toISOString()
        };
        products.push(newProduct);
        showNotification('Produk berhasil ditambahkan', 'success');
    }
    
    saveProductsToStorage(products);
    loadProducts();
    
    // Update product list in order form
    updateProductDropdown();
    
    closeProductModal();
}

// Update product dropdown in order form
function updateProductDropdown() {
    const products = getProductsFromStorage();
    const select = document.getElementById('selectedProduct');
    
    if (select) {
        // Save current selection
        const currentValue = select.value;
        
        // Clear and rebuild options
        select.innerHTML = '<option value="">Pilih Produk</option>';
        
        products.forEach(product => {
            if (product.is_available) {
                const option = document.createElement('option');
                option.value = product.name;
                option.textContent = `${product.name} - ${formatCurrency(product.price)}`;
                select.appendChild(option);
            }
        });
        
        // Restore selection if still exists
        if (currentValue) {
            select.value = currentValue;
        }
    }
}

function deleteProduct(productId) {
    if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
        return;
    }
    
    const products = getProductsFromStorage();
    const filteredProducts = products.filter(p => p.id !== productId);
    saveProductsToStorage(filteredProducts);
    
    showNotification('Produk berhasil dihapus', 'success');
    loadProducts();
}

// Reports Functions
function generateSalesReport() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const period = document.getElementById('reportPeriod').value;
    
    const orders = getOrdersFromStorage();
    let filteredOrders = orders.filter(order => order.status !== 'cancelled');
    
    if (startDate && endDate) {
        filteredOrders = filteredOrders.filter(order => {
            const orderDate = new Date(order.created_at);
            return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
        });
    }
    
    const totalOrders = filteredOrders.length;
    const totalRevenue = filteredOrders.reduce((sum, order) => sum + (order.total_amount || 0), 0);
    const averageOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    
    const reportContent = document.getElementById('salesReportContent');
    reportContent.innerHTML = `
        <div class="report-summary">
            <h4>Ringkasan Penjualan</h4>
            <p><strong>Total Pesanan:</strong> ${totalOrders}</p>
            <p><strong>Total Pendapatan:</strong> ${formatCurrency(totalRevenue)}</p>
            <p><strong>Rata-rata per Pesanan:</strong> ${formatCurrency(averageOrder)}</p>
            <p><strong>Periode:</strong> ${startDate || 'Awal'} - ${endDate || 'Sekarang'}</p>
        </div>
    `;
    
    showNotification('Laporan berhasil dibuat', 'success');
}

function generateProductReport() {
    const orders = getOrdersFromStorage();
    const productSales = {};
    
    orders.forEach(order => {
        if (order.status !== 'cancelled') {
            if (order.items) {
                order.items.forEach(item => {
                    if (!productSales[item.product_name]) {
                        productSales[item.product_name] = {
                            name: item.product_name,
                            quantity: 0,
                            revenue: 0
                        };
                    }
                    productSales[item.product_name].quantity += item.quantity;
                    productSales[item.product_name].revenue += item.price * item.quantity;
                });
            } else {
                if (!productSales[order.product_name]) {
                    productSales[order.product_name] = {
                        name: order.product_name,
                        quantity: 0,
                        revenue: 0
                    };
                }
                productSales[order.product_name].quantity += order.quantity || 1;
            }
        }
    });
    
    const sortedProducts = Object.values(productSales).sort((a, b) => b.quantity - a.quantity);
    
    const reportContent = document.getElementById('productReportContent');
    reportContent.innerHTML = `
        <div class="report-summary">
            <h4>Produk Terpopuler</h4>
            <table class="report-table">
                <thead>
                    <tr>
                        <th>Produk</th>
                        <th>Terjual</th>
                        <th>Pendapatan</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedProducts.slice(0, 10).map(product => `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.quantity}</td>
                            <td>${formatCurrency(product.revenue)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    showNotification('Laporan produk berhasil dibuat', 'success');
}

// Settings Functions
function loadSettings() {
    const settings = getSettingsFromStorage();
    
    document.getElementById('businessName').value = settings.business_name || 'Warung Oma';
    document.getElementById('businessAddress').value = settings.business_address || 'Jalan Kuwus-Golowelu, Nantal, Kabupaten Manggarai Barat, Nusa Tenggara Timur';
    document.getElementById('businessPhone').value = settings.business_phone || '(0385) 123456';
    document.getElementById('businessWhatsapp').value = settings.business_whatsapp || '085339204829';
    document.getElementById('operatingHours').value = settings.operating_hours || 'Senin - Minggu: 07.00 - 21.00 WITA';
    document.getElementById('deliveryFee').value = settings.delivery_fee || 0;
}

document.getElementById('settingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const settings = {
        business_name: document.getElementById('businessName').value,
        business_address: document.getElementById('businessAddress').value,
        business_phone: document.getElementById('businessPhone').value,
        business_whatsapp: document.getElementById('businessWhatsapp').value,
        operating_hours: document.getElementById('operatingHours').value,
        delivery_fee: parseFloat(document.getElementById('deliveryFee').value) || 0,
        updated_at: new Date().toISOString()
    };
    
    saveSettingsToStorage(settings);
    showNotification('Pengaturan berhasil disimpan', 'success');
});

// Storage Functions
function getOrdersFromStorage() {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
}

function saveOrdersToStorage(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function getProductsFromStorage() {
    const products = localStorage.getItem('products');
    if (products) {
        return JSON.parse(products);
    }
    
    // Default products if none exist
    const defaultProducts = [
        { id: 1, name: 'Nasi Jagung Manggarai', price: 15000, category: 'makanan', is_available: true, description: 'Nasi jagung khas Manggarai dengan lauk ikan asin dan sambal lu\'at', image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop' },
        { id: 2, name: 'Ja\'i Wuut (Daging Babi)', price: 35000, category: 'makanan', is_available: true, description: 'Daging babi khas Manggarai dengan bumbu tradisional', image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop' },
        { id: 3, name: 'Ikan Bakar Sambal Lu\'at', price: 30000, category: 'makanan', is_available: true, description: 'Ikan segar dibakar dengan sambal lu\'at khas Manggarai', image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=200&fit=crop' },
        { id: 4, name: 'Ayam Taliwang NTT', price: 28000, category: 'makanan', is_available: true, description: 'Ayam bakar khas NTT dengan bumbu pedas', image_url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop' },
        { id: 5, name: 'Rumpu Rampe', price: 20000, category: 'makanan', is_available: true, description: 'Sayur campur khas Manggarai dengan bumbu tradisional', image_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop' },
        { id: 6, name: 'Kopi Flores Panas', price: 8000, category: 'minuman', is_available: true, description: 'Kopi asli Flores dengan aroma khas', image_url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop' },
        { id: 7, name: 'Kopi Hitam Warkop', price: 2000, category: 'minuman', is_available: true, description: 'Kopi hitam sederhana ala warkop', image_url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=200&fit=crop' },
        { id: 8, name: 'Nasi Bungkus Warkop', price: 5000, category: 'makanan', is_available: true, description: 'Nasi bungkus lengkap dengan lauk sederhana', image_url: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=200&fit=crop' }
    ];
    
    saveProductsToStorage(defaultProducts);
    return defaultProducts;
}

function saveProductsToStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

function getSettingsFromStorage() {
    const settings = localStorage.getItem('settings');
    if (settings) {
        return JSON.parse(settings);
    }
    
    // Default settings
    return {
        business_name: 'Warung Oma',
        business_address: 'Jalan Kuwus-Golowelu, Nantal, Kabupaten Manggarai Barat, Nusa Tenggara Timur',
        business_phone: '(0385) 123456',
        business_whatsapp: '085339204829',
        operating_hours: 'Senin - Minggu: 07.00 - 21.00 WITA',
        delivery_fee: 0
    };
}

function saveSettingsToStorage(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
}

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getStatusText(status) {
    const statusMap = {
        'pending': 'Pending',
        'confirmed': 'Dikonfirmasi',
        'preparing': 'Diproses',
        'ready': 'Siap',
        'delivered': 'Dikirim',
        'cancelled': 'Dibatalkan'
    };
    return statusMap[status] || status;
}

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Close modals when clicking outside
    window.onclick = function(event) {
        const orderModal = document.getElementById('orderModal');
        const productModal = document.getElementById('productModal');
        
        if (event.target === orderModal) {
            closeOrderModal();
        }
        if (event.target === productModal) {
            closeProductModal();
        }
    };
    
    // Set default dates for reports
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    
    document.getElementById('startDate').valueAsDate = firstDay;
    document.getElementById('endDate').valueAsDate = today;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export functions for global access
window.showSection = showSection;
window.logout = logout;
window.showOrderDetail = showOrderDetail;
window.closeOrderModal = closeOrderModal;
window.updateOrderStatus = updateOrderStatus;
window.deleteOrder = deleteOrder;
window.printOrder = printOrder;
window.showAddProductForm = showAddProductForm;
window.editProduct = editProduct;
window.closeProductModal = closeProductModal;
window.deleteProduct = deleteProduct;
window.loadOrders = loadOrders;
window.generateSalesReport = generateSalesReport;
window.generateProductReport = generateProductReport;