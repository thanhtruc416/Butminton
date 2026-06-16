// Product data dictionary
const PRODUCTS = {
  // VOT
  'flower-hong-white': {
    name: 'Lasport Flower Partner Hồng Trắng',
    badge: 'HOT',
    price: '550.000đ',
    oldPrice: '680.000đ',
    discount: '-19%',
    img: '../images/vot/racket-flower-hong-white.png',
    desc: 'Vợt thể hiện phong cách nữ tính với họa tiết hoa đặc trưng, khung carbon nguyên chất siêu nhẹ.',
    specs: ['Trọng lượng: 4U (80–84g)', 'Độ cứng: Medium', 'Vật liệu: 100% Carbon', 'Căng sẵn: 11kg'],
    type: 'vot'
  },
  'flower-xanh': {
    name: 'Lasport Flower Partner Xanh',
    badge: 'MỚI',
    price: '480.000đ',
    oldPrice: '600.000đ',
    discount: '-20%',
    img: '../images/vot/racket-flower-xanh.png',
    desc: 'Màu xanh trẻ trung năng động, phù hợp người chơi muốn nổi bật trên sân.',
    specs: ['Trọng lượng: 4U (80–84g)', 'Độ cứng: Medium', 'Vật liệu: 100% Carbon', 'Căng sẵn: 11kg'],
    type: 'vot'
  },
  'flower-hong-pink': {
    name: 'Lasport Flower Partner Hồng Đậm',
    badge: 'BEST SELLER',
    price: '620.000đ',
    oldPrice: '750.000đ',
    discount: '-17%',
    img: '../images/vot/racket-flower-hong-pink.png',
    desc: 'Phiên bản hồng đậm rực rỡ, sức mạnh và phong cách trong từng cú smash.',
    specs: ['Trọng lượng: 4U (80–84g)', 'Độ cứng: Medium-Stiff', 'Vật liệu: 100% Carbon', 'Căng sẵn: 12kg'],
    type: 'vot'
  },
  'flower-white': {
    name: 'Lasport Flower Partner Trắng',
    badge: 'MỚI',
    price: '500.000đ',
    oldPrice: '630.000đ',
    discount: '-21%',
    img: '../images/vot/racket-flower-white.png',
    desc: 'Phiên bản trắng tinh khôi, thanh lịch và dễ phối với mọi trang phục thi đấu.',
    specs: ['Trọng lượng: 4U (80–84g)', 'Độ cứng: Medium', 'Vật liệu: 100% Carbon', 'Căng sẵn: 10kg'],
    type: 'vot'
  },
  'kumpoo-jingzhou': {
    name: 'Kumpoo Jingzhou Pro',
    badge: 'CAO CẤP',
    price: '690.000đ',
    oldPrice: '850.000đ',
    discount: '-19%',
    img: '../images/vot/racket-kumpoo-jingzhou.png',
    desc: 'Dòng vợt chuyên nghiệp Kumpoo với công nghệ khung tốc độ cao, thiết kế tinh tế hiện đại.',
    specs: ['Trọng lượng: 4U (82g)', 'Độ cứng: Stiff', 'Vật liệu: High Modulus Carbon', 'Căng sẵn: 12kg'],
    type: 'vot'
  },
  'kumpoo-plum': {
    name: 'Kumpoo Plum Blossom',
    badge: 'BEST SELLER',
    price: '700.000đ',
    oldPrice: '880.000đ',
    discount: '-20%',
    img: '../images/vot/racket-kumpoo-plum.png',
    desc: 'Họa tiết hoa mai đặc trưng, công nghệ High Modulus Carbon cho lực đập vượt trội và cực kỳ bền.',
    specs: ['Trọng lượng: 4U (82g)', 'Độ cứng: Medium-Stiff', 'Vật liệu: High Modulus Carbon', 'Căng sẵn: 11kg'],
    type: 'vot'
  },
  // AO
  'ao-do-1': {
    name: 'Set thi đấu Yonex Navy',
    badge: 'HOT',
    price: '150.000đ',
    oldPrice: '199.000đ',
    discount: '-25%',
    img: '../images/ao/ao-thi-dau-do-1.png',
    desc: 'Bộ áo + quần Yonex, tay xanh navy cổ điển, vải thun mề thoáng nhiệt siêu nhẹ nhanh khô, in chuyển nhiệt siêu bền.',
    specs: ['Thương hiệu: Yonex', 'Chất liệu: Polyester Dry EX', 'Gồm: 1 áo + 1 quần', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-do-2': {
    name: 'Set thi đấu Yonex Hoa Văn',
    badge: 'MỚI',
    price: '199.000đ',
    oldPrice: '250.000đ',
    discount: '-20%',
    img: '../images/ao/ao-thi-dau-do-2.png',
    desc: 'Bộ áo + quần họa tiết hoa văn rực rỡ, in chuyển nhiệt siêu bền +1000 lần giặt, siêu nhẹ nhanh khô.',
    specs: ['Thương hiệu: Yonex', 'Chất liệu: Polyester Dry EX', 'Gồm: 1 áo + 1 quần', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-xanh-1': {
    name: 'Áo thi đấu Voltrix Hồng Hình Học',
    badge: 'MỚI',
    price: '120.000đ',
    oldPrice: '160.000đ',
    discount: '-25%',
    img: '../images/ao/ao-thi-dau-xanh-1.png',
    desc: 'Cổ tròn, họa tiết hình học hồng trắng nổi bật, chất liệu Polyester Voltrix co giãn 4 chiều thoáng mát.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-xanh-2': {
    name: 'Áo thi đấu Voltrix Xanh Mint',
    badge: 'MỚI',
    price: '169.000đ',
    oldPrice: '220.000đ',
    discount: '-23%',
    img: '../images/ao/ao-thi-dau-xanh-2.png',
    desc: 'Cổ tròn, họa tiết crystal xanh mint tươi mát, thấm hút mồ hôi vượt trội phù hợp tập luyện cường độ cao.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-trang': {
    name: 'Áo thi đấu Voltrix Chéo Pastel',
    badge: 'MỚI',
    price: '135.000đ',
    oldPrice: '180.000đ',
    discount: '-25%',
    img: '../images/ao/ao-thi-dau-trang.png',
    desc: 'Cổ V, họa tiết sọc chéo hồng xanh pastel, phối màu nhẹ nhàng cá tính, co giãn 4 chiều.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-den': {
    name: 'Áo thi đấu Voltrix Sóng Pastel',
    badge: 'MỚI',
    price: '180.000đ',
    oldPrice: '230.000đ',
    discount: '-22%',
    img: '../images/ao/ao-thi-dau-den.png',
    desc: 'Cổ V, họa tiết sóng chảy hồng xanh nhẹ nhàng, phối màu năng động thanh lịch.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'quan-do': {
    name: 'Áo thi đấu Voltrix Tím Hồng',
    badge: 'MỚI',
    price: '250.000đ',
    oldPrice: '310.000đ',
    discount: '-19%',
    img: '../images/ao/quan-cau-long-do.png',
    desc: 'Cổ V, tone tím hồng pastel gradient lãng mạn, dành cho người yêu phong cách nữ tính.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'quan-xanh': {
    name: 'Áo thi đấu Voltrix Xanh Gradient',
    badge: 'MỚI',
    price: '230.000đ',
    oldPrice: '290.000đ',
    discount: '-21%',
    img: '../images/ao/quan-cau-long-xanh.png',
    desc: 'Cổ V, gradient xanh biển tươi mát từ trắng xuống xanh đậm, logo Voltrix tinh tế.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'set-ao-quan': {
    name: 'Áo thi đấu Voltrix Hồng Camo',
    badge: 'HOT',
    price: '299.000đ',
    oldPrice: '380.000đ',
    discount: '-21%',
    img: '../images/ao/set-ao-quan-do.png',
    desc: 'Cổ V, họa tiết camo hồng trắng phá cách độc đáo, thể hiện cá tính riêng trên sân cầu.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  // MOC KHOA
  'mkhoa-xanh-la': {
    name: 'Móc khóa cầu lông xanh lá',
    badge: 'HANDMADE',
    price: '45.000đ',
    oldPrice: '60.000đ',
    discount: '-25%',
    img: '../images/mockhoa/moc-khoa-xanh-la.png',
    desc: 'Handmade len móc thủ công tỉ mỉ, màu xanh lá tươi mát, phụ kiện độc đáo dành riêng cho dân mê cầu lông.',
    specs: ['Chất liệu: Len móc handmade', 'Màu sắc: Xanh lá + trắng', 'Phụ kiện: Vòng móc len', 'Quà tặng: Ý nghĩa'],
    type: 'mockhoa'
  },
  'mkhoa-hong-do': {
    name: 'Móc khóa cầu lông hồng đỏ',
    badge: 'HANDMADE',
    price: '40.000đ',
    oldPrice: '55.000đ',
    discount: '-27%',
    img: '../images/mockhoa/moc-khoa-hong-do.png',
    desc: 'Handmade len móc thủ công, tông hồng đỏ nổi bật dễ thương, cá tính riêng không trùng với ai.',
    specs: ['Chất liệu: Len móc handmade', 'Màu sắc: Hồng đỏ + trắng', 'Phụ kiện: Vòng móc hồng', 'Quà tặng: Ý nghĩa'],
    type: 'mockhoa'
  },
  'mkhoa-pastel': {
    name: 'Móc khóa cầu lông Pastel 3 màu',
    badge: 'HOT',
    price: '55.000đ',
    oldPrice: '70.000đ',
    discount: '-21%',
    img: '../images/mockhoa/moc-khoa-pastel.png',
    desc: 'Phối 3 màu xanh – trắng – hồng pastel nhẹ nhàng lãng mạn, phong cách nữ tính cực kỳ đáng yêu.',
    specs: ['Chất liệu: Len móc handmade', 'Màu sắc: Xanh + trắng + hồng pastel', 'Phụ kiện: Vòng móc hồng', 'Quà tặng: Ý nghĩa'],
    type: 'mockhoa'
  },
  'mkhoa-den-hong': {
    name: 'Móc khóa cầu lông HH15 Đen Hồng',
    badge: 'HOT',
    price: '50.000đ',
    oldPrice: '65.000đ',
    discount: '-23%',
    img: '../images/mockhoa/moc-khoa-hh15-den-hong.png',
    desc: 'Heaven Handmade HH15, viền đen phối hồng trắng sang trọng, kèm khoen bạc inox cao cấp.',
    specs: ['Thương hiệu: Heaven Handmade', 'Model: HH15', 'Màu sắc: Đen + hồng + trắng', 'Khoen: Bạc inox'],
    type: 'mockhoa'
  },
  'mkhoa-xanh-dam': {
    name: 'Móc khóa cầu lông HH04 Xanh Dương',
    badge: 'MỚI',
    price: '50.000đ',
    oldPrice: '65.000đ',
    discount: '-23%',
    img: '../images/mockhoa/moc-khoa-hh04-xanh.png',
    desc: 'Heaven Handmade HH04, gradient xanh dương đến navy đẹp mắt, khoen bạc inox cao cấp bền đẹp.',
    specs: ['Thương hiệu: Heaven Handmade', 'Model: HH04', 'Màu sắc: Xanh gradient', 'Khoen: Bạc inox'],
    type: 'mockhoa'
  },
  'mkhoa-hong-vot': {
    name: 'Móc khóa cầu lông hồng kèm vợt mini',
    badge: 'ĐỘC ĐÁO',
    price: '60.000đ',
    oldPrice: '75.000đ',
    discount: '-20%',
    img: '../images/mockhoa/moc-khoa-hong-vot.png',
    desc: 'Set móc khóa cầu hồng pastel + vợt mini đi kèm, quà tặng cực kỳ ý nghĩa và độc đáo cho dân cầu lông.',
    specs: ['Chất liệu: Len + vợt mini', 'Màu sắc: Hồng pastel', 'Bộ gồm: Cầu + vợt mini', 'Quà tặng: Siêu ý nghĩa'],
    type: 'mockhoa'
  },
  // CAU LONG
  'haiyen-outdoor': {
    name: 'Cầu lông Hải Yến Outdoor',
    badge: 'PHỔ BIẾN',
    price: '180.000đ',
    oldPrice: '220.000đ',
    discount: '-18%',
    img: '../images/hopcau/cau-haiyen-outdoor.png',
    desc: 'Cầu lông lông vũ thật dành cho sân ngoài trời, độ bền tốt, bay ổn định trong điều kiện gió nhẹ.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Loại: Outdoor', 'Chất liệu: Lông vũ thật'],
    type: 'cau'
  },
  'haiyen-hyya': {
    name: 'Cầu lông Hải Yến HYYA Hồng',
    badge: 'HOT',
    price: '250.000đ',
    oldPrice: '300.000đ',
    discount: '-17%',
    img: '../images/hopcau/cau-haiyen-hyya-hong.png',
    desc: 'Dòng cầu HYYA ống hồng nổi bật, lông vũ tuyển chọn kỹ lưỡng, đường cầu ổn định tốc độ chuẩn.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Model: HYYA', 'Made in Vietnam'],
    type: 'cau'
  },
  'haiyen-hytec-s90-1': {
    name: 'Cầu lông Hải Yến Hytec S-90 3in1',
    badge: 'MỚI',
    price: '280.000đ',
    oldPrice: '340.000đ',
    discount: '-18%',
    img: '../images/hopcau/cau-haiyen-hytec-s90-1.png',
    desc: '3 tốc độ trong 1 ống, lông tuyển chọn ít gãy, tốc độ chuẩn – chính xác, đường cầu ổn định cảm giác tốt.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Model: Hytec S-90 3in1', 'Độ bền vượt trội'],
    type: 'cau'
  },
  'haiyen-s80-toc3': {
    name: 'Cầu lông Hải Yến S-80 Tournament Tốc 3',
    badge: 'TỐC 3',
    price: '215.000đ',
    oldPrice: '260.000đ',
    discount: '-17%',
    img: '../images/hopcau/cau-haiyen-s80-toc3.png',
    desc: 'Tournament cao cấp tốc độ 3, phù hợp sân điều hòa mát, lông vũ bền chắc dành cho thi đấu chuyên nghiệp.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Model: S-80 Tournament', 'Tốc độ: 3'],
    type: 'cau'
  },
  'haiyen-s70': {
    name: 'Cầu lông Hải Yến S-70 Competition',
    badge: 'CHÍNH HÃNG',
    price: '195.000đ',
    oldPrice: '240.000đ',
    discount: '-19%',
    img: '../images/hopcau/cau-haiyen-s70.png',
    desc: 'Dòng competition ống đen tím sang trọng, đường cầu chuẩn xác, độ bền cao, dùng trong thi đấu.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Model: S-70 Competition', 'Ống màu: Đen tím'],
    type: 'cau'
  },
  'haiyen-s80': {
    name: 'Cầu lông Hải Yến S-80 Tournament',
    badge: 'PHỔ BIẾN',
    price: '220.000đ',
    oldPrice: '270.000đ',
    discount: '-19%',
    img: '../images/hopcau/cau-haiyen-s80.png',
    desc: 'Dòng tournament bán chạy nhất của Hải Yến, cân bằng hoàn hảo giữa độ bền và tốc độ bay cầu.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Model: S-80 Tournament', 'Made in Vietnam'],
    type: 'cau'
  },
  'haiyen-hytec-s90-2': {
    name: 'Cầu lông Hải Yến Hytec S-90 Xanh',
    badge: 'MỚI',
    price: '270.000đ',
    oldPrice: '320.000đ',
    discount: '-16%',
    img: '../images/hopcau/cau-haiyen-hytec-s90-2.png',
    desc: 'Ống xanh nổi bật, độ bền vượt trội ít gãy lông, chất liệu lông tuyển chọn, đường cầu ổn định cảm giác tốt.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Model: Hytec S-90', 'Ống màu: Xanh dương'],
    type: 'cau'
  },
  'haiyen-xanh-12': {
    name: 'Cầu lông Hải Yến Xanh 12 Quả',
    badge: 'GIÁ TỐT',
    price: '185.000đ',
    oldPrice: '225.000đ',
    discount: '-18%',
    img: '../images/hopcau/cau-haiyen-xanh-12.png',
    desc: 'Ống 12 quả lông vũ chính hãng Hải Yến, phù hợp tập luyện hàng ngày, giá tốt chất lượng ổn định.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Ống màu: Xanh dương', 'Dùng cho: Tập luyện'],
    type: 'cau'
  },
  'haiyen-do-12': {
    name: 'Cầu lông Hải Yến Đỏ 12 Quả',
    badge: 'GIÁ TỐT',
    price: '190.000đ',
    oldPrice: '230.000đ',
    discount: '-17%',
    img: '../images/hopcau/cau-haiyen-do-12.png',
    desc: 'Ống đỏ truyền thống Hải Yến, lông vũ trắng mịn đều, phù hợp tập luyện và thi đấu phong trào.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Ống màu: Đỏ', 'Dùng cho: Tập & thi đấu'],
    type: 'cau'
  },
  'haiyen-soc-xanh': {
    name: 'Cầu lông Hải Yến Sọc Xanh 12 PSC',
    badge: 'HOT',
    price: '200.000đ',
    oldPrice: '245.000đ',
    discount: '-18%',
    img: '../images/hopcau/cau-haiyen-soc-xanh.png',
    desc: 'Ống sọc xanh cổ điển đặc trưng, 12 quả/ống, dùng trong luyện tập và thi đấu phong trào.',
    specs: ['Thương hiệu: Hải Yến', 'Số lượng: 12 quả/ống', 'Model: Badminton Classic', 'Ống màu: Sọc xanh'],
    type: 'cau'
  }
};

