// Hệ thống Mẹo Ghi Nhớ & Phân Tích Cấu Trúc Kinh Pháp Cú
// Phong cách thanh tịnh, trang nghiêm, không sử dụng icon màu mè

const DHAMMAPADA_TIPS = {
  // --- I. PHẨM SONG YẾU (1 - 20) ---
  1: {
    pattern: "Cặp đối xứng (Kệ 1 - 2) • Nghiệp ác",
    image: "Bánh xe lăn theo vết chân bò kéo chở nặng.",
    formula: "4 câu đầu giống hệt Kệ 2. Chỉ khác 2 câu cuối: 'ô nhiễm' → 'Khổ não' → 'xe, chân vật kéo'.",
    key: "Ý dẫn đầu → Ý làm chủ, ý tạo → Ý ô nhiễm → Khổ não theo sau → Xe, chân vật kéo."
  },
  2: {
    pattern: "Cặp đối xứng (Kệ 1 - 2) • Nghiệp lành",
    image: "Chiếc bóng đi cùng người dưới ánh mặt trời, bước đi đâu bóng theo đó.",
    formula: "Đối xứng với Kệ 1: Đổi 'ô nhiễm' thành 'thanh tịnh', 'Khổ não' thành 'An lạc', 'xe, chân vật kéo' thành 'bóng, không rời hình'.",
    key: "Ý dẫn đầu → Ý làm chủ, ý tạo → Ý thanh tịnh → An lạc theo sau → Bóng, không rời hình."
  },
  3: {
    pattern: "Cặp đối xứng (Kệ 3 - 4) • Ôm hận",
    image: "Lửa than âm ỉ trong lòng vì chấp vào 4 nỗi oan ức.",
    formula: "2 câu đầu điệp 4 động từ: 'mắng tôi, đánh tôi' / 'thắng tôi, cướp tôi'. Kệ 3: 'Ai ôm hiềm hận' → 'không thể nguôi'.",
    key: "Mắng - Đánh / Thắng - Cướp → Ai ôm hiềm hận → Không thể nguôi."
  },
  4: {
    pattern: "Cặp đối xứng (Kệ 3 - 4) • Xả hận",
    image: "Nước mát xoa dịu lòng thù hận.",
    formula: "Y hệt Kệ 3 hai dòng đầu. Đổi 'Ai ôm' thành 'Không ôm', đổi 'không thể nguôi' thành 'được tự nguôi'.",
    key: "Mắng - Đánh / Thắng - Cướp → Không ôm hiềm hận → Được tự nguôi."
  },
  5: {
    pattern: "Chân lý muôn đời",
    image: "Quy luật thiên thu: Oán không thể dứt oán.",
    formula: "Điệp cấu trúc: 'Với hận diệt hận thù' (không được) ⇄ 'Không hận diệt hận thù' (định luật nghìn thu).",
    key: "Với hận... không có được ⇄ Không hận... là định luật nghìn thu."
  },
  6: {
    pattern: "Hóa giải tranh chấp",
    image: "Nhận thức đời sống ngắn ngủi và cái chết cận kề để dứt tranh hơn thua.",
    formula: "Hai vế nhận thức: 'Người khác không hiểu biết' (kẻ sinh sự) ⇄ 'Chỗ ấy ai biết được' (người trí tự dừng tranh chấp).",
    key: "Không hiểu biết → Chúng ta bị hại → Chỗ ấy ai biết được → Tranh luận lắng êm."
  },
  7: {
    pattern: "Cặp đối xứng (Kệ 7 - 8) • Phóng túng",
    image: "Cây cành giòn yếu ớt bị gió bão quật ngã.",
    formula: "Bộ 4 nhược điểm: Nhìn tịnh tướng + Không hộ căn + Ăn thiếu tiết độ + Biếng nhác → Ma uy hiếp như cây yếu trước gió.",
    key: "Tịnh tướng - Không hộ căn - Thiếu tiết độ - Biếng nhác → Cây yếu trước gió."
  },
  8: {
    pattern: "Cặp đối xứng (Kệ 7 - 8) • Tinh cần",
    image: "Khối đá tảng sừng sững nghìn năm trước bão giông.",
    formula: "Nghịch đảo Kệ 7: Quán bất tịnh + Khéo hộ căn + Ăn có tiết độ + Tinh cần → Ma không uy hiếp nổi như núi đá.",
    key: "Bất tịnh - Khéo hộ căn - Có tiết độ - Tinh cần → Núi đá trước gió."
  },
  9: {
    pattern: "Cặp đối xứng (Kệ 9 - 10) • Áo Cà sa giả",
    image: "Người mặc pháp phục nhưng lòng còn bợn nhơ.",
    formula: "3 điều chưa đạt: Tâm uế trược + Không tự chế + Không chân thật → 'Không xứng áo cà sa'.",
    key: "Tâm chưa rời uế → Không tự chế, không thật → Không xứng áo cà sa."
  },
  10: {
    pattern: "Cặp đối xứng (Kệ 9 - 10) • Áo Cà sa thật",
    image: "Vị chân tu giới đức thanh tịnh trang nghiêm áo cà sa.",
    formula: "Nghịch đảo Kệ 9: Rời bỏ uế trược + Giới luật nghiêm trì + Tự chế, chân thật → 'Thật xứng áo cà sa'.",
    key: "Rời bỏ uế trược → Giới luật nghiêm trì → Tự chế, chân thật → Thật xứng áo cà sa."
  },
  11: {
    pattern: "Cặp đối xứng (Kệ 11 - 12) • Tà tư, tà hạnh",
    image: "Ảo ảnh sai lầm: Coi hư dối là chân thật.",
    formula: "Hoán vị chéo: 'Không chân' tưởng là 'chân thật' / 'Chân thật' thấy là 'không chân' → Do tà tư, tà hạnh.",
    key: "Không chân (tưởng thật) ⇄ Chân thật (thấy không chân) → Tà tư, tà hạnh."
  },
  12: {
    pattern: "Cặp đối xứng (Kệ 11 - 12) • Chính tư, chính hạnh",
    image: "Tuệ nhãn sáng suốt: Thấy đúng như thật.",
    formula: "Nghịch đảo Kệ 11: 'Chân thật, biết chân thật' / 'Không chân, biết không chân' → Do chính tư, chính hạnh.",
    key: "Chân thật (biết thật) ⇄ Không chân (biết không) → Chính tư, chính hạnh."
  },
  13: {
    pattern: "Cặp đối xứng (Kệ 13 - 14) • Nhà vụng lợp",
    image: "Mái nhà dột nát, mưa rào liền ngấm vào trong.",
    formula: "Ẩn dụ: Mái nhà vụng lợp → mưa liền xâm nhập ⇄ Tâm không tu → tham dục liền xâm nhập.",
    key: "Nhà vụng lợp → Mưa liền xâm nhập ⇄ Tâm không tu → Tham dục liền xâm nhập."
  },
  14: {
    pattern: "Cặp đối xứng (Kệ 13 - 14) • Nhà khéo lợp",
    image: "Mái nhà kiên cố, mưa bão không thể thấm vào.",
    formula: "Đổi 'vụng' thành 'khéo', thêm 'không': Nhà khéo lợp → mưa không xâm nhập ⇄ Tâm khéo tu → tham dục không xâm nhập.",
    key: "Nhà khéo lợp → Mưa không xâm nhập ⇄ Tâm khéo tu → Tham dục không xâm nhập."
  },
  15: {
    pattern: "Bộ 4 câu Nghiệp Báo (15 - 18) • Nay sầu / Kẻ ác",
    image: "Kẻ gieo nhân ác chịu nỗi buồn rầu cả hai đời.",
    formula: "Từ khóa: 'SẦU' của 'Kẻ ác'. Điệp câu: Nay sầu, đời sau sầu / Kẻ ác, hai đời sầu → Thấy nghiệp uế mình làm.",
    key: "Nay sầu - đời sau sầu → Kẻ ác hai đời sầu → Thấy nghiệp uế mình làm."
  },
  16: {
    pattern: "Bộ 4 câu Nghiệp Báo (15 - 18) • Nay vui / Làm phước",
    image: "Người làm việc phước an vui thanh thản cả hai đời.",
    formula: "Đối xứng Kệ 15: Đổi 'sầu' thành 'VUI', đổi 'kẻ ác' thành 'LÀM PHƯỚC', đổi 'nghiệp uế' thành 'NGHIỆP TỊNH'.",
    key: "Nay vui - đời sau vui → Làm phước hai đời vui → Thấy nghiệp tịnh mình làm."
  },
  17: {
    pattern: "Bộ 4 câu Nghiệp Báo (15 - 18) • Nay than / Cõi dữ",
    image: "Kẻ ác hối tiếc muộn màng khi rơi vào ác đạo.",
    formula: "Từ khóa: 'THAN'. Câu chốt: Than rằng 'Ta làm ác' → Đọa cõi dữ, than hơn.",
    key: "Nay than - đời sau than → Than rằng 'Ta làm ác' → Đọa cõi dữ, than hơn."
  },
  18: {
    pattern: "Bộ 4 câu Nghiệp Báo (15 - 18) • Nay sướng / Cõi lành",
    image: "Người lành hoan hỷ khi tái sinh cõi an lành.",
    formula: "Đối xứng Kệ 17: Đổi 'than' thành 'SƯỚNG'. Câu chốt: Mừng rằng 'Ta làm thiện' → Sinh cõi lành, sướng hơn.",
    key: "Nay sướng - đời sau sướng → Mừng rằng 'Ta làm thiện' → Sinh cõi lành, sướng hơn."
  },
  19: {
    pattern: "Cặp đối xứng (19 - 20) • Nói nhiều không hành",
    image: "Kẻ làm thuê đếm bò cho người mà mình không có phần sữa.",
    formula: "Ẩn dụ: Nói nhiều kinh mà phóng dật không hành = Kẻ chăn bò người → Không phần Sa môn hạnh.",
    key: "Nói nhiều kinh - Không hành trì → Như kẻ chăn bò người → Không phần Sa môn hạnh."
  },
  20: {
    pattern: "Cặp đối xứng (19 - 20) • Nói ít thực hành sâu",
    image: "Bậc chân tu thực hành giới định tuệ thoát ly phiền não.",
    formula: "Nghịch đảo Kệ 19: Nói ít nhưng hành pháp, tùy pháp, bỏ tham sân si, tỉnh giác → Dự phần Sa môn hạnh.",
    key: "Nói ít kinh → Hành pháp tùy pháp → Bỏ tham sân si → Dự phần Sa môn hạnh."
  },

  // --- II. PHẨM KHÔNG PHÓNG DẬT (21 - 32) ---
  21: {
    pattern: "Định nghĩa Phóng Dật",
    image: "Ranh giới tỉnh thức: Tỉnh giác là sống, buông lung là chết.",
    formula: "4 dòng đối xứng: Không phóng dật = đường sống (không chết) ⇄ Phóng dật = đường chết (như chết rồi).",
    key: "Không phóng dật (đường sống, không chết) ⇄ Phóng dật (đường chết, như chết rồi)."
  },
  24: {
    pattern: "7 Phẩm chất tăng trưởng tiếng lành",
    image: "Đức hạnh rạng rỡ lan tỏa khắp mười phương.",
    formula: "Chuỗi 7 đức tính: Nỗ lực → Chính niệm → Tịnh hạnh → Hành thận trọng → Tự điều → Sống theo pháp → Không phóng dật.",
    key: "Nỗ lực + Chính niệm + Tịnh hạnh + Thận trọng + Tự điều + Theo pháp → Tiếng lành tăng trưởng."
  },
  25: {
    pattern: "Hòn đảo giữa dòng lũ",
    image: "Hòn đảo cao giữa biển lũ cuồn cuộn không ngập lụt.",
    formula: "Bậc trí dựng hòn đảo bằng: Nỗ lực, không phóng dật, tự điều, khéo chế ngự → Nước lụt khó ngập tràn.",
    key: "Nỗ lực, không phóng dật → Tự điều, chế ngự → Bậc trí xây hòn đảo → Nước lụt khó tràn."
  },
  28: {
    pattern: "Lầu cao trí tuệ",
    image: "Người đứng trên đỉnh núi cao nhìn xuống kẻ phàm nơi đất bằng.",
    formula: "2 tầng ẩn dụ: 'Leo lầu cao trí tuệ / Không sầu nhìn khổ sầu' ⇄ 'Bậc trí đứng núi cao / Nhìn kẻ ngu đất bằng'.",
    key: "Dẹp phóng dật → Leo lầu trí tuệ → Núi cao nhìn đất bằng."
  },
  31: {
    pattern: "Cặp đối xứng (31 - 32) • Lửa thiêu kiết sử",
    image: "Ngọn lửa rừng thiêu rụi gai góc rào chắn.",
    formula: "Kệ 31 và 32 cùng 2 dòng đầu: 'Vui thích không phóng dật / Tỳ kheo sợ phóng dật'. Kệ 31: Bước tới như lửa hừng / Thiêu kiết sử lớn nhỏ.",
    key: "Sợ phóng dật → Bước tới như lửa hừng → Thiêu kiết sử lớn nhỏ."
  },
  32: {
    pattern: "Cặp đối xứng (31 - 32) • Gần Niết bàn",
    image: "Cảnh giới tịch tịnh Niết bàn hiện tiền.",
    formula: "Giống Kệ 31 hai câu đầu. Kệ 32 kết thúc: 'Không thể bị thối đọa / Nhất định gần Niết bàn'.",
    key: "Sợ phóng dật → Không thể bị thối đọa → Nhất định gần Niết bàn."
  },

  // --- III. PHẨM TÂM (33 - 43) ---
  33: {
    pattern: "Uốn nắn tâm như thợ làm tên",
    image: "Bậc thợ chuốt từng thanh gỗ cong thành mũi tên thẳng tắp.",
    formula: "Đặc tính tâm: 'hoảng hốt, dao động' → Người trí uốn tâm thẳng như thợ tên làm tên.",
    key: "Tâm hoảng hốt dao động → Khó hộ trì, khó nhiếp → Người trí làm tâm thẳng."
  },
  34: {
    pattern: "Con cá quăng trên bờ",
    image: "Cá bị vứt ra khỏi dòng nước, đập đuôi vùng vẫy muốn trở về nguồn.",
    formula: "Tâm rời khỏi tham dục cũng vùng vẫy như cá quăng trên bờ → Cần kiên quyết đoạn thế lực ma.",
    key: "Cá quăng trên bờ → Tâm vùng vẫy mạnh → Hãy đoạn thế lực ma."
  },
  42: {
    pattern: "So sánh hiểm họa (Kệ 42 - 43)",
    image: "Kẻ thù hại nhau không bằng một tâm niệm tà vạy tự hại mình.",
    formula: "Kẻ thù hại kẻ thù, oan gia hại oan gia không bằng: 'Tâm hướng tà' gây ác cho tự thân.",
    key: "Kẻ thù hại kẻ thù / Oan gia hại oan gia < Tâm hướng tà hại mình."
  },
  43: {
    pattern: "So sánh phước báu (Kệ 42 - 43)",
    image: "Cha mẹ yêu thương con cũng không cứu giúp lớn bằng một tâm niệm chân chính.",
    formula: "Đối xứng Kệ 42: Điều cha mẹ bà con không làm được, chỉ có: 'Tâm hướng chính' làm được tốt đẹp hơn.",
    key: "Mẹ cha bà con không làm được < Tâm hướng chính làm được tốt đẹp hơn."
  },

  // --- IV. PHẨM HOA (44 - 59) ---
  49: {
    pattern: "Con ong lấy nhụy",
    image: "Con ong đậu lên hoa hút mật mà không làm dập cánh hay phai hương thơm.",
    formula: "Bậc Thánh vào làng khất thực như con ong: Che chở hoa, lấy nhụy, không làm tổn hại sắc hương.",
    key: "Như ong đến với hoa → Không hại sắc và hương → Bậc Thánh đi vào làng."
  },
  50: {
    pattern: "Quay về soi xét lại mình",
    image: "Tấm gương soi phản chiếu tự thân thay vì nhìn người khác.",
    formula: "Hai vế soi xét: 'Không nên nhìn lỗi người' (làm hay không làm) ⇄ 'Nên nhìn tự chính mình' (có làm hay không làm).",
    key: "Không nhìn lỗi người ⇄ Nên nhìn tự chính mình (có làm hay không)."
  },
  51: {
    pattern: "Cặp đối xứng Hoa & Lời nói (51 - 52)",
    image: "Bông hoa sặc sỡ nhưng không có hương thơm.",
    formula: "Hoa đẹp + không hương = Lời nói khéo + không làm (không kết quả).",
    key: "Hoa có sắc không hương ⇄ Lời khéo nói không làm (không kết quả)."
  },
  52: {
    pattern: "Cặp đối xứng Hoa & Lời nói (51 - 52)",
    image: "Bông hoa vừa đượm sắc vừa ngạt ngào hương thơm.",
    formula: "Hoa đẹp + có hương = Lời nói khéo + có làm (có kết quả).",
    key: "Hoa có sắc có hương ⇄ Lời khéo nói có làm (có kết quả)."
  },

  // --- V. PHẨM NGU (60 - 75) ---
  60: {
    pattern: "Ba cái Dài trong đời",
    image: "Người mất ngủ thấy đêm dài, kẻ kiệt sức thấy đường dài dặc.",
    formula: "Thức → Đêm dài; Mệt → Đường dài; Kẻ ngu không biết Diệu pháp → Luân hồi dài.",
    key: "Đêm dài kẻ thức → Đường dài kẻ mệt → Luân hồi dài kẻ ngu."
  },
  64: {
    pattern: "Cặp đối xứng Cái Muỗng & Đầu Lưỡi (64 - 65)",
    image: "Cái muỗng múc canh suốt đời nhưng chẳng bao giờ cảm nhận được vị canh.",
    formula: "Người ngu gần người trí trọn đời vẫn mù tịt Chính pháp, như muỗng với vị canh.",
    key: "Người ngu gần người trí trọn đời = Như muỗng với vị canh."
  },
  65: {
    pattern: "Cặp đối xứng Cái Muỗng & Đầu Lưỡi (64 - 65)",
    image: "Đầu lưỡi chạm vào giọt canh nhận biết ngay vị đậm đà.",
    formula: "Người trí gần người trí một khắc là thấu triệt Diệu pháp, như lưỡi với vị canh.",
    key: "Người trí gần người trí một khắc = Như lưỡi với vị canh."
  },

  // --- VI. PHẨM HIỀN TRÍ (76 - 89) ---
  76: {
    pattern: "Người chỉ lỗi như người chỉ kho vàng",
    image: "Kho báu chôn giấu dưới lòng đất được bậc trí chỉ điểm.",
    formula: "Bậc hiền trí chỉ lỗi và khiển trách = người chỉ chỗ chôn vàng → Thân cận chỉ tốt hơn, không xấu.",
    key: "Chỉ lỗi và khiển trách = Chỉ chỗ chôn vàng → Hãy thân cận người trí."
  },
  80: {
    pattern: "Bốn nghệ nhân uốn nắn",
    image: "Thợ trị thủy dẫn nước, thợ làm tên nắn tên, thợ mộc uốn ván, bậc trí tự điều thân.",
    formula: "Trị thủy dẫn nước → Làm tên nắn tên → Thợ mộc uốn gỗ → Bậc trí nhiếp tự thân. (Lặp lại ở Kệ 145).",
    key: "Dẫn nước - Nắn tên - Uốn gỗ → Bậc trí nhiếp tự thân."
  },
  81: {
    pattern: "Đá tảng trước gió bão",
    image: "Tảng đá kiên cố sừng sững không gió nào lung lay.",
    formula: "Đá tảng không gió nào dao động = Người trí giữa dòng khen chê thế gian không dao động.",
    key: "Đá tảng kiên cố không gió dao động ⇄ Giữa khen chê người trí không dao động."
  },

  // --- VIII. PHẨM NGHÌN (100 - 115) ---
  103: {
    pattern: "Chiến thắng thù thắng nhất",
    image: "Chiến trường muôn quân gươm giáo đối diện chiến thắng nội tâm.",
    formula: "Thắng vạn quân địch nơi chiến trường không bằng tự chiến thắng chính mình.",
    key: "Thắng nghìn quân địch < Tự thắng mình, tốt hơn (thật chiến thắng tối thượng)."
  },
  110: {
    pattern: "Chuỗi đối xứng Sống 100 năm vs Sống 1 ngày (110 - 115)",
    image: "Một ngày sống trọn vẹn trong chánh niệm hơn cả trăm năm phóng túng.",
    formula: "Kệ 110: 100 năm ác giới < 1 ngày trì giới tu thiền. (Chuỗi 6 kệ: 110 Giới, 111 Tuệ, 112 Tinh tấn, 113 Sinh diệt, 114 Bất tử, 115 Tối thượng).",
    key: "100 năm buông lung < 1 ngày tu tập (Giới - Tuệ - Tinh tấn - Sinh diệt - Bất tử - Tối thượng)."
  },

  // --- XVIII. PHẨM CẤU UẾ (235 - 255) ---
  240: {
    pattern: "Sắt sinh rỉ sét tự hoại",
    image: "Thanh sắt sinh rỉ sét, chính vết sét ấy ăn ruỗng thanh sắt.",
    formula: "Sét từ sắt sinh rồi quay lại ăn sắt = Quá ham lợi dưỡng, nghiệp ác tự sinh dẫn mình vào đường dữ.",
    key: "Sét từ sắt sinh ăn sắt ⇄ Lợi dưỡng dẫn vào cõi ác."
  },
  252: {
    pattern: "Vạch lỗi người & giấu lỗi mình",
    image: "Sàng trấu tìm hạt tấm trong thúng gạo đối diện kẻ đánh bạc giấu bài.",
    formula: "Lỗi người phanh tìm như sàng trấu trong gạo; Lỗi mình che đậy như kẻ gian giấu bài.",
    key: "Lỗi người phanh tìm (sàng trấu trong gạo) ⇄ Lỗi mình che đậy (kẻ gian giấu bài)."
  },

  // --- XXVI. PHẨM BÀ LA MÔN (383 - 423) ---
  401: {
    pattern: "Giọt nước lá sen & Hạt cải đầu kim",
    image: "Giọt sương lăn trên lá sen không ướt; hạt cải nhỏ thăng bằng trên đầu mũi kim nhọn.",
    formula: "Tâm không dính mắc ái dục = nước trên lá sen = hạt cải trên đầu kim → Bậc Bà la môn.",
    key: "Nước trên lá sen + Hạt cải đầu kim → Người không nhiễm ái dục → Ta gọi Bà la môn."
  }
};

// Hàm lấy mẹo nhớ cho một bài kệ bất kỳ
function getVerseTip(verseId) {
  if (DHAMMAPADA_TIPS[verseId]) {
    return DHAMMAPADA_TIPS[verseId];
  }

  const verse = DHAMMAPADA_VERSES.find(v => v.id === verseId);
  if (!verse) return null;

  const ch = DHAMMAPADA_CHAPTERS.find(c => c.id === verse.chapterId);
  const firstLine = verse.lines[0];
  const lastLine = verse.lines[verse.lines.length - 1];

  return {
    pattern: `Thuộc ${ch?.name || 'Kinh Pháp Cú'}`,
    image: `Ghi nhớ trọng tâm: "${firstLine}"`,
    formula: `Ngắt nhịp thơ 5 chữ (${verse.lines.length} câu). Điểm chốt câu cuối: "${lastLine}".`,
    key: `${verse.lines.map(l => l.split(' ').slice(0, 2).join(' ')).join(' → ')}`
  };
}
