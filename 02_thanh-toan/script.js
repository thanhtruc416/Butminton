const FREE_SHIP_THRESHOLD = 500000;
const SHIP_FEE = 35000;
const COUPON_DISCOUNT = 50000;
let couponApplied = false;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cartCount').textContent = cartGetCount();
  loadCheckoutSummary();
});

function loadCheckoutSummary() {
  const subtotal = cartGetSubtotal();
  const shipping = subtotal >= FREE_SHIP_THRESHOLD ? 0 : (subtotal === 0 ? 0 : SHIP_FEE);
  const grand = subtotal + shipping;

  const subtotalEl = document.getElementById('subtotalBottom');
  const shippingEl = document.getElementById('shippingBottom');
  const totalEl = document.getElementById('totalPrice');

  if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString('vi-VN') + 'đ';
  if (shippingEl) {
    if (subtotal === 0) {
      shippingEl.textContent = '—';
      shippingEl.style.color = '';
    } else if (shipping === 0) {
      shippingEl.textContent = 'Miễn phí';
      shippingEl.style.color = '#2e7d32';
    } else {
      shippingEl.textContent = shipping.toLocaleString('vi-VN') + 'đ';
      shippingEl.style.color = '';
    }
  }
  if (totalEl) totalEl.textContent = grand.toLocaleString('vi-VN') + 'đ';
}

// Payment method selection
document.querySelectorAll('.payment-card').forEach(card => {
  card.addEventListener('click', function () {
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Coupon apply
function applyCoupon() {
  const val = document.getElementById('couponInput').value.trim().toUpperCase();
  const ok = document.getElementById('couponSuccess');
  const err = document.getElementById('couponMsg');
  const discountRow = document.getElementById('discountRow');
  const totalEl = document.getElementById('totalPrice');

  if (val === 'BUTMINTON24' && !couponApplied) {
    ok.style.display = 'inline';
    if (err) err.style.display = 'none';
    if (discountRow) discountRow.style.display = 'flex';
    const subtotal = cartGetSubtotal();
    const shipping = subtotal >= FREE_SHIP_THRESHOLD ? 0 : SHIP_FEE;
    const grand = subtotal + shipping - COUPON_DISCOUNT;
    if (totalEl) totalEl.textContent = Math.max(0, grand).toLocaleString('vi-VN') + 'đ';
    couponApplied = true;
  } else if (couponApplied) {
    ok.style.display = 'inline';
  } else {
    if (err) { err.textContent = '✕ Mã giảm giá không hợp lệ.'; err.style.display = 'block'; }
    setTimeout(() => { if (err) err.style.display = 'none'; }, 2500);
  }
}

// Form submit / order
function submitOrder() {
  const form = document.getElementById('checkoutForm');
  const inputs = form.querySelectorAll('[required]');
  let valid = true;
  inputs.forEach(inp => {
    if (!inp.value.trim()) { inp.style.borderColor = '#e85454'; valid = false; }
    else { inp.style.borderColor = ''; }
  });
  if (!valid) { showErrorToast('Vui lòng điền đầy đủ thông tin giao hàng.'); return; }
  saveCart([]);
  document.getElementById('cartCount').textContent = '0';
  document.getElementById('orderModal').classList.add('open');
}

function closeOrderModal() {
  window.location.href = '../03_trang-chu/index.html';
}

function showErrorToast(msg) {
  let toast = document.getElementById('errorToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'errorToast';
    toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#c62828;color:#fff;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;z-index:2000;box-shadow:0 4px 16px rgba(0,0,0,.2);';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});
