// Cart count
function getCartCount() { return parseInt(localStorage.getItem('cartCount') || '0'); }
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cartCount').textContent = getCartCount();
  renderBlog();
});

// Blog pagination + category filtering
const POSTS_PER_PAGE = 4;
let currentPage = 1;
let currentCat = 'all';

function renderBlog() {
  const allCards = Array.from(document.querySelectorAll('.blog-card'));
  const visible = allCards.filter(c => currentCat === 'all' || c.dataset.cat === currentCat);
  const totalPages = Math.max(1, Math.ceil(visible.length / POSTS_PER_PAGE));

  allCards.forEach(c => c.style.display = 'none');
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  visible.slice(start, start + POSTS_PER_PAGE).forEach(c => c.style.display = '');

  const pageBtns = document.querySelectorAll('.page-btn');
  pageBtns.forEach((btn, i) => {
    btn.style.display = i < totalPages ? '' : 'none';
    btn.classList.toggle('active', i + 1 === currentPage);
  });
}

// Category tabs
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    currentCat = this.dataset.cat;
    currentPage = 1;
    renderBlog();
  });
});

// Pagination buttons
document.querySelectorAll('.page-btn').forEach((btn, i) => {
  btn.addEventListener('click', function () {
    currentPage = i + 1;
    renderBlog();
    document.querySelector('.blog-posts').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  if (e.key === 'Enter') { const q = e.target.value.trim(); if (q) window.location.href = '../01_san-pham/index.html?q=' + encodeURIComponent(q); }
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.querySelector('button').addEventListener('click', () => {
    const input = newsletterForm.querySelector('input');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.value.trim()) {
      input.focus();
    } else if (!emailRegex.test(input.value.trim())) {
      alert('Vui lòng nhập địa chỉ email hợp lệ.');
      input.focus();
    } else {
      alert('Cảm ơn bạn đã đăng ký nhận tin từ Butminton! 🏸');
      input.value = '';
    }
  });
}
