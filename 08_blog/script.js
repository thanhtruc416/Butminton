// Cart count
function getCartCount() { return parseInt(localStorage.getItem('cartCount') || '0'); }
document.addEventListener('DOMContentLoaded', () => { document.getElementById('cartCount').textContent = getCartCount(); });

// Category tab filtering
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const cat = this.dataset.cat;
    document.querySelectorAll('.blog-card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.querySelector('button').addEventListener('click', () => {
    const input = newsletterForm.querySelector('input');
    if (input.value.trim()) {
      alert('Cảm ơn bạn đã đăng ký nhận tin từ Butminton! 🏸');
      input.value = '';
    }
  });
}
