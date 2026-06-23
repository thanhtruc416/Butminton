// Cart count
function getCartCount() { return parseInt(localStorage.getItem('cartCount') || '0'); }
document.addEventListener('DOMContentLoaded', () => { document.getElementById('cartCount').textContent = getCartCount(); });

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-a');
  const isOpen = answer.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(q => q.classList.remove('open'));

  // Open clicked (if it was closed)
  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  if (!name || !email) { alert('Vui lòng điền đầy đủ thông tin.'); return; }
  const btn = this.querySelector('.btn-submit');
  btn.textContent = '✓ Đã gửi!';
  btn.style.background = '#2e7d32';
  setTimeout(() => { btn.textContent = 'GỬI YÊU CẦU'; btn.style.background = ''; this.reset(); }, 2500);
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
