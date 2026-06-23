document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cartCount').textContent = cartGetCount();
});

// Add to cart (featured products)
document.querySelectorAll('.btn-cart-add').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('.product-card');
    const viewLink = card.querySelector('.btn-view');
    const href = viewLink ? viewLink.getAttribute('href') : '';
    const id = href.includes('?id=') ? href.split('?id=')[1] : ('p-' + Date.now());
    const name = card.querySelector('h3').textContent.trim();
    const priceStr = card.querySelector('.price-now').textContent;
    const price = parseInt(priceStr.replace(/\./g, '').replace('đ', ''));
    const img = card.querySelector('img').getAttribute('src');

    cartAdd(id, name, price, img, '', 1);
    document.getElementById('cartCount').textContent = cartGetCount();

    const orig = this.textContent;
    this.textContent = '✓ Đã thêm!';
    this.style.cssText = 'background:#2e7d32;color:#fff;border:none';
    setTimeout(() => { this.textContent = orig; this.style.cssText = ''; }, 1500);
  });
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});

// Search redirect
document.querySelector('.search-wrap button').addEventListener('click', () => {
  const q = document.querySelector('.search-wrap input').value.trim();
  if (q) window.location.href = '../01_san-pham/index.html?q=' + encodeURIComponent(q);
});
document.querySelector('.search-wrap input').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) window.location.href = '../01_san-pham/index.html?q=' + encodeURIComponent(q);
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.why-card, .cat-card, .product-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
