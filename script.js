// Products array moved to products.js

let cart = JSON.parse(localStorage.getItem('cart') || '[]');
const cartBadge = document.querySelector('.cart-badge');
const toastContainer = document.getElementById('toast-container');

// Alt klasör kontrolü (pages/ klasöründeysek yolu düzeltmek için)
const isSubfolder = window.location.pathname.includes('/pages/');
const pathPrefix = isSubfolder ? '../' : '';

function showPage(pageId) {
    const page = document.getElementById(pageId);
    if (!page) return; 
    document.body.setAttribute('data-page', pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.main-nav a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.includes(pageId)) a.classList.add('nav-active');
        else a.classList.remove('nav-active');
    });
}

window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.replace('#', '') || 'home';
    if (['home', 'checkout', 'login', 'help', 'order-tracking', 'customer-service'].includes(pageId)) {
        showPage(pageId);
    }
});

function init() {
    const pageId = window.location.hash.replace('#', '') || 'home';
    showPage(pageId);
    renderProducts(products); // Başlangıçta tüm ürünleri render et
    updateCartUI();

    // Form gönderim simülasyonları
    document.querySelectorAll('.auth-form').forEach(form => {
        const btn = form.querySelector('.auth-submit-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const type = form.id === 'login-form' ? 'Giriş' : 'Kayıt';
                showToast(`${type} yapılıyor...`, 'success');
            });
        }
    });

    // Sipariş Onay Mantığı
    const confirmOrderCheck = document.getElementById('confirm-order');
    if (confirmOrderCheck) {
        confirmOrderCheck.addEventListener('change', () => {
            if (confirmOrderCheck.checked) {
                // Rastgele Sipariş No Üret
                const orderNo = 'OCB-' + (Math.floor(Math.random() * 90000) + 10000);
                const orderNoEl = document.getElementById('order-no');
                if (orderNoEl) orderNoEl.innerText = '#' + orderNo;

                // Sepeti Boşalt
                cart = [];
                localStorage.removeItem('cart');
                updateCartUI();

                showToast('Siparişiniz başarıyla alındı!', 'success');
            }
        });
    }
}

function renderProducts(productsToRender) {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;
    
    grid.innerHTML = productsToRender.map(p => `
        <div class="product-card" data-category="${p.category}" data-title="${p.title}">
            <button class="fav-btn" onclick="event.preventDefault();"><i class="fa-regular fa-heart"></i></button>
            <a href="${pathPrefix}pages/urun-detay.html?id=${p.id}" target="_blank" class="product-link-wrapper">
                <div class="product-img-wrapper"><img src="${pathPrefix}${p.image}" alt="${p.title}" class="product-img" loading="lazy"></div>
                <div class="product-details">
                    <div class="product-brand">${p.brand}</div>
                    <h4 class="product-title">${p.title}</h4>
                    <div class="product-rating">
                        <div class="stars">${generateStars(p.rating)}</div>
                        <span class="review-count">(${p.reviewCount})</span>
                    </div>
                    <div class="product-price">
                        <div class="current-price">${formatPrice(p.price)}</div>
                    </div>
                </div>
            </a>
            <div class="hover-action">
                <button class="add-to-cart-btn" onclick="handleAddToCart(${p.id})"><span>Sepete Ekle</span></button>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    return starsHtml;
}

function handleAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        addToCart({
            id: product.id + Date.now(), // Benzersiz sepet ID'si
            title: product.title,
            price: product.price,
            img: product.image
        });
    }
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showToast(`${product.title} sepete eklendi!`, 'success');
}

function updateCartUI() {
    if (!cartBadge) return;
    cartBadge.innerText = cart.length;
    cartBadge.style.transform = 'scale(1.2)';
    setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);

    const cartList = document.getElementById('checkout-cart-items');
    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = '<div class="empty-cart-msg">Sepetiniz henüz boş.</div>';
        updateTotals(0);
        return;
    }

    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img"><img src="${pathPrefix}${item.img}"></div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <button onclick="removeFromCart(${item.id})" style="margin-left:auto; color:var(--text-light); background:none; font-size:18px;"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    updateTotals(total);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateTotals(subtotal) {
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping-fee');
    const totalEl = document.getElementById('grand-total');
    const discountRow = document.getElementById('discount-row');

    const shipping = subtotal > 500 || subtotal === 0 ? 0 : 59.90;
    const total = subtotal + shipping;

    if (subtotalEl) subtotalEl.innerText = formatPrice(subtotal);
    if (shippingEl) shippingEl.innerText = shipping === 0 ? 'Bedava' : formatPrice(shipping);
    if (totalEl) totalEl.innerText = formatPrice(total);
    if (discountRow) discountRow.style.display = subtotal > 500 ? 'flex' : 'none';
}

function formatPrice(p) {
    return p.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' TL';
}

function showToast(msg, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
        <span>${msg}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function toggleFaq(el) {
    el.parentElement.classList.toggle('active');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    
    if (tab === 'login') {
        document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
        document.getElementById('register-form').classList.add('active');
    }
}

function togglePassword(btn) {
    const input = btn.parentElement.querySelector('input');
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Filtreleme Mantığı
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const cat = link.getAttribute('data-category');
        if (cat) {
            // Filtreleme yap
            let filteredProducts = products;
            if (cat !== 'all') {
                filteredProducts = products.filter(p => p.category === cat);
            }
            renderProducts(filteredProducts);

            // Aktif sınıfını güncelle
            document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('nav-active'));
            link.classList.add('nav-active');
            
            // Eğer başka bir sayfadaysak ana sayfaya dön
            if (window.location.hash !== '#home' && window.location.hash !== '') {
                window.location.hash = '#home';
            }
        }
    });
});

// Arama Mantığı
const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
    );

    renderProducts(filtered);

    // Kategori aktifliğini temizle
    document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('nav-active'));
    
    // Eğer sonuç yoksa mesaj göster
    const grid = document.querySelector('.product-grid');
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-results">"${query}" ile eşleşen ürün bulunamadı.</div>`;
    }

    // Ana sayfaya dön
    if (window.location.hash !== '#home' && window.location.hash !== '') {
        window.location.hash = '#home';
    }
}

if (searchBtn) searchBtn.addEventListener('click', handleSearch);
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
}

const btt = document.getElementById('back-to-top');
window.onscroll = () => {
    if (window.scrollY > 300) btt.classList.add('show');
    else btt.classList.remove('show');
};
btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

document.addEventListener('DOMContentLoaded', init);
