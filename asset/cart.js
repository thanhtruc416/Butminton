// Shared cart utility — included in all pages via <script src="../asset/cart.js">
function getCart() {
  try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartCount', cart.reduce((s, i) => s + i.qty, 0));
}
function cartAdd(id, name, price, img, option, qty) {
  const cart = getCart();
  const key = id + (option ? '__' + option : '');
  const ex = cart.find(c => c.key === key);
  if (ex) { ex.qty += (qty || 1); }
  else { cart.push({ key, id, name, price, img, option: option || '', qty: qty || 1 }); }
  saveCart(cart);
}
function cartRemove(key) {
  saveCart(getCart().filter(c => c.key !== key));
}
function cartGetCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
function cartGetSubtotal() { return getCart().reduce((s, i) => s + i.price * i.qty, 0); }
