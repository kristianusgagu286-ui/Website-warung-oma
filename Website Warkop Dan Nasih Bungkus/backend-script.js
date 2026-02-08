// Backend System JavaScript
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
});

function checkAuth() {
    const token = localStorage.getItem('backendToken');
    const username = localStorage.getItem('backendUsername');
    
    if (token && username) {
        showBackend(username);
        loadDashboard();
    } else {
        showLogin();
    }
}

function showLogin() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('backendSystem').style.display = 'none';
}

function showBackend(username) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('backendSystem').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = username;
}

// Login Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('backendToken', 'backend-token-' + Date.now());
        localStorage.setItem('backendUsername', username);
        
        showBackend(username);
        loadDashboard();
        
        document.getElementById('loginForm').reset();
        errorDiv.style.display = 'none';
    } else {
        errorDiv.textContent = '❌ Invalid username or password!';
        errorDiv.style.display = 'block';
    }
});

function logout() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        localStorage.removeItem('backendToken');
        localStorage.removeItem('backendUsername');
        
        // Redirect ke halaman home website
        window.location.href = 'index.html';
    }
}

// Navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active from menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName + '-section').classList.add('active');
    
    // Add active to clicked menu item
    const clickedItem = document.querySelector(`.menu-item[onclick*="${sectionName}"]`);
    if (clickedItem) {
        clickedItem.classList.add('active');
    }
    
    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'orders': 'Orders Management',
        'products': 'Products Management',
        'analytics': 'Analytics',
        'settings': 'Settings'
    };
    document.getElementById('pageTitle').textContent = titles[sectionName];
    
    // Load section data
    if (sectionName === 'orders') {
        loadOrders();
    } else if (sectionName === 'products') {
        loadProducts();
    }
}

// Dashboard Functions
function loadDashboard() {
    const orders = getOrdersFromStorage();
    
    // Calculate stats
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
    
    // Update stats
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('todayOrders').textContent = todayOrders;
    document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
    document.getElementById('pendingOrders').textContent = pendingOrders;
    
    // Load recent orders
    loadRecentOrders();
}

