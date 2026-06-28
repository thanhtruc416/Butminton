(function () {
  // ---- FAQ data ----
  const FAQ = [
    {
      keys: ['giao hàng', 'ship', 'vận chuyển', 'nhận hàng', 'bao lâu'],
      answer: 'Butminton giao hàng nội thành <strong>TP.HCM</strong> trong <strong>2–4 giờ</strong>. Đặt trước 17h giao trong ngày, sau 17h giao sáng hôm sau. 🛵'
    },
    {
      keys: ['phí ship', 'phí giao', 'chi phí ship', 'bao nhiêu tiền ship'],
      answer: 'Phí ship nội thành TP.HCM: <strong>25.000–35.000đ</strong>. <br>Miễn phí ship cho đơn từ <strong>500.000đ</strong> trở lên! 🎉'
    },
    {
      keys: ['đổi trả', 'hoàn tiền', 'trả hàng', 'đổi hàng', 'bảo hành'],
      answer: 'Đổi trả miễn phí trong <strong>7 ngày</strong> nếu sản phẩm lỗi do nhà sản xuất hoặc không đúng mô tả. Sản phẩm phải còn nguyên tem. 🔄'
    },
    {
      keys: ['chính hãng', 'hàng thật', 'hàng giả', 'nguồn gốc', 'xuất xứ'],
      answer: 'Tất cả sản phẩm Butminton đều <strong>nhập khẩu chính ngạch</strong>, có chứng từ rõ ràng và kiểm tra chất lượng trước khi giao. ✅'
    },
    {
      keys: ['căng cước', 'cước', 'căng vợt', 'lực căng'],
      answer: 'Vợt được căng cước theo mức bạn chọn khi đặt hàng (<strong>10–14kg</strong>). Không chọn thì mặc định 10kg — phù hợp cho người mới. 🏸'
    },
    {
      keys: ['keychain', 'móc khóa', 'custom', 'tùy chỉnh', 'in tên'],
      answer: 'Hoàn toàn có thể tùy chỉnh keychain! Nhắn tin qua <strong>Facebook</strong> hoặc <strong>Instagram</strong> với thông tin muốn in để được tư vấn. 🔑'
    },
    {
      keys: ['liên hệ', 'tư vấn', 'nhắn tin', 'contact', 'hỗ trợ'],
      answer: 'Bạn có thể liên hệ Butminton qua:<br>📘 <strong>Facebook:</strong> Butminton Official<br>📸 <strong>Instagram:</strong> @butminton_2026<br>🎵 <strong>TikTok:</strong> @butminton'
    },
    {
      keys: ['giá', 'bao nhiêu', 'giá tiền', 'giá vợt', 'giá áo'],
      answer: 'Vợt từ <strong>550.000đ</strong>, áo thi đấu từ <strong>150.000đ</strong>, hộp cầu từ <strong>85.000đ</strong>, móc khóa từ <strong>45.000đ</strong>. Xem đầy đủ tại trang Sản phẩm nhé! 🛍️'
    },
    {
      keys: ['thanh toán', 'cod', 'chuyển khoản', 'trả tiền'],
      answer: 'Butminton hỗ trợ thanh toán <strong>COD (tiền mặt khi nhận hàng)</strong> và <strong>chuyển khoản ngân hàng</strong>. 💳'
    },
    {
      keys: ['vợt', 'racket', 'kumpoo', 'lasport'],
      answer: 'Butminton có nhiều dòng vợt như <strong>Kumpoo Plum Blossom</strong>, <strong>Lasport Flower Partner</strong>... Xem chi tiết tại trang Sản phẩm → danh mục Vợt cầu lông! 🏸'
    },
  ];

  const QUICK = [
    'Phí ship bao nhiêu?',
    'Đổi trả như thế nào?',
    'Hàng có chính hãng không?',
    'Căng cước như thế nào?',
    'Liên hệ tư vấn',
  ];

  // ---- Build UI ----
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = _cbBase() + 'asset/chatbot.css';
  document.head.appendChild(css);

  function _cbBase() {
    const scripts = document.querySelectorAll('script[src]');
    for (const s of scripts) {
      if (s.src.includes('chatbot.js')) {
        return s.src.replace('asset/chatbot.js', '');
      }
    }
    return '../';
  }

  const fab = document.createElement('button');
  fab.className = 'cb-fab';
  fab.title = 'Chat với Butminton';
  fab.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`;

  const win = document.createElement('div');
  win.className = 'cb-window';
  win.innerHTML = `
    <div class="cb-header">
      <div class="cb-header-avatar">🏸</div>
      <div class="cb-header-info">
        <strong>Butminton Assistant</strong>
        <span>Thường trả lời ngay</span>
      </div>
      <button class="cb-close" title="Đóng">✕</button>
    </div>
    <div class="cb-messages" id="cbMessages"></div>
    <div class="cb-quick-replies" id="cbQuick"></div>
    <div class="cb-input-row">
      <input class="cb-input" id="cbInput" type="text" placeholder="Nhập câu hỏi...">
      <button class="cb-send" id="cbSend">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(win);

  // ---- Logic ----
  let opened = false;

  function toggleChat() {
    opened = !opened;
    win.classList.toggle('open', opened);
    if (opened && document.getElementById('cbMessages').children.length === 0) {
      botMsg('Xin chào! Mình là trợ lý của <strong>Butminton</strong> 🏸<br>Mình có thể giúp gì cho bạn?');
      renderQuick();
    }
  }

  fab.addEventListener('click', toggleChat);
  win.querySelector('.cb-close').addEventListener('click', toggleChat);

  function botMsg(html) {
    const el = document.createElement('div');
    el.className = 'cb-msg bot';
    el.innerHTML = html;
    document.getElementById('cbMessages').appendChild(el);
    scrollBottom();
  }

  function userMsg(text) {
    const el = document.createElement('div');
    el.className = 'cb-msg user';
    el.textContent = text;
    document.getElementById('cbMessages').appendChild(el);
    scrollBottom();
  }

  function scrollBottom() {
    const m = document.getElementById('cbMessages');
    m.scrollTop = m.scrollHeight;
  }

  function renderQuick() {
    const qr = document.getElementById('cbQuick');
    qr.innerHTML = '';
    QUICK.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'cb-qr';
      btn.textContent = q;
      btn.addEventListener('click', () => handleInput(q));
      qr.appendChild(btn);
    });
  }

  function handleInput(text) {
    const q = text.trim();
    if (!q) return;
    document.getElementById('cbInput').value = '';
    document.getElementById('cbQuick').innerHTML = '';
    userMsg(q);

    const lower = q.toLowerCase();
    const match = FAQ.find(f => f.keys.some(k => lower.includes(k)));

    setTimeout(() => {
      if (match) {
        botMsg(match.answer);
      } else {
        botMsg('Mình chưa có câu trả lời cho câu hỏi này. Bạn vui lòng liên hệ trực tiếp qua <strong>Facebook</strong> hoặc <strong>Instagram @butminton_2026</strong> để được hỗ trợ nhé! 😊');
      }
      renderQuick();
    }, 400);
  }

  document.getElementById('cbSend').addEventListener('click', () => {
    handleInput(document.getElementById('cbInput').value);
  });
  document.getElementById('cbInput').addEventListener('keypress', e => {
    if (e.key === 'Enter') handleInput(e.target.value);
  });
})();
