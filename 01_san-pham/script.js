document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cartCount').textContent = cartGetCount();
});

// Category tab filtering
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const cat = this.dataset.cat;
    document.querySelectorAll('.product-card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Pagination
document.querySelectorAll('.page-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.disabled || this.id === 'prevBtn' || this.id === 'nextBtn') return;
    document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Add to cart
function addToCart(btn) {
  const card = btn.closest('.product-card');
  const viewLink = card.querySelector('.btn-view');
  const href = viewLink ? viewLink.getAttribute('href') : '';
  const id = href.includes('?id=') ? href.split('?id=')[1] : ('p-' + Date.now());
  const name = card.querySelector('h3').textContent.trim();
  const priceStr = card.querySelector('.price-now').textContent;
  const price = parseInt(priceStr.replace(/\./g, '').replace('đ', ''));
  const img = card.querySelector('img').getAttribute('src');

  cartAdd(id, name, price, img, '', 1);
  document.getElementById('cartCount').textContent = cartGetCount();

  const orig = btn.textContent;
  btn.textContent = '✓ Đã thêm!';
  btn.style.cssText = 'background:#2e7d32;border-color:#2e7d32;color:#fff';
  setTimeout(() => { btn.textContent = orig; btn.style.cssText = ''; }, 1500);
}

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});
