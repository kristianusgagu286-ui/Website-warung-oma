// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Load products dynamically
    loadProductsFromStorage();
    
    // Update product dropdown in order form
    updateProductDropdown();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product Selection Function
function selectProduct(productName, price) {
    const productSelect = document.getElementById('selectedProduct');
    const optionValue = productName;
    
    // Set the selected product in the form
    productSelect.value = optionValue;
    
    // Scroll to order form
    document.getElementById('order').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add visual feedback
    productSelect.style.backgroundColor = '#e8f5e8';
    setTimeout(() => {
        productSelect.style.backgroundColor = '';
    }, 1000);
}

// Load Products from localStorage
function loadProductsFromStorage() {
    const products = getProductsFromStorage();
    const productsGrid = document.querySelector('.products-grid');
    
    if (!productsGrid) return;
    
    // Clear existing products
    productsGrid.innerHTML = '';
    
    // Display products
    products.forEach(product => {
        if (product.is_available) {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        }
    });
}

function getProductsFromStorage() {
    const products = localStorage.getItem('products');
    if (products) {
        return JSON.parse(products);
    }
    
    // Default products if none exist
    return [
        { id: 1, name: 'Nasi Jagung Manggarai', price: 15000, category: 'makanan', is_available: true, description: 'Nasi jagung khas Manggarai dengan lauk ikan asin, sayur, dan sambal lu\'at yang pedas.', image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop' },
        { id: 2, name: 'Ja\'i Wuut (Daging Babi)', price: 35000, category: 'makanan', is_available: true, description: 'Daging babi khas Manggarai yang dimasak dengan bumbu tradisional, gurih dan lezat.', image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop' },
        { id: 3, name: 'Ikan Bakar Sambal Lu\'at', price: 30000, category: 'makanan', is_available: true, description: 'Ikan segar dibakar dengan sambal lu\'at khas Manggarai yang pedas dan nikmat.', image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=200&fit=crop' },
        { id: 4, name: 'Ayam Taliwang NTT', price: 28000, category: 'makanan', is_available: true, description: 'Ayam bakar khas NTT dengan bumbu pedas dan gurih, disajikan dengan plecing kangkung.', image_url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop' },
        { id: 5, name: 'Rumpu Rampe', price: 20000, category: 'makanan', is_available: true, description: 'Sayur campur khas Manggarai dengan berbagai jenis sayuran segar dan bumbu tradisional.', image_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop' },
        { id: 6, name: 'Kopi Flores Panas', price: 8000, category: 'minuman', is_available: true, description: 'Kopi asli Flores dengan aroma khas dan rasa yang nikmat, disajikan panas.', image_url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop' },
        { id: 7, name: 'Kopi Hitam Warkop', price: 2000, category: 'minuman', is_available: true, description: 'Kopi hitam sederhana ala warkop, pas untuk menemani pagi atau sore hari.', image_url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=200&fit=crop' },
        { id: 8, name: 'Nasi Bungkus Warkop', price: 5000, category: 'makanan', is_available: true, description: 'Nasi bungkus lengkap dengan lauk sederhana, praktis dan mengenyangkan.', image_url: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=200&fit=crop' }
    ];
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image_url || 'https://via.placeholder.com/300x200/ddd/999?text=No+Image'}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">${formatCurrency(product.price)}</p>
            <p class="description">${product.description || 'Produk berkualitas'}</p>
            <button class="btn-order" onclick="selectProduct('${product.name.replace(/'/g, "\\'")}', ${product.price})">Pesan Sekarang</button>
        </div>
    `;
    
    return card;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Update product dropdown in order form
function updateProductDropdown() {
    const products = getProductsFromStorage();
    const select = document.getElementById('selectedProduct');
    
    if (!select) return;
    
    // Clear existing options except the first one
    select.innerHTML = '<option value="">Pilih Produk</option>';
    
    // Add products to dropdown
    products.forEach(product => {
        if (product.is_available) {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = `${product.name} - ${formatCurrency(product.price)}`;
            select.appendChild(option);
        }
    });
}

// Form Validation and Submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const customerName = document.getElementById('customerName');
    const selectedProduct = document.getElementById('selectedProduct');
    const quantity = document.getElementById('quantity');
    const deliveryAddress = document.getElementById('deliveryAddress');
    
    // Reset previous error styles
    resetFormStyles();
    
    // Validation flags
    let isValid = true;
    let errorMessages = [];
    
    // Validate customer name
    if (!customerName.value.trim()) {
        showFieldError(customerName, 'Nama pelanggan harus diisi');
        errorMessages.push('Nama pelanggan harus diisi');
        isValid = false;
    } else if (customerName.value.trim().length < 2) {
        showFieldError(customerName, 'Nama pelanggan minimal 2 karakter');
        errorMessages.push('Nama pelanggan minimal 2 karakter');
        isValid = false;
    }
    
    // Validate selected product
    if (!selectedProduct.value) {
        showFieldError(selectedProduct, 'Produk harus dipilih');
        errorMessages.push('Produk harus dipilih');
        isValid = false;
    }
    
    // Validate quantity
    if (!quantity.value || quantity.value < 1) {
        showFieldError(quantity, 'Jumlah pesanan minimal 1');
        errorMessages.push('Jumlah pesanan minimal 1');
        isValid = false;
    } else if (quantity.value > 50) {
        showFieldError(quantity, 'Jumlah pesanan maksimal 50');
        errorMessages.push('Jumlah pesanan maksimal 50');
        isValid = false;
    }
    
    // Validate delivery address
    if (!deliveryAddress.value.trim()) {
        showFieldError(deliveryAddress, 'Alamat pengiriman harus diisi');
        errorMessages.push('Alamat pengiriman harus diisi');
        isValid = false;
    } else if (deliveryAddress.value.trim().length < 10) {
        showFieldError(deliveryAddress, 'Alamat pengiriman minimal 10 karakter');
        errorMessages.push('Alamat pengiriman minimal 10 karakter');
        isValid = false;
    }
    
    // If validation fails, show error message
    if (!isValid) {
        showErrorMessage(errorMessages);
        return;
    }
    
    // If validation passes, process the order
    processOrder({
        customerName: customerName.value.trim(),
        selectedProduct: selectedProduct.value,
        quantity: parseInt(quantity.value),
        deliveryAddress: deliveryAddress.value.trim()
    });
});

// Show field error
function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    field.style.backgroundColor = '#fdf2f2';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Reset form styles
function resetFormStyles() {
    const formFields = document.querySelectorAll('#orderForm input, #orderForm select, #orderForm textarea');
    formFields.forEach(field => {
        field.style.borderColor = '#ddd';
        field.style.backgroundColor = '';
        
        // Remove error messages
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
    
    // Hide any existing error alerts
    const existingAlert = document.querySelector('.error-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
}

// Show general error message
function showErrorMessage(messages) {
    const form = document.getElementById('orderForm');
    
    // Remove existing error alert
    const existingAlert = document.querySelector('.error-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create error alert
    const errorAlert = document.createElement('div');
    errorAlert.className = 'error-alert';
    errorAlert.style.cssText = `
        background: #f8d7da;
        color: #721c24;
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #f5c6cb;
        margin-bottom: 1rem;
    `;
    
    const errorTitle = document.createElement('h4');
    errorTitle.textContent = '❌ Terdapat kesalahan pada form:';
    errorTitle.style.marginBottom = '0.5rem';
    
    const errorList = document.createElement('ul');
    errorList.style.marginLeft = '1rem';
    
    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        errorList.appendChild(listItem);
    });
    
    errorAlert.appendChild(errorTitle);
    errorAlert.appendChild(errorList);
    
    form.insertBefore(errorAlert, form.firstChild);
    
    // Scroll to error
    errorAlert.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Process successful order
function processOrder(orderData) {
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim Pesanan...';
    submitBtn.style.opacity = '0.7';
    
    try {
        // Get product from localStorage
        const products = getProductsFromStorage();
        const product = products.find(p => p.name === orderData.selectedProduct);
        
        if (!product) {
            throw new Error('Produk tidak ditemukan');
        }
        
        // Calculate total amount
        const totalAmount = product.price * orderData.quantity;
        
        // Create order object
        const order = {
            id: Date.now(),
            customer_name: orderData.customerName,
            product_name: orderData.selectedProduct,
            product_id: product.id,
            quantity: orderData.quantity,
            total_amount: totalAmount,
            delivery_address: orderData.deliveryAddress,
            status: 'pending',
            created_at: new Date().toISOString()
        };
        
        // Save to localStorage
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Hide the form
        document.getElementById('orderForm').style.display = 'none';
        
        // Show success message
        const successMessage = document.getElementById('orderSuccess');
        successMessage.style.display = 'block';
        
        // Update success message with order details
        const orderDetails = `
            <h3>✅ Pesanan Berhasil Dikirim!</h3>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0; text-align: left;">
                <h4 style="color: #2c3e50; margin-bottom: 1rem;">Detail Pesanan:</h4>
                <p><strong>ID Pesanan:</strong> #${order.id}</p>
                <p><strong>Nama:</strong> ${orderData.customerName}</p>
                <p><strong>Produk:</strong> ${orderData.selectedProduct}</p>
                <p><strong>Harga Satuan:</strong> ${formatCurrency(product.price)}</p>
                <p><strong>Jumlah:</strong> ${orderData.quantity} porsi</p>
                <p><strong>Total:</strong> ${formatCurrency(totalAmount)}</p>
                <p><strong>Alamat:</strong> ${orderData.deliveryAddress}</p>
                <p><strong>Status:</strong> <span style="color: #f39c12;">Menunggu Konfirmasi</span></p>
            </div>
            <p>Terima kasih atas pesanan Anda. Kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi dan informasi pembayaran.</p>
            <button onclick="resetForm()" style="background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 1rem;">Pesan Lagi</button>
        `;
        
        successMessage.innerHTML = orderDetails;
        
        // Scroll to success message
        successMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
    } catch (error) {
        console.error('Error processing order:', error);
        
        // Show error message
        showErrorMessage([error.message || 'Terjadi kesalahan saat mengirim pesanan. Silakan coba lagi.']);
        
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
    }
}

// Reset form function
function resetForm() {
    document.getElementById('orderForm').reset();
    document.getElementById('orderForm').style.display = 'block';
    document.getElementById('orderSuccess').style.display = 'none';
    resetFormStyles();
    
    // Scroll back to form
    document.getElementById('order').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add loading animation for form submission
function showLoadingState() {
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim Pesanan...';
    submitBtn.style.opacity = '0.7';
    
    // Simulate processing time
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
    }, 2000);
}

// Add input formatting for better UX
document.getElementById('customerName').addEventListener('input', function(e) {
    // Capitalize first letter of each word
    const words = e.target.value.split(' ');
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    });
    e.target.value = capitalizedWords.join(' ');
});

// Add quantity input validation
document.getElementById('quantity').addEventListener('input', function(e) {
    const value = parseInt(e.target.value);
    if (value > 50) {
        e.target.value = 50;
        showFieldError(e.target, 'Jumlah pesanan maksimal 50');
    } else if (value < 1 && e.target.value !== '') {
        e.target.value = 1;
    }
});

// Add character counter for address field
document.getElementById('deliveryAddress').addEventListener('input', function(e) {
    const maxLength = 200;
    const currentLength = e.target.value.length;
    
    // Remove existing counter
    const existingCounter = e.target.parentNode.querySelector('.char-counter');
    if (existingCounter) {
        existingCounter.remove();
    }
    
    // Add character counter
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = `
        font-size: 0.8rem;
        color: ${currentLength > maxLength ? '#e74c3c' : '#666'};
        text-align: right;
        margin-top: 0.25rem;
    `;
    counter.textContent = `${currentLength}/${maxLength} karakter`;
    
    e.target.parentNode.appendChild(counter);
    
    // Limit input length
    if (currentLength > maxLength) {
        e.target.value = e.target.value.substring(0, maxLength);
    }
});

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) {
        // Create scroll to top button
        const button = document.createElement('button');
        button.id = 'scrollToTop';
        button.innerHTML = '↑';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            cursor: pointer;
            display: none;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(button);
    }
    
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Add animation on scroll for product cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
});

// Add form auto-save to localStorage (optional feature)
function saveFormData() {
    const formData = {
        customerName: document.getElementById('customerName').value,
        selectedProduct: document.getElementById('selectedProduct').value,
        quantity: document.getElementById('quantity').value,
        deliveryAddress: document.getElementById('deliveryAddress').value
    };
    localStorage.setItem('orderFormData', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('orderFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('customerName').value = formData.customerName || '';
        document.getElementById('selectedProduct').value = formData.selectedProduct || '';
        document.getElementById('quantity').value = formData.quantity || '';
        document.getElementById('deliveryAddress').value = formData.deliveryAddress || '';
    }
}

// Auto-save form data on input
document.querySelectorAll('#orderForm input, #orderForm select, #orderForm textarea').forEach(field => {
    field.addEventListener('input', saveFormData);
});

// Load saved form data on page load
document.addEventListener('DOMContentLoaded', loadFormData);

// Clear saved data after successful submission
function clearSavedFormData() {
    localStorage.removeItem('orderFormData');
}