// Load product data from URL param
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cartCount').textContent = cartGetCount();

  const id = new URLSearchParams(window.location.search).get('id');
  if (id && PRODUCTS[id]) {
    const p = PRODUCTS[id];

    // Main image
    document.getElementById('mainImg').src = p.img;
    document.getElementById('mainImg').alt = p.name;

    // Thumbnails — show same image in all slots
    document.querySelectorAll('.thumb').forEach(t => { t.src = p.img; t.alt = p.name; });

    // Title & page title
    document.querySelector('.detail-info h1').textContent = p.name;
    document.title = p.name + ' - Butminton';

    // Badge
    const badge = document.querySelector('.prod-badge-label');
    if (badge) badge.textContent = p.badge;

    // Price
    document.querySelector('.price-now').textContent = p.price;
    document.querySelector('.price-old').textContent = p.oldPrice;
    const discTag = document.querySelector('.discount-tag');
    if (discTag) discTag.textContent = p.discount;

    // Description & specs
    const quoteP = document.querySelector('.prod-quote p em');
    if (quoteP) quoteP.textContent = p.desc;
    const specsList = document.querySelector('.prod-quote ul');
    if (specsList) {
      specsList.innerHTML = p.specs.map(s => '<li>' + s + '</li>').join('');
    }

    // Breadcrumb
    const bcSpan = document.querySelector('.breadcrumb span');
    if (bcSpan) bcSpan.textContent = p.name;

    // Options: for clothes show size selector, for rackets show string tension
    const optionsSection = document.querySelector('.options-section');
    if (optionsSection) {
      if (p.type === 'ao') {
        optionsSection.innerHTML = `
          <div class="option-group">
            <label>Chọn size</label>
            <select class="option-select">
              <option>S</option><option selected>M</option><option>L</option><option>XL</option><option>XXL</option>
            </select>
          </div>`;
      } else if (p.type === 'vot') {
        optionsSection.innerHTML = `
          <div class="option-group">
            <label>Chọn mức căng cước</label>
            <select class="option-select">
              <option>10 kg (Mặc định)</option><option>11 kg</option><option>12 kg</option><option>13 kg</option><option>14 kg</option>
            </select>
          </div>
          <div class="option-group">
            <label>Màu quấn cán</label>
            <select class="option-select">
              <option>Đỏ San Hô</option><option>Đen</option><option>Xanh dương</option><option>Trắng</option>
            </select>
          </div>`;
      } else if (p.type === 'cau') {
        optionsSection.innerHTML = `
          <div class="option-group">
            <label>Chọn tốc độ cầu</label>
            <select class="option-select">
              <option>Tốc 1 (Nhanh – sân lạnh)</option><option selected>Tốc 2 (Trung bình)</option><option>Tốc 3 (Chậm – sân nóng)</option>
            </select>
          </div>`;
      } else {
        optionsSection.innerHTML = '';
      }
    }

    // Related products: same type first, fill with others if needed
    const relatedGrid = document.getElementById('relatedGrid');
    if (relatedGrid) {
      const allKeys = Object.keys(PRODUCTS);
      const sameType = allKeys.filter(k => k !== id && PRODUCTS[k].type === p.type);
      const otherType = allKeys.filter(k => k !== id && PRODUCTS[k].type !== p.type);
      const picks = sameType.slice(0, 4);
      if (picks.length < 4) picks.push(...otherType.slice(0, 4 - picks.length));
      relatedGrid.innerHTML = picks.map(k => {
        const r = PRODUCTS[k];
        return `<div class="product-card">
          <div class="prod-img-wrap"><img src="${r.img}" alt="${r.name}"></div>
          <div class="prod-info">
            <h3>${r.name}</h3>
            <div class="prod-price"><span class="price-now">${r.price}</span></div>
            <div class="prod-btns"><a href="index.html?id=${k}" class="btn-view">Xem thêm</a></div>
          </div>
        </div>`;
      }).join('');
    }
  }
});

// Cart count display (cartAdd/getCart come from ../asset/cart.js)

// Thumbnail switching
function setMain(thumb) {
  document.getElementById('mainImg').src = thumb.src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// Quantity
function changeDetailQty(delta) {
  const input = document.getElementById('detailQty');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
}

// Add to cart
function addToCartDetail() {
  const id = new URLSearchParams(window.location.search).get('id');
  const p = id && PRODUCTS[id] ? PRODUCTS[id] : null;
  const qty = parseInt(document.getElementById('detailQty').value) || 1;

  if (p) {
    const optSelects = document.querySelectorAll('.option-select');
    const option = Array.from(optSelects).map(s => s.value).filter(Boolean).join(' · ');
    const price = parseInt(p.price.replace(/\./g, '').replace('đ', ''));
    cartAdd(id, p.name, price, p.img, option, qty);
  }

  document.getElementById('cartCount').textContent = cartGetCount();
  const btn = document.querySelector('.btn-add-cart');
  const orig = btn.textContent;
  btn.textContent = '✓ Đã thêm vào giỏ!';
  btn.style.background = '#2e7d32';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1800);
}

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});