function loadRecentOrders() {
    const orders = getOrdersFromStorage();
    const recentOrders = orders.slice(-5).reverse();
    const container = document.getElementById('recentOrdersList');
    
    if (recentOrders.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📦</div><h3>No Orders Yet</h3><p>Orders will appear here</p></div>';
        return;
    }
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${recentOrders.map(order => `
                    <tr>
                        <td>#${order.id}</td>
                        <td>${order.customer_name}</td>
                        <td>${order.product_name}</td>
                        <td>${formatCurrency(order.total_amount || 0)}</td>
                        <td><span class="badge badge-${getStatusBadge(order.status)}">${getStatusText(order.status)}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Orders Management
function loadOrders() {
    const orders = getOrdersFromStorage();
    const filter = document.getElementById('orderFilter').value;
    
    let filteredOrders = orders;
    if (filter) {
        filteredOrders = orders.filter(order => order.status === filter);
    }
    
    const container = document.getElementById('ordersList');
    
    if (filteredOrders.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📦</div><h3>No Orders Found</h3><p>No orders match the selected filter</p></div>';
        return;
    }
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${filteredOrders.reverse().map(order => `
                    <tr>
                        <td>#${order.id}</td>
                        <td>${order.customer_name}</td>
                        <td>${order.product_name}</td>
                        <td>${order.quantity}</td>
                        <td>${formatCurrency(order.total_amount || 0)}</td>
                        <td>
                            <select onchange="updateOrderStatus(${order.id}, this.value)" style="padding: 6px; background: #0f172a; border: 1px solid #334155; border-radius: 6px; color: #e2e8f0;">
                                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                                <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                                <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
                                <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Ready</option>
                                <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                                <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                            </select>
                        </td>
                        <td>
                            <button onclick="deleteOrder(${order.id})" class="btn-danger" style="padding: 6px 12px;">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function updateOrderStatus(orderId, newStatus) {
    const orders = getOrdersFromStorage();
    const orderIndex = orders.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        orders[orderIndex].updated_at = new Date().toISOString();
        saveOrdersToStorage(orders);
        
        alert('✅ Order status updated successfully!');
        loadDashboard();
    }
}

function deleteOrder(orderId) {
    if (!confirm('Are you sure you want to delete this order?')) {
        return;
    }
    
    const orders = getOrdersFromStorage();
    const filteredOrders = orders.filter(o => o.id !== orderId);
    saveOrdersToStorage(filteredOrders);
    
    alert('✅ Order deleted successfully!');
    loadOrders();
    loadDashboard();
}

// Products Management
function loadProducts() {
    const products = getProductsFromStorage();
    const container = document.getElementById('productsList');
    
    if (products.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🍽️</div><h3>No Products Yet</h3><p>Click "Add Product" to create your first product</p></div>';
        return;
    }
    
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${products.map(product => `
                    <tr>
                        <td><img src="${product.image_url || 'https://via.placeholder.com/60'}" class="product-thumb" alt="${product.name}"></td>
                        <td>${product.name}</td>
                        <td>${formatCurrency(product.price)}</td>
                        <td>${product.category || 'makanan'}</td>
                        <td><span class="badge ${product.is_available ? 'badge-success' : 'badge-danger'}">${product.is_available ? 'Available' : 'Unavailable'}</span></td>
                        <td>
                            <button onclick="editProduct(${product.id})" class="btn-warning" style="padding: 6px 12px; margin-right: 5px;">Edit</button>
                            <button onclick="deleteProduct(${product.id})" class="btn-danger" style="padding: 6px 12px;">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function showAddProductModal() {
    document.getElementById('productModalTitle').textContent = 'Add Product';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('productModal').style.display = 'block';
}

function editProduct(productId) {
    const products = getProductsFromStorage();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    document.getElementById('productModalTitle').textContent = 'Edit Product';
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productCategory').value = product.category || 'makanan';
    document.getElementById('productImageUrl').value = product.image_url || '';
    document.getElementById('productAvailable').checked = product.is_available !== false;
    
    if (product.image_url) {
        document.getElementById('previewImg').src = product.image_url;
        document.getElementById('imagePreview').style.display = 'block';
    }
    
    document.getElementById('productModal').style.display = 'block';
}

function deleteProduct(productId) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }
    
    const products = getProductsFromStorage();
    const filteredProducts = products.filter(p => p.id !== productId);
    saveProductsToStorage(filteredProducts);
    
    alert('✅ Product deleted successfully!');
    loadProducts();
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Image Preview
document.getElementById('productImageFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            alert('❌ File size too large! Maximum 2MB');
            e.target.value = '';
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            alert('❌ File must be an image!');
            e.target.value = '';
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('previewImg').src = event.target.result;
            document.getElementById('imagePreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Product Form Submit
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productId = document.getElementById('productId').value;
    const imageFile = document.getElementById('productImageFile').files[0];
    const imageUrl = document.getElementById('productImageUrl').value;
    
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            saveProduct(productId, event.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveProduct(productId, imageUrl);
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
        const index = products.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            products[index] = { ...products[index], ...productData, updated_at: new Date().toISOString() };
            alert('✅ Product updated successfully!');
        }
    } else {
        const newProduct = {
            id: Date.now(),
            ...productData,
            created_at: new Date().toISOString()
        };
        products.push(newProduct);
        alert('✅ Product added successfully!');
    }
    
    saveProductsToStorage(products);
    loadProducts();
    closeProductModal();
}

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
    
    // Default products
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

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function getStatusText(status) {
    const statusMap = {
        'pending': 'Pending',
        'confirmed': 'Confirmed',
        'preparing': 'Preparing',
        'ready': 'Ready',
        'delivered': 'Delivered',
        'cancelled': 'Cancelled'
    };
    return statusMap[status] || status;
}

function getStatusBadge(status) {
    const badgeMap = {
        'pending': 'warning',
        'confirmed': 'info',
        'preparing': 'info',
        'ready': 'success',
        'delivered': 'success',
        'cancelled': 'danger'
    };
    return badgeMap[status] || 'info';
}

// Make functions globally accessible
window.showSection = showSection;
window.logout = logout;
window.loadOrders = loadOrders;
window.updateOrderStatus = updateOrderStatus;
window.deleteOrder = deleteOrder;
window.loadProducts = loadProducts;
window.showAddProductModal = showAddProductModal;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.closeProductModal = closeProductModal;
