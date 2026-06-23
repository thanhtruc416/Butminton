const FREE_SHIP_THRESHOLD = 500000;
const SHIP_FEE = 35000;

function renderCart() {
  const cart = getCart();
  const tbody = document.getElementById('cartBody');
  const emptyEl = document.getElementById('cartEmpty');
  const tableEl = document.querySelector('.cart-table');
  const continueEl = document.querySelector('.continue-shopping');

  if (cart.length === 0) {
    if (tableEl) tableEl.style.display = 'none';
    if (continueEl) continueEl.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'flex';
    updateTotals(0);
    return;
  }

  if (tableEl) tableEl.style.display = '';
  if (continueEl) continueEl.style.display = '';
  if (emptyEl) emptyEl.style.display = 'none';

  tbody.innerHTML = cart.map(item => `
    <tr class="cart-row" data-key="${item.key}" data-price="${item.price}">
      <td>
        <div class="cart-product">
          <div class="cart-prod-img"><img src="${item.img}" alt="${item.name}" onerror="this.parentElement.innerHTML='🏸'"></div>
          <div class="cart-prod-info">
            <strong>${item.name}</strong>
            ${item.option ? `<span>${item.option}</span>` : ''}
          </div>
        </div>
      </td>
      <td class="cart-price">${item.price.toLocaleString('vi-VN')}đ</td>
      <td class="cart-qty">
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(this,-1)">&#8722;</button>
          <input type="number" class="qty-input" value="${item.qty}" min="1" max="99">
          <button class="qty-btn" onclick="changeQty(this,1)">+</button>
        </div>
      </td>
      <td class="cart-total">${(item.price * item.qty).toLocaleString('vi-VN')}đ</td>
      <td><button class="delete-btn" onclick="removeItem(this)">&#10005;</button></td>
    </tr>
  `).join('');

  tbody.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('change', () => { syncCartFromDOM(); updateTotals(); });
  });

  updateTotals();
}

function syncCartFromDOM() {
  const cart = getCart();
  document.querySelectorAll('.cart-row').forEach(row => {
    const item = cart.find(c => c.key === row.dataset.key);
    if (item) item.qty = Math.max(1, parseInt(row.querySelector('.qty-input').value) || 1);
  });
  saveCart(cart);
}

function changeQty(btn, delta) {
  const input = btn.parentElement.querySelector('.qty-input');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  input.value = val;
  syncCartFromDOM();
  updateTotals();
}

function removeItem(btn) {
  const row = btn.closest('.cart-row');
  const key = row.dataset.key;
  row.style.opacity = '0';
  row.style.transition = 'opacity 0.25s';
  setTimeout(() => {
    cartRemove(key);
    renderCart();
  }, 250);
}

function updateTotals() {
  let subtotal = 0;
  document.querySelectorAll('.cart-row').forEach(row => {
    const price = parseInt(row.dataset.price);
    const qty = parseInt(row.querySelector('.qty-input').value) || 1;
    subtotal += price * qty;
    const cell = row.querySelector('.cart-total');
    if (cell) cell.textContent = (price * qty).toLocaleString('vi-VN') + 'đ';
  });

  const shipping = subtotal >= FREE_SHIP_THRESHOLD ? 0 : (subtotal === 0 ? 0 : SHIP_FEE);
  const grand = subtotal + shipping;

  const subtotalEl = document.getElementById('subtotal');
  const shippingEl = document.getElementById('shippingDisplay');
  const totalEl = document.getElementById('totalPrice');

  if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString('vi-VN') + 'đ';
  if (shippingEl) {
    if (subtotal === 0) {
      shippingEl.textContent = '—';
      shippingEl.className = '';
    } else {
      shippingEl.textContent = shipping === 0 ? 'Miễn phí' : shipping.toLocaleString('vi-VN') + 'đ';
      shippingEl.className = shipping === 0 ? 'freeship' : '';
    }
  }
  if (totalEl) totalEl.textContent = grand.toLocaleString('vi-VN') + 'đ';

  document.getElementById('cartCount').textContent = cartGetCount();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cartCount').textContent = cartGetCount();
  renderCart();
});

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
