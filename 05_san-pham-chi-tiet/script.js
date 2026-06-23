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
    name: 'Quần cầu lông Voltrix Hồng Rực',
    badge: 'MỚI',
    price: '250.000đ',
    oldPrice: '310.000đ',
    discount: '-19%',
    img: '../images/ao/quan-preview3.jpg',
    desc: 'Vải thun lạnh co giãn 4 chiều, tone hồng magenta nổi bật, cạp thun thoải mái, thoát mồ hôi nhanh trên sân cầu.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-xanh': {
    name: 'Quần cầu lông Voltrix Trắng Xanh',
    badge: 'MỚI',
    price: '230.000đ',
    oldPrice: '290.000đ',
    discount: '-21%',
    img: '../images/ao/q-prev-a.jpg',
    desc: 'Vải lưới cao cấp thoáng khí, màu trắng phối viền xanh navy thể thao, co giãn thoải mái trong từng pha di chuyển.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester lưới cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
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
  },
  'ao-nam-do-trang': {
    name: 'Áo Thi Đấu Nam Đỏ Trắng',
    badge: 'HOT',
    price: '280.000đ',
    oldPrice: '350.000đ',
    discount: '-20%',
    img: '../images/ao/p-8774467.jpg',
    desc: 'Jersey thi đấu chuẩn tournament, vải thun lạnh chống tia UV, cổ tròn thoải mái, phù hợp thi đấu chuyên nghiệp.',
    specs: ['Thương hiệu: Blibli Sport', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-voltrix-do': {
    name: 'Áo Thi Đấu Voltrix Đỏ Nam',
    badge: 'MỚI',
    price: '250.000đ',
    oldPrice: '320.000đ',
    discount: '-22%',
    img: '../images/ao/p-8713604.jpg',
    desc: 'Cổ tròn, màu đỏ rực thi đấu chuyên nghiệp, vải polyester siêu nhẹ thoáng khí, thoát mồ hôi cực nhanh.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-nam-den-hong': {
    name: 'Áo Thi Đấu Nam Đen Hồng',
    badge: 'HOT',
    price: '290.000đ',
    oldPrice: '370.000đ',
    discount: '-22%',
    img: '../images/ao/p-8796050.jpg',
    desc: 'Jersey đen viền hồng magenta cá tính, vải thun lạnh co giãn 4 chiều, thoát mồ hôi nhanh trên sân.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'ao-nu-tim-yonex': {
    name: 'Áo Thi Đấu Nữ Tím Yonex',
    badge: 'MỚI',
    price: '195.000đ',
    oldPrice: '250.000đ',
    discount: '-22%',
    img: '../images/ao/p-19902436.jpg',
    desc: 'Áo nữ tím grape chính hãng Yonex, cổ tròn nhẹ nhàng, co giãn 4 chiều đỉnh cao, phù hợp thi đấu lẫn tập luyện.',
    specs: ['Thương hiệu: Yonex', 'Chất liệu: Polyester', 'Co giãn: 4 chiều', 'Size: XS / S / M / L / XL'],
    type: 'ao'
  },
  'ao-nam-yonex-den': {
    name: 'Áo Thể Thao Nam Yonex Đen',
    badge: 'MỚI',
    price: '220.000đ',
    oldPrice: '280.000đ',
    discount: '-21%',
    img: '../images/ao/p-17742425.jpg',
    desc: 'Áo nam đen Yonex thiết kế tối giản, vải cool dry siêu thoáng, phù hợp cả tập luyện lẫn thi đấu phong trào.',
    specs: ['Thương hiệu: Yonex', 'Chất liệu: Cool Dry', 'Co giãn: 2 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'ao'
  },
  'vay-trang-hong': {
    name: 'Váy Cầu Lông Nữ Trắng Hồng',
    badge: 'MỚI',
    price: '210.000đ',
    oldPrice: '270.000đ',
    discount: '-22%',
    img: '../images/ao/quan-preview2.jpg',
    desc: 'Váy thể thao crinkle trắng, trong lót quần hồng, kiểu dáng trẻ trung nữ tính, co giãn thoải mái.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester crinkle', 'Co giãn: 4 chiều', 'Size: S / M / L / XL'],
    type: 'quan'
  },
  'quan-nam-den': {
    name: 'Quần Thể Thao Nam Đen',
    badge: 'HOT',
    price: '230.000đ',
    oldPrice: '290.000đ',
    discount: '-21%',
    img: '../images/ao/s-33417688.jpg',
    desc: 'Quần đen co giãn 4 chiều, vải khô nhanh thoát mồ hôi, dáng slim phù hợp tập luyện cường độ cao.',
    specs: ['Thương hiệu: Sportswear', 'Chất liệu: Polyester khô nhanh', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-navy-tui': {
    name: 'Quần Thể Thao Navy Túi Điện Thoại',
    badge: 'MỚI',
    price: '270.000đ',
    oldPrice: '340.000đ',
    discount: '-21%',
    img: '../images/ao/s-33417698.jpg',
    desc: 'Quần navy xanh đậm có túi bên hông đựng điện thoại tiện lợi, lớp short bên trong chống lộ khi vận động.',
    specs: ['Thương hiệu: Sportswear Pro', 'Chất liệu: Polyester/Spandex', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-all-black': {
    name: 'Quần Thể Thao All Black',
    badge: 'MỚI',
    price: '245.000đ',
    oldPrice: '310.000đ',
    discount: '-21%',
    img: '../images/ao/s-33417701.jpg',
    desc: 'Quần đen tối giản phong cách all-black, vải thun lạnh cao cấp, dáng thẳng thoải mái trong mọi tình huống.',
    specs: ['Thương hiệu: Sportswear Pro', 'Chất liệu: Thun lạnh cao cấp', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-nam-xanh': {
    name: 'Quần Thể Thao Nam Xanh Dương',
    badge: 'HOT',
    price: '210.000đ',
    oldPrice: '265.000đ',
    discount: '-21%',
    img: '../images/ao/s-5547137.jpg',
    desc: 'Quần xanh dương nổi bật, vải lưới thoáng khí, thiết kế gọn nhẹ phù hợp cầu lông và chạy bộ.',
    specs: ['Thương hiệu: Sportswear', 'Chất liệu: Polyester mesh', 'Co giãn: 2 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-bike-short': {
    name: 'Quần Bike Short Nữ Đen',
    badge: 'MỚI',
    price: '195.000đ',
    oldPrice: '250.000đ',
    discount: '-22%',
    img: '../images/ao/s-6283570.jpg',
    desc: 'Quần bike short ôm sát đen, co giãn 4 chiều, thoáng khí, phù hợp tập gym và cầu lông nhẹ nhàng.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Spandex cao cấp', 'Co giãn: 4 chiều', 'Size: XS / S / M / L / XL'],
    type: 'quan'
  },
  'quan-nu-den-ngan': {
    name: 'Quần Thể Thao Nữ Đen Ngắn',
    badge: 'MỚI',
    price: '185.000đ',
    oldPrice: '240.000đ',
    discount: '-23%',
    img: '../images/ao/s-2694942.jpg',
    desc: 'Quần nữ đen ngắn thể thao, lưng thun cao co giãn êm, thiết kế gọn đẹp linh hoạt trên sân.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester cao cấp', 'Co giãn: 4 chiều', 'Size: XS / S / M / L / XL'],
    type: 'quan'
  },
  'quan-chay-bo-den': {
    name: 'Quần Chạy Bộ Nam Đen',
    badge: 'MỚI',
    price: '220.000đ',
    oldPrice: '275.000đ',
    discount: '-20%',
    img: '../images/ao/s-4803915.jpg',
    desc: 'Quần chạy bộ đen dáng slim, vải cool-dry thoát nhiệt nhanh, phù hợp mọi cường độ vận động ngoài trời.',
    specs: ['Thương hiệu: Sportswear', 'Chất liệu: Cool-Dry Polyester', 'Co giãn: 4 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-nu-xanh': {
    name: 'Quần Thể Thao Nữ Xanh Dương',
    badge: 'HOT',
    price: '200.000đ',
    oldPrice: '255.000đ',
    discount: '-22%',
    img: '../images/ao/s-7787912.jpg',
    desc: 'Quần nữ xanh dương viền trắng phong cách retro, vải co giãn thoải mái khi di chuyển trên sân.',
    specs: ['Thương hiệu: Voltrix', 'Chất liệu: Polyester co giãn', 'Co giãn: 4 chiều', 'Size: XS / S / M / L / XL'],
    type: 'quan'
  },
  'quan-soc-mau': {
    name: 'Quần Thể Thao Nam Sọc Màu',
    badge: 'MỚI',
    price: '215.000đ',
    oldPrice: '270.000đ',
    discount: '-20%',
    img: '../images/ao/s-7188071.jpg',
    desc: 'Quần sọc ngang nhiều màu cá tính, vải thun nhẹ thoáng khí, phong cách sporty nổi bật trên sân.',
    specs: ['Thương hiệu: Sportswear', 'Chất liệu: Polyester nhẹ', 'Co giãn: 2 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-ke-soc': {
    name: 'Quần Cầu Lông Kẻ Sọc Đen Trắng',
    badge: 'MỚI',
    price: '220.000đ',
    oldPrice: '280.000đ',
    discount: '-21%',
    img: '../images/ao/q-prev-d.jpg',
    desc: 'Quần kẻ sọc đen trắng cá tính, vải cotton-blend thoải mái, phong cách retro-sport độc đáo.',
    specs: ['Thương hiệu: Sportswear', 'Chất liệu: Cotton-Polyester blend', 'Co giãn: 2 chiều', 'Size: S / M / L / XL / XXL'],
    type: 'quan'
  },
  'quan-tre-em-yonex': {
    name: 'Quần Cầu Lông Trẻ Em Yonex',
    badge: 'MỚI',
    price: '165.000đ',
    oldPrice: '210.000đ',
    discount: '-21%',
    img: '../images/ao/p-35647221.jpg',
    desc: 'Quần trẻ em bền đẹp chính hãng Yonex, vải thoáng mát co giãn, phù hợp bé 8–15 tuổi tập luyện cầu lông.',
    specs: ['Thương hiệu: Yonex', 'Chất liệu: Cool-Dry', 'Co giãn: 2 chiều', 'Size: S / M / L (trẻ em)'],
    type: 'quan'
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

    // Thumbnails — only show 1 (single image per product), hide the rest
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((t, i) => {
      if (i === 0) { t.src = p.img; t.alt = p.name; t.classList.add('active'); }
      else t.style.display = 'none';
    });

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

// Search redirect
document.querySelector('.search-wrap button').addEventListener('click', () => {
  const q = document.querySelector('.search-wrap input').value.trim();
  if (q) window.location.href = '../01_san-pham/index.html?q=' + encodeURIComponent(q);
});
document.querySelector('.search-wrap input').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) window.location.href = '../01_san-pham/index.html?q=' + encodeURIComponent(q);
  }
});

// Write review form
document.querySelector('.btn-write-review').addEventListener('click', function () {
  if (document.getElementById('reviewForm')) return;
  const form = document.createElement('div');
  form.id = 'reviewForm';
  form.style.cssText = 'background:#fff5f5;border:1px solid #f5c6c6;border-radius:12px;padding:20px;margin-top:16px;';
  form.innerHTML = `
    <h3 style="margin:0 0 12px;font-size:16px;">Viết đánh giá của bạn</h3>
    <div style="margin-bottom:10px;">
      <label style="font-size:13px;color:#666;display:block;margin-bottom:4px;">Họ tên *</label>
      <input type="text" placeholder="Nguyễn Văn A" style="width:100%;padding:8px 12px;border:1px solid #ddd;border-radius:8px;font-size:14px;box-sizing:border-box;">
    </div>
    <div style="margin-bottom:10px;">
      <label style="font-size:13px;color:#666;display:block;margin-bottom:4px;">Nhận xét *</label>
      <textarea rows="3" placeholder="Chia sẻ trải nghiệm của bạn..." style="width:100%;padding:8px 12px;border:1px solid #ddd;border-radius:8px;font-size:14px;box-sizing:border-box;resize:vertical;"></textarea>
    </div>
    <div style="display:flex;gap:8px;">
      <button onclick="submitReview(this)" style="background:#ad292e;color:#fff;border:none;padding:10px 20px;border-radius:8px;font-size:14px;cursor:pointer;font-weight:600;">Gửi đánh giá</button>
      <button onclick="document.getElementById('reviewForm').remove()" style="background:#f5f5f5;color:#555;border:1px solid #ddd;padding:10px 20px;border-radius:8px;font-size:14px;cursor:pointer;">Hủy</button>
    </div>`;
  this.insertAdjacentElement('afterend', form);
  form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function submitReview(btn) {
  const form = btn.closest('#reviewForm');
  const name = form.querySelector('input').value.trim();
  const text = form.querySelector('textarea').value.trim();
  if (!name || !text) { alert('Vui lòng điền đầy đủ thông tin.'); return; }
  form.innerHTML = '<div style="text-align:center;padding:20px;color:#2e7d32;font-size:15px;font-weight:600;">✓ Cảm ơn bạn đã đánh giá! Nhận xét sẽ được duyệt sớm.</div>';
  setTimeout(() => form.remove(), 3000);
}
