// Cart count
function getCartCount() { return parseInt(localStorage.getItem('cartCount') || '0'); }
document.addEventListener('DOMContentLoaded', () => { document.getElementById('cartCount').textContent = getCartCount(); });

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

// Animate team members on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; } });
}, { threshold: 0.1 });

document.querySelectorAll('.team-member, .value-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'scale(0.92)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});
