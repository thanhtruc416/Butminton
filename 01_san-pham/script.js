// ---- State ----
const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let currentCat = 'all';
let currentSearch = '';

// ---- Helpers ----
const CAT_KEYWORDS = {
  'vot': 'vợt cầu lông set vợt racket',
  'ao': 'áo thể thao áo thi đấu',
  'quan': 'quần váy thể thao',
  'cau': 'hộp cầu lông shuttlecock cầu',
  'mockhoa': 'móc khóa keychain custom'
};

function getFilteredCards() {
  return Array.from(document.querySelectorAll('.product-card')).filter(c => {
    const catOk = currentCat === 'all' || c.dataset.cat === currentCat;
    const name = c.querySelector('h3').textContent.toLowerCase();
    const desc = c.querySelector('p') ? c.querySelector('p').textContent.toLowerCase() : '';
    const catKeywords = (CAT_KEYWORDS[c.dataset.cat] || '').toLowerCase();
    const searchOk = !currentSearch || name.includes(currentSearch) || desc.includes(currentSearch) || catKeywords.includes(currentSearch);
    return catOk && searchOk;
  });
}

function renderPage() {
  const all = Array.from(document.querySelectorAll('.product-card'));
  const visible = getFilteredCards();
  const totalPages = Math.max(1, Math.ceil(visible.length / ITEMS_PER_PAGE));
  if (currentPage > totalPages) currentPage = 1;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;

  all.forEach(c => c.style.display = 'none');
  visible.slice(start, start + ITEMS_PER_PAGE).forEach(c => c.style.display = '');

  const filterCount = document.querySelector('.filter-count');
  if (filterCount) {
    const showing = Math.min(ITEMS_PER_PAGE, visible.length - start);
    filterCount.textContent = `Hiển thị ${Math.max(0, showing)}/${visible.length} sản phẩm`;
  }

  buildPagination(totalPages);
}

function buildPagination(totalPages) {
  const container = document.querySelector('.pagination');
  if (!container) return;

  let html = `<button class="page-btn" id="prevBtn" ${currentPage === 1 ? 'disabled' : ''}>&#8592;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  html += `<button class="page-btn" id="nextBtn" ${currentPage === totalPages ? 'disabled' : ''}>&#8594;</button>`;
  container.innerHTML = html;

  container.querySelector('#prevBtn').addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderPage(); scrollToGrid(); }
  });
  container.querySelector('#nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderPage(); scrollToGrid(); }
  });
  container.querySelectorAll('.page-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page);
      renderPage();
      scrollToGrid();
    });
  });
}

function scrollToGrid() {
  const grid = document.querySelector('.products-section');
  if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- Sort ----
const originalCardOrder = Array.from(document.querySelectorAll('#productsGrid .product-card'));

function applySorting() {
  const sortSel = document.querySelectorAll('.filter-select')[1];
  if (!sortSel) return;
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const val = sortSel.value;

  if (val === 'Mới nhất') {
    originalCardOrder.forEach(c => grid.appendChild(c));
    return;
  }

  const cards = Array.from(grid.querySelectorAll('.product-card'));
  cards.sort((a, b) => {
    const pa = parseInt((a.querySelector('.price-now').textContent).replace(/\./g, '').replace('đ', '')) || 0;
    const pb = parseInt((b.querySelector('.price-now').textContent).replace(/\./g, '').replace('đ', '')) || 0;
    if (val === 'Giá tăng dần') return pa - pb;
    if (val === 'Giá giảm dần') return pb - pa;
    return 0;
  });
  cards.forEach(c => grid.appendChild(c));
}

document.querySelectorAll('.filter-select').forEach(sel => {
  sel.addEventListener('change', () => {
    currentPage = 1;
    applySorting();
    renderPage();
  });
});

// ---- Category tabs ----
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    currentCat = this.dataset.cat;
    currentSearch = '';
    const searchInput = document.querySelector('.search-wrap input');
    if (searchInput) searchInput.value = '';
    currentPage = 1;
    renderPage();
  });
});

// ---- Search (navbar) ----
function doSearch() {
  const q = document.querySelector('.search-wrap input').value.trim().toLowerCase();
  currentSearch = q;
  currentCat = 'all';
  currentPage = 1;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  const allTab = document.querySelector('.cat-tab[data-cat="all"]');
  if (allTab) allTab.classList.add('active');
  renderPage();
}

document.querySelector('.search-wrap button').addEventListener('click', doSearch);
document.querySelector('.search-wrap input').addEventListener('keypress', e => {
  if (e.key === 'Enter') doSearch();
});

// ---- Add to cart ----
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

// ---- Hamburger menu ----
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cartCount').textContent = cartGetCount();

  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  const urlQ = params.get('q');

  if (urlQ) {
    const searchInput = document.querySelector('.search-wrap input');
    if (searchInput) searchInput.value = urlQ;
    currentSearch = urlQ.toLowerCase();
    renderPage();
  } else if (urlCat) {
    const matchTab = document.querySelector(`.cat-tab[data-cat="${urlCat}"]`);
    if (matchTab) matchTab.click();
    else renderPage();
  } else {
    renderPage();
  }
});
