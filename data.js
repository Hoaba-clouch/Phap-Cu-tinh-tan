// Dữ liệu 26 Phẩm và 423 Bài Kệ Kinh Pháp Cú
// Nguồn: Bản in chính thức của Chùa Hoằng Pháp (Dịch giả: Trưởng lão HT. Thích Minh Châu)

const DHAMMAPADA_CHAPTERS = [
  { id: 1, name: "I. PHẨM SONG YẾU", range: [1, 20], count: 20 },
  { id: 2, name: "II. PHẨM KHÔNG PHÓNG DẬT", range: [21, 32], count: 12 },
  { id: 3, name: "III. PHẨM TÂM", range: [33, 43], count: 11 },
  { id: 4, name: "IV. PHẨM HOA", range: [44, 59], count: 16 },
  { id: 5, name: "V. PHẨM NGU", range: [60, 75], count: 16 },
  { id: 6, name: "VI. PHẨM HIỀN TRÍ", range: [76, 89], count: 14 },
  { id: 7, name: "VII. PHẨM A LA HÁN", range: [90, 99], count: 10 },
  { id: 8, name: "VIII. PHẨM NGHÌN", range: [100, 115], count: 16 },
  { id: 9, name: "IX. PHẨM ÁC", range: [116, 128], count: 13 },
  { id: 10, name: "X. PHẨM HÌNH PHẠT", range: [129, 145], count: 17 },
  { id: 11, name: "XI. PHẨM GIÀ", range: [146, 156], count: 11 },
  { id: 12, name: "XII. PHẨM TỰ NGÃ", range: [157, 166], count: 10 },
  { id: 13, name: "XIII. PHẨM THẾ GIAN", range: [167, 178], count: 12 },
  { id: 14, name: "XIV. PHẨM PHẬT ĐÀ", range: [179, 196], count: 18 },
  { id: 15, name: "XV. PHẨM AN LẠC", range: [197, 208], count: 12 },
  { id: 16, name: "XVI. PHẨM HỶ ÁI", range: [209, 220], count: 12 },
  { id: 17, name: "XVII. PHẨM PHẪN NỘ", range: [221, 234], count: 14 },
  { id: 18, name: "XVIII. PHẨM CẤU UẾ", range: [235, 255], count: 21 },
  { id: 19, name: "XIX. PHẨM PHÁP TRỤ", range: [256, 272], count: 17 },
  { id: 20, name: "XX. PHẨM ĐẠO", range: [273, 289], count: 17 },
  { id: 21, name: "XXI. PHẨM TẠP LỤC", range: [290, 305], count: 16 },
  { id: 22, name: "XXII. PHẨM ĐỊA NGỤC", range: [306, 319], count: 14 },
  { id: 23, name: "XXIII. PHẨM VOI", range: [320, 333], count: 14 },
  { id: 24, name: "XXIV. PHẨM THAM ÁI", range: [334, 359], count: 26 },
  { id: 25, name: "XXV. PHẨM TỲ KHEO", range: [360, 382], count: 23 },
  { id: 26, name: "XXVI. PHẨM BÀ LA MÔN", range: [383, 423], count: 41 }
];

const DHAMMAPADA_VERSES = [
  // I. PHẨM SONG YẾU (1 - 20)
  {
    id: 1, chapterId: 1,
    lines: [
      "Ý dẫn đầu các pháp,",
      "Ý làm chủ, ý tạo.",
      "Nếu với ý ô nhiễm,",
      "Nói lên hay hành động,",
      "Khổ não bước theo sau,",
      "Như xe, chân vật kéo."
    ]
  },
  {
    id: 2, chapterId: 1,
    lines: [
      "Ý dẫn đầu các pháp,",
      "Ý làm chủ, ý tạo.",
      "Nếu với ý thanh tịnh,",
      "Nói lên hay hành động,",
      "An lạc bước theo sau,",
      "Như bóng, không rời hình."
    ]
  },
  {
    id: 3, chapterId: 1,
    lines: [
      "Nó mắng tôi, đánh tôi,",
      "Nó thắng tôi, cướp tôi.",
      "Ai ôm hiềm hận ấy,",
      "Hận thù không thể nguôi."
    ]
  },
  {
    id: 4, chapterId: 1,
    lines: [
      "Nó mắng tôi, đánh tôi,",
      "Nó thắng tôi, cướp tôi.",
      "Không ôm hiềm hận ấy,",
      "Hận thù được tự nguôi."
    ]
  },
  {
    id: 5, chapterId: 1,
    lines: [
      "Với hận diệt hận thù,",
      "Đời này không có được.",
      "Không hận diệt hận thù,",
      "Là định luật nghìn thu."
    ]
  },
  {
    id: 6, chapterId: 1,
    lines: [
      "Người khác không hiểu biết,",
      "Chúng ta đây bị hại.",
      "Chỗ ấy, ai biết được,",
      "Tranh luận được lắng êm."
    ]
  },
  {
    id: 7, chapterId: 1,
    lines: [
      "Ai sống nhìn tịnh tướng,",
      "Không hộ trì các căn,",
      "Ăn uống thiếu tiết độ,",
      "Biếng nhác, chẳng tinh cần,",
      "Ma uy hiếp kẻ ấy,",
      "Như cây yếu trước gió."
    ]
  },
  {
    id: 8, chapterId: 1,
    lines: [
      "Ai sống quán bất tịnh,",
      "Khéo hộ trì các căn,",
      "Ăn uống có tiết độ,",
      "Có lòng tin, tinh cần,",
      "Ma không uy hiếp được,",
      "Như núi đá trước gió."
    ]
  },
  {
    id: 9, chapterId: 1,
    lines: [
      "Ai mặc áo cà sa,",
      "Tâm chưa rời uế trược,",
      "Không tự chế, không thật,",
      "Không xứng áo cà sa."
    ]
  },
  {
    id: 10, chapterId: 1,
    lines: [
      "Ai rời bỏ uế trược,",
      "Giới luật khéo nghiêm trì,",
      "Tự chế, sống chân thật,",
      "Thật xứng áo cà sa."
    ]
  },
  {
    id: 11, chapterId: 1,
    lines: [
      "Không chân, tưởng chân thật,",
      "Chân thật, thấy không chân.",
      "Họ không đạt chân thật,",
      "Do tà tư, tà hạnh."
    ]
  },
  {
    id: 12, chapterId: 1,
    lines: [
      "Chân thật, biết chân thật,",
      "Không chân, biết không chân.",
      "Họ đạt được chân thật,",
      "Do chính tư, chính hạnh."
    ]
  },
  {
    id: 13, chapterId: 1,
    lines: [
      "Như ngôi nhà vụng lợp,",
      "Mưa liền xâm nhập vào.",
      "Cũng vậy, tâm không tu,",
      "Tham dục liền xâm nhập."
    ]
  },
  {
    id: 14, chapterId: 1,
    lines: [
      "Như ngôi nhà khéo lợp,",
      "Mưa không xâm nhập vào.",
      "Cũng vậy, tâm khéo tu,",
      "Tham dục không xâm nhập."
    ]
  },
  {
    id: 15, chapterId: 1,
    lines: [
      "Nay sầu, đời sau sầu,",
      "Kẻ ác, hai đời sầu.",
      "Nó sầu, nó ưu não,",
      "Thấy nghiệp uế mình làm."
    ]
  },
  {
    id: 16, chapterId: 1,
    lines: [
      "Nay vui, đời sau vui,",
      "Làm phước, hai đời vui.",
      "Người ấy vui, an vui,",
      "Thấy nghiệp tịnh mình làm."
    ]
  },
  {
    id: 17, chapterId: 1,
    lines: [
      "Nay than, đời sau than,",
      "Kẻ ác hai đời than.",
      "Than rằng: “Ta làm ác”,",
      "Đọa cõi dữ, than hơn."
    ]
  },
  {
    id: 18, chapterId: 1,
    lines: [
      "Nay sướng, đời sau sướng,",
      "Làm phước hai đời sướng.",
      "Mừng rằng: “Ta làm thiện”,",
      "Sinh cõi lành, sướng hơn."
    ]
  },
  {
    id: 19, chapterId: 1,
    lines: [
      "Nếu người nói nhiều kinh,",
      "Không hành trì, phóng dật.",
      "Như kẻ chăn bò người,",
      "Không phần Sa môn hạnh."
    ]
  },
  {
    id: 20, chapterId: 1,
    lines: [
      "Dù nói ít kinh điển,",
      "Nhưng hành pháp, tùy pháp,",
      "Từ bỏ tham, sân, si,",
      "Tỉnh giác, tâm giải thoát,",
      "Không chấp thủ hai đời,",
      "Dự phần Sa môn hạnh."
    ]
  },

  // II. PHẨM KHÔNG PHÓNG DẬT (21 - 32)
  {
    id: 21, chapterId: 2,
    lines: [
      "Không phóng dật, đường sống,",
      "Phóng dật là đường chết.",
      "Không phóng dật, không chết,",
      "Phóng dật như chết rồi."
    ]
  },
  {
    id: 22, chapterId: 2,
    lines: [
      "Biết rõ sai biệt ấy,",
      "Người trí không phóng dật.",
      "Hoan hỷ, không phóng dật,",
      "An vui hạnh bậc Thánh."
    ]
  },
  {
    id: 23, chapterId: 2,
    lines: [
      "Người hằng tu thiền định,",
      "Thường kiên trì tinh tấn.",
      "Bậc trí hưởng Niết bàn,",
      "Ắt an tịnh vô thượng."
    ]
  },
  {
    id: 24, chapterId: 2,
    lines: [
      "Nỗ lực, giữ chính niệm,",
      "Tịnh hạnh, hành thận trọng,",
      "Tự điều, sống theo pháp,",
      "Ai sống không phóng dật,",
      "Tiếng lành ngày tăng trưởng."
    ]
  },
  {
    id: 25, chapterId: 2,
    lines: [
      "Nỗ lực, không phóng dật,",
      "Tự điều, khéo chế ngự.",
      "Bậc trí xây hòn đảo,",
      "Nước lụt khó ngập tràn."
    ]
  },
  {
    id: 26, chapterId: 2,
    lines: [
      "Họ ngu si thiếu trí,",
      "Chuyên sống đời phóng dật.",
      "Người trí không phóng dật,",
      "Như giữ tài sản quý."
    ]
  },
  {
    id: 27, chapterId: 2,
    lines: [
      "Chớ sống đời phóng dật,",
      "Chớ mê say dục lạc.",
      "Không phóng dật, thiền định,",
      "Đạt được an lạc lớn."
    ]
  },
  {
    id: 28, chapterId: 2,
    lines: [
      "Người trí dẹp phóng dật,",
      "Với hạnh không phóng dật,",
      "Leo lầu cao trí tuệ,",
      "Không sầu nhìn khổ sầu,",
      "Bậc trí đứng núi cao,",
      "Nhìn kẻ ngu đất bằng."
    ]
  },
  {
    id: 29, chapterId: 2,
    lines: [
      "Tinh cần giữa phóng dật,",
      "Tỉnh thức giữa quần mê,",
      "Người trí như ngựa phi,",
      "Bỏ sau con ngựa hèn."
    ]
  },
  {
    id: 30, chapterId: 2,
    lines: [
      "Đế Thích không phóng dật,",
      "Đạt ngôi vị thiên chủ.",
      "Không phóng dật được khen,",
      "Phóng dật thường bị trách."
    ]
  },
  {
    id: 31, chapterId: 2,
    lines: [
      "Vui thích không phóng dật,",
      "Tỳ kheo sợ phóng dật,",
      "Bước tới như lửa hừng,",
      "Thiêu kiết sử lớn nhỏ."
    ]
  },
  {
    id: 32, chapterId: 2,
    lines: [
      "Vui thích không phóng dật,",
      "Tỳ kheo sợ phóng dật,",
      "Không thể bị thối đọa,",
      "Nhất định gần Niết bàn."
    ]
  },

  // III. PHẨM TÂM (33 - 43)
  {
    id: 33, chapterId: 3,
    lines: [
      "Tâm hoảng hốt, dao động,",
      "Khó hộ trì, khó nhiếp.",
      "Người trí làm tâm thẳng,",
      "Như thợ tên làm tên."
    ]
  },
  {
    id: 34, chapterId: 3,
    lines: [
      "Như cá quăng trên bờ,",
      "Vứt ra ngoài thủy giới,",
      "Tâm này vùng vẫy mạnh,",
      "Hãy đoạn thế lực ma."
    ]
  },
  {
    id: 35, chapterId: 3,
    lines: [
      "Khó nắm giữ, khinh động,",
      "Theo các dục quay cuồng.",
      "Lành thay, điều phục tâm,",
      "Tâm điều, an lạc đến."
    ]
  },
  {
    id: 36, chapterId: 3,
    lines: [
      "Tâm tế nhị, khó thấy,",
      "Theo các dục quay cuồng.",
      "Người trí phòng hộ tâm,",
      "Tâm hộ, an lạc đến."
    ]
  },
  {
    id: 37, chapterId: 3,
    lines: [
      "Chạy xa, sống một mình,",
      "Không thân, ẩn hang sâu.",
      "Ai điều phục được tâm,",
      "Thoát khỏi ma trói buộc."
    ]
  },
  {
    id: 38, chapterId: 3,
    lines: [
      "Ai tâm không an trú,",
      "Không biết chân Diệu pháp,",
      "Tịnh tín bị rúng động,",
      "Trí tuệ không viên thành."
    ]
  },
  {
    id: 39, chapterId: 3,
    lines: [
      "Tâm không đầy tràn dục,",
      "Tâm không (hận) công phá,",
      "Đoạn tuyệt mọi thiện ác,",
      "Kẻ tĩnh không sợ hãi."
    ]
  },
  {
    id: 40, chapterId: 3,
    lines: [
      "Biết thân như đồ gốm,",
      "Trú tâm như thành trì,",
      "Chống ma với gươm trí,",
      "Giữ chiến thắng, không tham."
    ]
  },
  {
    id: 41, chapterId: 3,
    lines: [
      "Không bao lâu, thân này,",
      "Sẽ nằm dài trên đất,",
      "Bị vứt bỏ, vô thức,",
      "Như khúc cây vô dụng."
    ]
  },
  {
    id: 42, chapterId: 3,
    lines: [
      "Kẻ thù hại kẻ thù,",
      "Oan gia hại oan gia,",
      "Không bằng tâm hướng tà,",
      "Gây ác cho tự thân."
    ]
  },
  {
    id: 43, chapterId: 3,
    lines: [
      "Điều mẹ cha, bà con,",
      "Không có thể làm được,",
      "Tâm hướng chính làm được,",
      "Làm được tốt đẹp hơn."
    ]
  },

  // IV. PHẨM HOA (44 - 59)
  {
    id: 44, chapterId: 4,
    lines: [
      "Ai chinh phục đất này,",
      "Dạ ma, thiên giới này?",
      "Ai khéo giảng Pháp cú,",
      "Như người khéo hái hoa?"
    ]
  },
  {
    id: 45, chapterId: 4,
    lines: [
      "Hữu học chinh phục đất,",
      "Dạ ma, thiên giới này.",
      "Hữu học giảng Pháp cú,",
      "Như người khéo hái hoa."
    ]
  },
  {
    id: 46, chapterId: 4,
    lines: [
      "Biết thân như bọt nước,",
      "Ngộ thân là như huyễn,",
      "Bẻ tên hoa của ma,",
      "Vượt tầm mắt thần chết."
    ]
  },
  {
    id: 47, chapterId: 4,
    lines: [
      "Người nhặt các loại hoa,",
      "Ý đắm say, tham nhiễm,",
      "Bị thần chết mang đi,",
      "Như lụt trôi làng ngủ."
    ]
  },
  {
    id: 48, chapterId: 4,
    lines: [
      "Người nhặt các loại hoa,",
      "Ý đắm say, tham nhiễm,",
      "Các dục chưa thỏa mãn,",
      "Đã bị chết chinh phục."
    ]
  },
  {
    id: 49, chapterId: 4,
    lines: [
      "Như ong đến với hoa,",
      "Không hại sắc và hương,",
      "Che chở hoa, lấy nhụy.",
      "Bậc Thánh đi vào làng."
    ]
  },
  {
    id: 50, chapterId: 4,
    lines: [
      "Không nên nhìn lỗi người,",
      "Người làm hay không làm.",
      "Nên nhìn tự chính mình,",
      "Có làm hay không làm."
    ]
  },
  {
    id: 51, chapterId: 4,
    lines: [
      "Như bông hoa tươi đẹp,",
      "Có sắc nhưng không hương.",
      "Cũng vậy, lời khéo nói,",
      "Không làm, không kết quả."
    ]
  },
  {
    id: 52, chapterId: 4,
    lines: [
      "Như bông hoa tươi đẹp,",
      "Có sắc lại thêm hương,",
      "Cũng vậy, lời khéo nói,",
      "Có làm, có kết quả."
    ]
  },
  {
    id: 53, chapterId: 4,
    lines: [
      "Như từ một đống hoa,",
      "Nhiều tràng hoa được làm,",
      "Cũng vậy, thân sinh tử,",
      "Phải làm nhiều việc lành."
    ]
  },
  {
    id: 54, chapterId: 4,
    lines: [
      "Hương các loại hoa thơm,",
      "Không ngược bay chiều gió,",
      "Nhưng hương người đức hạnh,",
      "Ngược gió khắp tung bay.",
      "Chỉ có bậc chân nhân,",
      "Tỏa khắp mọi phương trời."
    ]
  },
  {
    id: 55, chapterId: 4,
    lines: [
      "Hoa chiên đàn, già la,",
      "Hoa sen, hoa vũ quý,",
      "Giữa những hương hoa ấy,",
      "Giới hương là vô thượng."
    ]
  },
  {
    id: 56, chapterId: 4,
    lines: [
      "Ít giá trị, hương này,",
      "Hương già la, chiên đàn.",
      "Chỉ hương người đức hạnh,",
      "Tối thượng tỏa thiên giới."
    ]
  },
  {
    id: 57, chapterId: 4,
    lines: [
      "Những ai có giới hạnh,",
      "Không phóng dật, an trú.",
      "Chính trí, chân giải thoát,",
      "Ác ma không thấy đường."
    ]
  },
  {
    id: 58, chapterId: 4,
    lines: [
      "Như giữa đống rác nhớp,",
      "Quăng bỏ trên đường lớn,",
      "Chỗ ấy hoa sen nở,",
      "Thơm sạch, đẹp ý người."
    ]
  },
  {
    id: 59, chapterId: 4,
    lines: [
      "Cũng vậy, giữa quần sinh,",
      "Uế nhiễm, mù, phàm tục,",
      "Đệ tử bậc Chính Giác,",
      "Sáng ngời với tuệ trí."
    ]
  },

  // V. PHẨM NGU (60 - 75)
  {
    id: 60, chapterId: 5,
    lines: [
      "Đêm dài cho kẻ thức,",
      "Đường dài cho kẻ mệt,",
      "Luân hồi dài, kẻ ngu,",
      "Không biết chân Diệu pháp."
    ]
  },
  {
    id: 61, chapterId: 5,
    lines: [
      "Tìm không được bạn đường,",
      "Hơn mình hay bằng mình,",
      "Thà quyết sống một mình,",
      "Không bè bạn kẻ ngu."
    ]
  },
  {
    id: 62, chapterId: 5,
    lines: [
      "Con tôi, tài sản tôi,",
      "Người ngu sinh ưu não.",
      "Tự ta, ta không có,",
      "Con đâu, tài sản đâu."
    ]
  },
  {
    id: 63, chapterId: 5,
    lines: [
      "Người ngu nghĩ mình ngu,",
      "Nhờ vậy thành có trí.",
      "Người ngu tưởng có trí,",
      "Thật xứng gọi chí ngu."
    ]
  },
  {
    id: 64, chapterId: 5,
    lines: [
      "Người ngu dù trọn đời,",
      "Thân cận người có trí,",
      "Không biết được Chính pháp,",
      "Như muỗng với vị canh."
    ]
  },
  {
    id: 65, chapterId: 5,
    lines: [
      "Người trí dù một khắc,",
      "Thân cận người có trí,",
      "Biết ngay chân Diệu pháp,",
      "Như lưỡi với vị canh."
    ]
  },
  {
    id: 66, chapterId: 5,
    lines: [
      "Người ngu si thiếu trí,",
      "Tự ngã thành kẻ thù,",
      "Làm các nghiệp không thiện,",
      "Phải chịu quả đắng cay."
    ]
  },
  {
    id: 67, chapterId: 5,
    lines: [
      "Nghiệp làm không chính thiện,",
      "Làm rồi sinh ăn năn,",
      "Mặt nhuốm lệ, khóc than,",
      "Lãnh chịu quả dị thục."
    ]
  },
  {
    id: 68, chapterId: 5,
    lines: [
      "Và nghiệp làm chính thiện,",
      "Làm rồi không ăn năn,",
      "Hoan hỷ, ý đẹp lòng,",
      "Hưởng thọ quả dị thục."
    ]
  },
  {
    id: 69, chapterId: 5,
    lines: [
      "Người ngu nghĩ là ngọt,",
      "Khi ác chưa chín muồi.",
      "Ác nghiệp chín muồi rồi,",
      "Người ngu chịu khổ đau."
    ]
  },
  {
    id: 70, chapterId: 5,
    lines: [
      "Tháng tháng với ngọn cỏ,",
      "Người ngu có ăn uống,",
      "Không bằng phần mười sáu,",
      "Người hiểu pháp hữu vi."
    ]
  },
  {
    id: 71, chapterId: 5,
    lines: [
      "Nghiệp ác đã được làm,",
      "Như sữa, không đông ngay,",
      "Cháy ngầm theo kẻ ngu,",
      "Như lửa, tro che đậy."
    ]
  },
  {
    id: 72, chapterId: 5,
    lines: [
      "Tự nó chịu bất hạnh,",
      "Khi danh đến kẻ ngu,",
      "Vận may bị tổn hại,",
      "Đầu nó bị nát tan."
    ]
  },
  {
    id: 73, chapterId: 5,
    lines: [
      "Ưa danh không tương xứng,",
      "Muốn ngồi trước tỳ kheo,",
      "Ưa quyền tại tinh xá,",
      "Muốn mọi người lễ kính."
    ]
  },
  {
    id: 74, chapterId: 5,
    lines: [
      "Mong cả hai Tăng, tục,",
      "Nghĩ rằng: “Chính ta làm,",
      "Trong mọi việc lớn nhỏ,",
      "Phải theo mệnh lệnh ta”.",
      "Người ngu nghĩ như vậy,",
      "Dục và mạn tăng trưởng."
    ]
  },
  {
    id: 75, chapterId: 5,
    lines: [
      "Khác thay, duyên thế lợi,",
      "Khác thay, đường Niết bàn.",
      "Tỳ kheo, đệ tử Phật,",
      "Hãy như vậy thắng tri.",
      "Chớ ưa thích cung kính,",
      "Hãy tu hạnh viễn ly."
    ]
  },

  // VI. PHẨM HIỀN TRÍ (76 - 89)
  {
    id: 76, chapterId: 6,
    lines: [
      "Nếu thấy bậc hiền trí,",
      "Chỉ lỗi và khiển trách,",
      "Như chỉ chỗ chôn vàng,",
      "Hãy thân cận người trí.",
      "Thân cận người như vậy,",
      "Chỉ tốt hơn, không xấu."
    ]
  },
  {
    id: 77, chapterId: 6,
    lines: [
      "Những người hay khuyên dạy,",
      "Ngăn người khác làm ác,",
      "Được người hiền kính yêu,",
      "Bị người ác không thích."
    ]
  },
  {
    id: 78, chapterId: 6,
    lines: [
      "Chớ thân với bạn ác,",
      "Chớ thân kẻ tiểu nhân.",
      "Hãy thân người bạn lành,",
      "Hãy thân bậc thượng nhân."
    ]
  },
  {
    id: 79, chapterId: 6,
    lines: [
      "Pháp hỷ đem an lạc,",
      "Với tâm tư thuần tịnh.",
      "Người trí thường hoan hỷ,",
      "Với pháp bậc Thánh thuyết."
    ]
  },
  {
    id: 80, chapterId: 6,
    lines: [
      "Người trị thủy dẫn nước,",
      "Kẻ làm tên nắn tên,",
      "Người thợ mộc uốn gỗ,",
      "Bậc trí nhiếp tự thân."
    ]
  },
  {
    id: 81, chapterId: 6,
    lines: [
      "Như đá tảng kiên cố,",
      "Không gió nào dao động.",
      "Cũng vậy, giữa khen chê,",
      "Người trí không dao động."
    ]
  },
  {
    id: 82, chapterId: 6,
    lines: [
      "Như hồ nước sâu thẳm,",
      "Trong sáng, không khuấy đục.",
      "Cũng vậy, nghe Chính pháp,",
      "Người trí hưởng tịnh lạc."
    ]
  },
  {
    id: 83, chapterId: 6,
    lines: [
      "Người hiền bỏ tất cả,",
      "Người lành không bàn dục,",
      "Dù cảm thọ lạc khổ,",
      "Bậc trí không vui buồn."
    ]
  },
  {
    id: 84, chapterId: 6,
    lines: [
      "Không vì mình, vì người,",
      "Không cầu được con cái,",
      "Không tài sản, quốc độ,",
      "Không cầu mình thành tựu,",
      "Với việc làm phi pháp.",
      "Vị ấy thật trì giới,",
      "Có trí tuệ, đúng pháp."
    ]
  },
  {
    id: 85, chapterId: 6,
    lines: [
      "Ít người giữa nhân loại,",
      "Đến được bờ bên kia.",
      "Còn số người còn lại,",
      "Xuôi ngược chạy bờ này."
    ]
  },
  {
    id: 86, chapterId: 6,
    lines: [
      "Những ai hành trì pháp,",
      "Theo Chính pháp khéo dạy,",
      "Sẽ đến bờ bên kia,",
      "Vượt ma lực khó thoát."
    ]
  },
  {
    id: 87, chapterId: 6,
    lines: [
      "Kẻ trí bỏ pháp đen,",
      "Tu tập theo pháp trắng.",
      "Bỏ nhà, sống không nhà,",
      "Sống viễn ly khổ lạc."
    ]
  },
  {
    id: 88, chapterId: 6,
    lines: [
      "Hãy cầu vui Niết bàn,",
      "Bỏ dục, không sở hữu,",
      "Kẻ trí tự rửa sạch,",
      "Cấu uế từ nội tâm."
    ]
  },
  {
    id: 89, chapterId: 6,
    lines: [
      "Những ai với chính tâm,",
      "Khéo tu tập giác chi,",
      "Từ bỏ mọi ái nhiễm,",
      "Hoan hỷ không chấp thủ,",
      "Không lậu hoặc, sáng chói,",
      "Sống tịch tịnh ở đời."
    ]
  },

  // VII. PHẨM A LA HÁN (90 - 99)
  {
    id: 90, chapterId: 7,
    lines: [
      "Đích đã đến, không sầu,",
      "Giải thoát ngoài tất cả,",
      "Đoạn trừ mọi buộc ràng,",
      "Vị ấy không nhiệt não."
    ]
  },
  {
    id: 91, chapterId: 7,
    lines: [
      "Tự sách tấn, chính niệm,",
      "Không thích cư xá nào,",
      "Như ngỗng trời rời ao,",
      "Bỏ sau mọi trú ẩn."
    ]
  },
  {
    id: 92, chapterId: 7,
    lines: [
      "Tài sản không chất chứa,",
      "Ăn uống biết liễu tri,",
      "Tự tại trong hành xứ,",
      "Không, vô tướng, giải thoát.",
      "Như chim giữa hư không,",
      "Hướng chúng đi khó tìm."
    ]
  },
  {
    id: 93, chapterId: 7,
    lines: [
      "Ai lậu hoặc đoạn sạch,",
      "Ăn uống không tham đắm,",
      "Tự tại trong hành xứ,",
      "Không, vô tướng, giải thoát.",
      "Như chim giữa hư không,",
      "Dấu chân thật khó tìm."
    ]
  },
  {
    id: 94, chapterId: 7,
    lines: [
      "Ai nhiếp phục các căn,",
      "Như đánh xe điều ngự,",
      "Mạn trừ, lậu hoặc dứt,",
      "Người vậy, chư thiên mến."
    ]
  },
  {
    id: 95, chapterId: 7,
    lines: [
      "Như đất không hiềm hận,",
      "Như cột trụ kiên trì,",
      "Như hồ không bùn nhơ,",
      "Không luân hồi, vị ấy."
    ]
  },
  {
    id: 96, chapterId: 7,
    lines: [
      "Người tâm ý an tịnh,",
      "Lời an, nghiệp cũng an,",
      "Chính trí, chân giải thoát,",
      "Tịnh lạc là vị ấy."
    ]
  },
  {
    id: 97, chapterId: 7,
    lines: [
      "Không tin, hiểu vô vi,",
      "Người cắt mọi hệ lụy,",
      "Cơ hội tận, xả ly,",
      "Vị ấy thật tối thượng."
    ]
  },
  {
    id: 98, chapterId: 7,
    lines: [
      "Làng mạc hay rừng núi,",
      "Thung lũng hay đồi cao,",
      "La Hán trú chỗ nào,",
      "Đất ấy thật khả ái."
    ]
  },
  {
    id: 99, chapterId: 7,
    lines: [
      "Khả ái thay núi rừng,",
      "Chỗ người phàm không ưa,",
      "Vị ly tham ưa thích,",
      "Vì không tìm dục lạc."
    ]
  },

  // VIII. PHẨM NGHÌN (100 - 115)
  {
    id: 100, chapterId: 8,
    lines: [
      "Dù nói nghìn nghìn lời,",
      "Nhưng không gì lợi ích.",
      "Tốt hơn, một câu nghĩa,",
      "Nghe xong, được tịnh lạc."
    ]
  },
  {
    id: 101, chapterId: 8,
    lines: [
      "Dù nói nghìn câu kệ,",
      "Nhưng không gì lợi ích.",
      "Tốt hơn, nói một câu,",
      "Nghe xong, được tịnh lạc."
    ]
  },
  {
    id: 102, chapterId: 8,
    lines: [
      "Dù nói trăm câu kệ,",
      "Nhưng không gì lợi ích.",
      "Tốt hơn, một câu pháp,",
      "Nghe xong, được tịnh lạc."
    ]
  },
  {
    id: 103, chapterId: 8,
    lines: [
      "Dù tại bãi chiến trường,",
      "Thắng nghìn nghìn quân địch.",
      "Tự thắng mình, tốt hơn,",
      "Thật chiến thắng tối thượng."
    ]
  },
  {
    id: 104, chapterId: 8,
    lines: [
      "Tự thắng, tốt đẹp hơn,",
      "Hơn chiến thắng người khác.",
      "Người khéo điều phục mình,",
      "Thường sống tự chế ngự."
    ]
  },
  {
    id: 105, chapterId: 8,
    lines: [
      "Dù Thiên thần, Thát bà,",
      "Dù Ma vương, Phạm thiên,",
      "Không ai chiến thắng nổi,",
      "Người tự thắng như vậy."
    ]
  },
  {
    id: 106, chapterId: 8,
    lines: [
      "Tháng tháng bỏ nghìn vàng,",
      "Tế tự cả trăm năm,",
      "Chẳng bằng trong giây lát,",
      "Cúng dường bậc tự tu.",
      "Cúng dường vậy tốt hơn,",
      "Hơn trăm năm tế tự."
    ]
  },
  {
    id: 107, chapterId: 8,
    lines: [
      "Dù trải một trăm năm,",
      "Thờ lửa tại rừng sâu,",
      "Chẳng bằng trong giây lát,",
      "Cúng dường bậc tự tu.",
      "Cúng dường vậy tốt hơn,",
      "Hơn trăm năm tế tự."
    ]
  },
  {
    id: 108, chapterId: 8,
    lines: [
      "Suốt năm cúng tế vật,",
      "Để cầu phước ở đời.",
      "Không bằng một phần tư,",
      "Kính lễ bậc Chính trực."
    ]
  },
  {
    id: 109, chapterId: 8,
    lines: [
      "Thường tôn trọng, kính lễ,",
      "Bậc kỳ lão trưởng thượng,",
      "Bốn pháp được tăng trưởng:",
      "Thọ, sắc, lạc, sức mạnh."
    ]
  },
  {
    id: 110, chapterId: 8,
    lines: [
      "Dù sống một trăm năm,",
      "Ác giới, không thiền định.",
      "Tốt hơn, sống một ngày,",
      "Trì giới, tu thiền định."
    ]
  },
  {
    id: 111, chapterId: 8,
    lines: [
      "Ai sống một trăm năm,",
      "Ác tuệ, không thiền định.",
      "Tốt hơn, sống một ngày,",
      "Có tuệ, tu thiền định."
    ]
  },
  {
    id: 112, chapterId: 8,
    lines: [
      "Ai sống một trăm năm,",
      "Lười nhác, không tinh tấn.",
      "Tốt hơn, sống một ngày,",
      "Tinh tấn tận sức mình."
    ]
  },
  {
    id: 113, chapterId: 8,
    lines: [
      "Ai sống một trăm năm,",
      "Không thấy pháp sinh diệt.",
      "Tốt hơn, sống một ngày,",
      "Thấy được pháp sinh diệt."
    ]
  },
  {
    id: 114, chapterId: 8,
    lines: [
      "Ai sống một trăm năm,",
      "Không thấy câu bất tử.",
      "Tốt hơn, sống một ngày,",
      "Thấy được câu bất tử."
    ]
  },
  {
    id: 115, chapterId: 8,
    lines: [
      "Ai sống một trăm năm,",
      "Không thấy pháp tối thượng.",
      "Tốt hơn, sống một ngày,",
      "Thấy được pháp tối thượng."
    ]
  },

  // IX. PHẨM ÁC (116 - 128)
  {
    id: 116, chapterId: 9,
    lines: [
      "Hãy gấp làm điều lành,",
      "Ngăn tâm làm điều ác.",
      "Ai chậm làm việc lành,",
      "Ý ưa thích việc ác."
    ]
  },
  {
    id: 117, chapterId: 9,
    lines: [
      "Nếu người làm điều ác,",
      "Chớ tiếp tục làm thêm,",
      "Chớ ước muốn điều ác,",
      "Chứa ác, tất chịu khổ."
    ]
  },
  {
    id: 118, chapterId: 9,
    lines: [
      "Nếu người làm điều thiện,",
      "Nên tiếp tục làm thêm,",
      "Hãy ước muốn điều thiện,",
      "Chứa thiện, được an lạc."
    ]
  },
  {
    id: 119, chapterId: 9,
    lines: [
      "Người ác thấy là hiền,",
      "Khi ác chưa chín muồi.",
      "Khi ác nghiệp chín muồi,",
      "Người ác mới thấy ác."
    ]
  },
  {
    id: 120, chapterId: 9,
    lines: [
      "Người hiền thấy là ác,",
      "Khi thiện chưa chín muồi.",
      "Khi thiện được chín muồi,",
      "Người hiền thấy là thiện."
    ]
  },
  {
    id: 121, chapterId: 9,
    lines: [
      "Chớ chê khinh điều ác,",
      "Cho rằng chưa đến mình,",
      "Như nước nhỏ từng giọt,",
      "Rồi bình cũng đầy tràn.",
      "Người ngu chứa đầy ác,",
      "Do chất chứa dần dần."
    ]
  },
  {
    id: 122, chapterId: 9,
    lines: [
      "Chớ chê khinh điều thiện,",
      "Cho rằng chưa đến mình,",
      "Như nước nhỏ từng giọt,",
      "Rồi bình cũng đầy tràn.",
      "Người trí chứa đầy thiện,",
      "Do chất chứa dần dần."
    ]
  },
  {
    id: 123, chapterId: 9,
    lines: [
      "Ít bạn đường, nhiều tiền,",
      "Người buôn tránh đường hiểm.",
      "Muốn sống tránh thuốc độc,",
      "Hãy tránh ác như vậy."
    ]
  },
  {
    id: 124, chapterId: 9,
    lines: [
      "Bàn tay không thương tích,",
      "Có thể cầm thuốc độc.",
      "Không thương tích, tránh độc,",
      "Không làm, không có ác."
    ]
  },
  {
    id: 125, chapterId: 9,
    lines: [
      "Hại người không ác tâm,",
      "Người thanh tịnh, không uế,",
      "Tội ác đến kẻ ngu,",
      "Như ngược gió tung bụi."
    ]
  },
  {
    id: 126, chapterId: 9,
    lines: [
      "Một số sinh bào thai,",
      "Kẻ ác sinh Địa ngục,",
      "Người thiện lên cõi Trời,",
      "Vô lậu chứng Niết bàn."
    ]
  },
  {
    id: 127, chapterId: 9,
    lines: [
      "Không trên trời, giữa biển,",
      "Không lánh vào động núi,",
      "Không chỗ nào trên đời,",
      "Trốn được quả ác nghiệp."
    ]
  },
  {
    id: 128, chapterId: 9,
    lines: [
      "Không trên trời, giữa biển,",
      "Không lánh vào động núi,",
      "Không chỗ nào trên đời,",
      "Trốn khỏi tay thần chết."
    ]
  },

  // X. PHẨM HÌNH PHẠT (129 - 145)
  {
    id: 129, chapterId: 10,
    lines: [
      "Mọi người sợ hình phạt,",
      "Mọi người sợ tử vong.",
      "Lấy mình làm thí dụ,",
      "Không giết, không bảo giết."
    ]
  },
  {
    id: 130, chapterId: 10,
    lines: [
      "Mọi người sợ hình phạt,",
      "Mọi người thích sống còn.",
      "Lấy mình làm thí dụ,",
      "Không giết, không bảo giết."
    ]
  },
  {
    id: 131, chapterId: 10,
    lines: [
      "Chúng sinh cầu an lạc,",
      "Ai dùng trượng hại người,",
      "Để tìm lạc cho mình,",
      "Đời sau không được lạc."
    ]
  },
  {
    id: 132, chapterId: 10,
    lines: [
      "Chúng sinh cầu an lạc,",
      "Không dùng trượng hại người,",
      "Để tìm lạc cho mình,",
      "Đời sau được hưởng lạc."
    ]
  },
  {
    id: 133, chapterId: 10,
    lines: [
      "Chớ nói lời ác độc,",
      "Nói ác, bị nói lại.",
      "Khổ thay lời phẫn nộ,",
      "Đao trượng phản chạm mình."
    ]
  },
  {
    id: 134, chapterId: 10,
    lines: [
      "Nếu tự mình yên lặng,",
      "Như chiếc chuông bị bể.",
      "Ngươi đã chứng Niết bàn,",
      "Ngươi không còn phẫn nộ."
    ]
  },
  {
    id: 135, chapterId: 10,
    lines: [
      "Với gậy, người chăn bò,",
      "Lùa bò ra bãi cỏ.",
      "Cũng vậy, già và chết,",
      "Lùa người đến mạng chung."
    ]
  },
  {
    id: 136, chapterId: 10,
    lines: [
      "Người ngu làm điều ác,",
      "Không ý thức việc làm,",
      "Do tự nghiệp người ngu,",
      "Bị nung nấu như lửa."
    ]
  },
  {
    id: 137, chapterId: 10,
    lines: [
      "Dùng trượng phạt không trượng,",
      "Làm ác người không ác,",
      "Trong mười loại khổ đau,",
      "Chịu gấp một loại khổ."
    ]
  },
  {
    id: 138, chapterId: 10,
    lines: [
      "Hoặc khổ thọ khốc liệt,",
      "Thân thể bị thương vong,",
      "Hoặc thọ bệnh kịch liệt,",
      "Hay loạn ý tán tâm."
    ]
  },
  {
    id: 139, chapterId: 10,
    lines: [
      "Hoặc tai họa từ vua,",
      "Hay bị vu trọng tội,",
      "Bà con phải ly tán,",
      "Tài sản bị nát tan."
    ]
  },
  {
    id: 140, chapterId: 10,
    lines: [
      "Hoặc phòng ốc nhà cửa,",
      "Bị hỏa tai thiêu đốt,",
      "Khi thân hoại mạng chung,",
      "Ác tuệ sinh địa ngục."
    ]
  },
  {
    id: 141, chapterId: 10,
    lines: [
      "Không phải sống lõa thể,",
      "Bện tóc, tro trét mình,",
      "Tuyệt thực, lăn trên đất,",
      "Sống nhớp, siêng ngồi xổm,",
      "Làm con người được sạch,",
      "Nếu không trừ nghi hoặc."
    ]
  },
  {
    id: 142, chapterId: 10,
    lines: [
      "Ai sống tự trang sức,",
      "Nhưng an tịnh, nhiếp phục,",
      "Sống kiên trì, Phạm hạnh,",
      "Không hại mọi sinh linh,",
      "Vị ấy là Phạm chí,",
      "Hay Sa môn, khất sĩ."
    ]
  },
  {
    id: 143, chapterId: 10,
    lines: [
      "Thật khó tìm ở đời,",
      "Người biết thẹn, tự chế,",
      "Biết tránh né chỉ trích,",
      "Như ngựa hiền tránh roi."
    ]
  },
  {
    id: 144, chapterId: 10,
    lines: [
      "Như ngựa hiền chạm roi,",
      "Hãy nhiệt tâm, hăng hái,",
      "Với tín, giới, tinh tấn,",
      "Thiền định cùng trạch pháp,",
      "Minh hạnh đủ, chính niệm,",
      "Đoạn khổ này vô lượng."
    ]
  },
  {
    id: 145, chapterId: 10,
    lines: [
      "Người trị thủy dẫn nước,",
      "Kẻ làm tên nắn tên,",
      "Người thợ mộc uốn ván,",
      "Bậc tự điều điều thân."
    ]
  },

  // XI. PHẨM GIÀ (146 - 156)
  {
    id: 146, chapterId: 11,
    lines: [
      "Cười gì, hân hoan gì,",
      "Khi đời mãi bị thiêu?",
      "Bị tối tăm bao trùm,",
      "Sao không tìm ngọn đèn?"
    ]
  },
  {
    id: 147, chapterId: 11,
    lines: [
      "Hãy xem bong bóng đẹp,",
      "Chỗ chất chứa vết thương,",
      "Bệnh hoạn, nhiều suy tư,",
      "Thật không gì trường cửu."
    ]
  },
  {
    id: 148, chapterId: 11,
    lines: [
      "Sắc này bị suy già,",
      "Ổ tật bệnh, mỏng manh,",
      "Nhóm bất tịnh, đổ vỡ,",
      "Chết chấm dứt mạng sống."
    ]
  },
  {
    id: 149, chapterId: 11,
    lines: [
      "Như trái bầu mùa thu,",
      "Bị vứt bỏ quăng đi,",
      "Nhóm xương trắng bồ câu,",
      "Thấy chúng còn vui gì."
    ]
  },
  {
    id: 150, chapterId: 11,
    lines: [
      "Thành này làm bằng xương,",
      "Quét tô bằng thịt máu,",
      "Ở đây già và chết,",
      "Mạn, lừa đảo chất chứa."
    ]
  },
  {
    id: 151, chapterId: 11,
    lines: [
      "Xe vua đẹp cũng già,",
      "Thân này rồi sẽ già.",
      "Pháp bậc thiện, không già,",
      "Như vậy, bậc chí thiện,",
      "Nói lên cho bậc thiện."
    ]
  },
  {
    id: 152, chapterId: 11,
    lines: [
      "Người ít nghe, kém học,",
      "Lớn già như trâu đực,",
      "Thịt nó tuy lớn lên,",
      "Nhưng tuệ không tăng trưởng."
    ]
  },
  {
    id: 153, chapterId: 11,
    lines: [
      "Lang thang bao kiếp sống,",
      "Ta tìm nhưng chẳng gặp,",
      "Người xây dựng nhà này,",
      "Khổ thay, phải tái sinh."
    ]
  },
  {
    id: 154, chapterId: 11,
    lines: [
      "Ôi! Người làm nhà kia,",
      "Nay ta đã thấy ngươi,",
      "Ngươi không làm nhà nữa.",
      "Đòn tay ngươi bị gãy,",
      "Kèo cột ngươi bị tan,",
      "Tâm ta đạt tịch diệt,",
      "Tham ái thảy tiêu vong."
    ]
  },
  {
    id: 155, chapterId: 11,
    lines: [
      "Lúc trẻ không Phạm hạnh,",
      "Không tìm kiếm bạc tiền.",
      "Như cò già bên ao,",
      "Ủ rũ, không tôm cá."
    ]
  },
  {
    id: 156, chapterId: 11,
    lines: [
      "Lúc trẻ không Phạm hạnh,",
      "Không tìm kiếm bạc tiền.",
      "Như cây cung bị gãy,",
      "Thở than những ngày qua."
    ]
  },

  // XII. PHẨM TỰ NGÃ (157 - 166)
  {
    id: 157, chapterId: 12,
    lines: [
      "Nếu biết yêu tự ngã,",
      "Phải khéo bảo vệ mình,",
      "Người trí trong ba canh,",
      "Phải luôn luôn tỉnh thức."
    ]
  },
  {
    id: 158, chapterId: 12,
    lines: [
      "Trước hết tự đặt mình,",
      "Vào những gì thích đáng,",
      "Sau mới giáo hóa người,",
      "Người trí khỏi bị nhiễm."
    ]
  },
  {
    id: 159, chapterId: 12,
    lines: [
      "Hãy tự làm cho mình,",
      "Như điều mình dạy người,",
      "Khéo tự điều, điều người,",
      "Khó thay, tự điều phục."
    ]
  },
  {
    id: 160, chapterId: 12,
    lines: [
      "Tự mình y chỉ mình,",
      "Nào có y chỉ khác,",
      "Nhờ khéo điều phục mình,",
      "Được y chỉ khó được."
    ]
  },
  {
    id: 161, chapterId: 12,
    lines: [
      "Điều ác tự mình làm,",
      "Tự mình sinh, mình tạo,",
      "Nghiền nát kẻ ngu si,",
      "Như kim cương, ngọc báu."
    ]
  },
  {
    id: 162, chapterId: 12,
    lines: [
      "Phá giới quá trầm trọng,",
      "Như dây leo bám cây,",
      "Gieo hại cho tự thân,",
      "Như kẻ thù mong ước."
    ]
  },
  {
    id: 163, chapterId: 12,
    lines: [
      "Dễ làm các điều ác,",
      "Dễ làm tự hại mình.",
      "Còn việc lành, việc tốt,",
      "Thật tối thượng khó làm."
    ]
  },
  {
    id: 164, chapterId: 12,
    lines: [
      "Kẻ ngu si miệt thị,",
      "Giáo pháp bậc La Hán,",
      "Bậc Thánh, bậc Chính mạng",
      "Chính do ác kiến này,",
      "Như quả loại cây lau,",
      "Mang quả tự hoại diệt."
    ]
  },
  {
    id: 165, chapterId: 12,
    lines: [
      "Tự mình làm điều ác,",
      "Tự mình làm nhiễm ô.",
      "Tự mình không làm ác,",
      "Tự mình làm thanh tịnh.",
      "Tịnh, không tịnh tự mình,",
      "Không ai thanh tịnh ai."
    ]
  },
  {
    id: 166, chapterId: 12,
    lines: [
      "Dù lợi người bao nhiêu,",
      "Chớ quên phần tự lợi,",
      "Nhờ thắng trí tư lợi,",
      "Hãy chuyên tâm lợi mình."
    ]
  },

  // XIII. PHẨM THẾ GIAN (167 - 178)
  {
    id: 167, chapterId: 13,
    lines: [
      "Chớ theo pháp hạ liệt,",
      "Chớ sống mặc, buông lung,",
      "Chớ tin theo tà kiến,",
      "Chớ tăng trưởng tục trần."
    ]
  },
  {
    id: 168, chapterId: 13,
    lines: [
      "Nỗ lực, chớ phóng dật,",
      "Hãy sống theo chính hạnh,",
      "Người chính hạnh hưởng lạc,",
      "Cả đời này, đời sau."
    ]
  },
  {
    id: 169, chapterId: 13,
    lines: [
      "Hãy khéo sống chính hạnh,",
      "Chớ sống theo tà hạnh,",
      "Người chính hạnh hưởng lạc,",
      "Cả đời này, đời sau."
    ]
  },
  {
    id: 170, chapterId: 13,
    lines: [
      "Hãy nhìn như bọt nước,",
      "Hãy nhìn như cảnh huyễn,",
      "Quán nhìn đời như vậy,",
      "Thần chết không bắt gặp."
    ]
  },
  {
    id: 171, chapterId: 13,
    lines: [
      "Hãy đến nhìn đời này,",
      "Như xe vua lộng lẫy,",
      "Người ngu mới tham đắm,",
      "Kẻ trí nào đắm say."
    ]
  },
  {
    id: 172, chapterId: 13,
    lines: [
      "Ai sống trước buông lung,",
      "Sau sống không phóng dật,",
      "Chói sáng rực đời này,",
      "Như trăng thoát mây che."
    ]
  },
  {
    id: 173, chapterId: 13,
    lines: [
      "Ai dùng các hạnh lành,",
      "Làm xóa mờ nghiệp ác,",
      "Chói sáng rực đời này,",
      "Như trăng thoát mây che."
    ]
  },
  {
    id: 174, chapterId: 13,
    lines: [
      "Đời này thật mù quáng,",
      "Ít kẻ thấy rõ ràng.",
      "Như chim thoát khỏi lưới,",
      "Rất ít đi thiên giới."
    ]
  },
  {
    id: 175, chapterId: 13,
    lines: [
      "Như chim thiên nga bay,",
      "Thần thông liệng giữa trời.",
      "Chiến thắng ma, ma quân,",
      "Kẻ trí thoát đời này."
    ]
  },
  {
    id: 176, chapterId: 13,
    lines: [
      "Ai vi phạm một pháp,",
      "Ai nói lời vọng ngữ,",
      "Ai bác bỏ đời sau,",
      "Không ác nào không làm."
    ]
  },
  {
    id: 177, chapterId: 13,
    lines: [
      "Keo kiệt không sinh thiên,",
      "Kẻ ngu ghét bố thí.",
      "Người trí thích bố thí,",
      "Đời sau được hưởng lạc."
    ]
  },
  {
    id: 178, chapterId: 13,
    lines: [
      "Hơn thống lĩnh cõi đất,",
      "Hơn được sinh cõi trời,",
      "Hơn chủ trì vũ trụ,",
      "Quả Dự lưu tối thắng."
    ]
  },

  // XIV. PHẨM PHẬT ĐÀ (179 - 196)
  {
    id: 179, chapterId: 14,
    lines: [
      "Vị chiến thắng không bại,",
      "Vị bước đi trên đời,",
      "Không dấu tích chiến thắng,",
      "Phật giới rộng mênh mông,",
      "Ai dùng chân theo dõi,",
      "Bậc không để dấu tích?"
    ]
  },
  {
    id: 180, chapterId: 14,
    lines: [
      "Ai giải tỏa lưới tham,",
      "Ái phược hết dắt dẫn,",
      "Phật giới rộng mênh mông,",
      "Ai dùng chân theo dõi,",
      "Bậc không để dấu tích?"
    ]
  },
  {
    id: 181, chapterId: 14,
    lines: [
      "Người trí chuyên thiền định,",
      "Thích an tịnh, viễn ly,",
      "Chư thiên đều ái kính,",
      "Bậc chính giác, chính niệm."
    ]
  },
  {
    id: 182, chapterId: 14,
    lines: [
      "Khó thay, được làm người,",
      "Khó thay, được sống còn,",
      "Khó thay, nghe Diệu pháp,",
      "Khó thay, Phật ra đời."
    ]
  },
  {
    id: 183, chapterId: 14,
    lines: [
      "Không làm mọi điều ác,",
      "Thành tựu các hạnh lành,",
      "Tâm ý giữ trong sạch,",
      "Chính lời chư Phật dạy."
    ]
  },
  {
    id: 184, chapterId: 14,
    lines: [
      "Chư Phật thường giảng dạy:",
      "Nhẫn, khổ hạnh tối thượng,",
      "Niết bàn, quả tối thượng,",
      "Xuất gia không phá người,",
      "Sa môn không hại người."
    ]
  },
  {
    id: 185, chapterId: 14,
    lines: [
      "Không phỉ báng, phá hoại,",
      "Hộ trì giới căn bản,",
      "Ăn uống có tiết độ,",
      "Sàng tọa chỗ nhàn tịnh,",
      "Chuyên chú tăng thượng tâm,",
      "Chính lời chư Phật dạy."
    ]
  },
  {
    id: 186, chapterId: 14,
    lines: [
      "Dù mưa bằng tiền vàng,",
      "Các dục khó thỏa mãn.",
      "Dục đắng nhiều, ngọt ít,",
      "Biết vậy là bậc trí."
    ]
  },
  {
    id: 187, chapterId: 14,
    lines: [
      "Đệ tử bậc Chính Giác,",
      "Không tìm cầu dục lạc,",
      "Dù là dục chư thiên,",
      "Chỉ ưa thích ái diệt."
    ]
  },
  {
    id: 188, chapterId: 14,
    lines: [
      "Loài người sợ hoảng hốt,",
      "Tìm nhiều chỗ quy y,",
      "Hoặc rừng rậm, núi non,",
      "Hoặc vườn cây, đền tháp."
    ]
  },
  {
    id: 189, chapterId: 14,
    lines: [
      "Quy y ấy không ổn,",
      "Không quy y tối thượng.",
      "Quy y các chỗ ấy,",
      "Không thoát mọi khổ đau."
    ]
  },
  {
    id: 190, chapterId: 14,
    lines: [
      "Ai quy y đức Phật,",
      "Chính pháp và chư Tăng,",
      "Ai dùng chính tri kiến,",
      "Thấy được bốn Thánh đế."
    ]
  },
  {
    id: 191, chapterId: 14,
    lines: [
      "Thấy Khổ và Khổ tập,",
      "Thấy sự khổ vượt qua,",
      "Thấy đường Thánh tám ngành,",
      "Đưa đến khổ não tận."
    ]
  },
  {
    id: 192, chapterId: 14,
    lines: [
      "Thật quy y an ổn,",
      "Thật quy y tối thượng,",
      "Có quy y như vậy,",
      "Mới thoát mọi khổ đau."
    ]
  },
  {
    id: 193, chapterId: 14,
    lines: [
      "Khó gặp bậc Thánh nhân,",
      "Không phải đâu cũng có.",
      "Chỗ nào bậc trí sinh,",
      "Gia đình tất an lạc."
    ]
  },
  {
    id: 194, chapterId: 14,
    lines: [
      "Vui thay, Phật ra đời,",
      "Vui thay, Pháp được giảng,",
      "Vui thay, Tăng hòa hợp,",
      "Hòa hợp tu, vui thay."
    ]
  },
  {
    id: 195, chapterId: 14,
    lines: [
      "Cúng dường bậc đáng cúng,",
      "Chư Phật hoặc đệ tử,",
      "Các bậc vượt hý luận,",
      "Đoạn diệt mọi sầu bi."
    ]
  },
  {
    id: 196, chapterId: 14,
    lines: [
      "Cúng dường bậc như vậy,",
      "Tịch tịnh, không sợ hãi,",
      "Các công đức như vậy,",
      "Không ai ước lường được."
    ]
  },

  // XV. PHẨM AN LẠC (197 - 208)
  {
    id: 197, chapterId: 15,
    lines: [
      "Vui thay, chúng ta sống,",
      "Không hận giữa hận thù.",
      "Giữa những người thù hận,",
      "Ta sống không hận thù."
    ]
  },
  {
    id: 198, chapterId: 15,
    lines: [
      "Vui thay, chúng ta sống,",
      "Không bệnh giữa ốm đau.",
      "Giữa những người bệnh hoạn,",
      "Ta sống không ốm đau."
    ]
  },
  {
    id: 199, chapterId: 15,
    lines: [
      "Vui thay, chúng ta sống,",
      "Không rộn giữa rộn ràng.",
      "Giữa những người rộn ràng,",
      "Ta sống không rộn ràng."
    ]
  },
  {
    id: 200, chapterId: 15,
    lines: [
      "Vui thay, chúng ta sống,",
      "Không gì gọi của ta.",
      "Ta sẽ hưởng hỷ lạc,",
      "Như chư thiên Quang Âm."
    ]
  },
  {
    id: 201, chapterId: 15,
    lines: [
      "Chiến thắng sinh thù oán,",
      "Thất bại chịu khổ đau,",
      "Sống tịch tịnh an lạc,",
      "Bỏ sau mọi thắng bại."
    ]
  },
  {
    id: 202, chapterId: 15,
    lines: [
      "Lửa nào sánh lửa tham,",
      "Ác nào bằng sân hận,",
      "Khổ nào sánh khổ uẩn,",
      "Lạc nào bằng tịnh lạc?"
    ]
  },
  {
    id: 203, chapterId: 15,
    lines: [
      "Đói ăn, bệnh tối thượng,",
      "Các hành, khổ tối thượng,",
      "Hiểu như thật là vậy,",
      "Niết bàn, lạc tối thượng."
    ]
  },
  {
    id: 204, chapterId: 15,
    lines: [
      "Không bệnh, lợi tối thượng,",
      "Biết đủ, tiền tối thượng,",
      "Thành tín đối với nhau,",
      "Là bà con tối thượng,",
      "Niết bàn, lạc tối thượng."
    ]
  },
  {
    id: 205, chapterId: 15,
    lines: [
      "Đã nếm vị độc cư,",
      "Được hưởng vị nhàn tịnh,",
      "Không sợ hãi, không ác,",
      "Nếm được vị pháp hỷ."
    ]
  },
  {
    id: 206, chapterId: 15,
    lines: [
      "Lành thay thấy Thánh nhân,",
      "Sống chung thường hưởng lạc.",
      "Không thấy những người ngu,",
      "Thường thường được an lạc."
    ]
  },
  {
    id: 207, chapterId: 15,
    lines: [
      "Sống chung với người ngu,",
      "Lâu dài bị lo buồn.",
      "Khổ thay gần người ngu,",
      "Như thường sống kẻ thù.",
      "Vui thay, gần người trí,",
      "Như chung sống bà con."
    ]
  },
  {
    id: 208, chapterId: 15,
    lines: [
      "Bậc hiền sĩ, trí tuệ,",
      "Bậc nghe nhiều, trì giới,",
      "Bậc tự chế, Thánh nhân,",
      "Hãy gần gũi, thân cận,",
      "Thiện nhân, trí giả ấy,",
      "Như trăng theo đường sao."
    ]
  },

  // XVI. PHẨM HỶ ÁI (209 - 220)
  {
    id: 209, chapterId: 16,
    lines: [
      "Tự chuyên không đáng chuyên,",
      "Không chuyên việc đáng chuyên,",
      "Bỏ đích, theo hỷ ái,",
      "Ganh tị bậc tự chuyên."
    ]
  },
  {
    id: 210, chapterId: 16,
    lines: [
      "Chớ gần gũi người yêu,",
      "Trọn đời xa kẻ ghét.",
      "Yêu không gặp là khổ,",
      "Oán phải gặp cũng đau."
    ]
  },
  {
    id: 211, chapterId: 16,
    lines: [
      "Do vậy chớ yêu ai,",
      "Ái biệt ly là ác.",
      "Những ai không yêu ghét,",
      "Không thể có buộc ràng."
    ]
  },
  {
    id: 212, chapterId: 16,
    lines: [
      "Do ái sinh sầu ưu,",
      "Do ái sinh sợ hãi,",
      "Ai thoát khỏi tham ái,",
      "Không sầu, đâu sợ hãi."
    ]
  },
  {
    id: 213, chapterId: 16,
    lines: [
      "Ái luyến sinh sầu ưu,",
      "Ái luyến sinh sợ hãi.",
      "Ai giải thoát ái luyến,",
      "Không sầu, đâu sợ hãi."
    ]
  },
  {
    id: 214, chapterId: 16,
    lines: [
      "Hỷ ái sinh sầu ưu,",
      "Hỷ ái sinh sợ hãi.",
      "Ai giải thoát hỷ ái,",
      "Không sầu, đâu sợ hãi."
    ]
  },
  {
    id: 215, chapterId: 16,
    lines: [
      "Dục ái sinh sầu ưu,",
      "Dục ái sinh sợ hãi,",
      "Ai thoát khỏi dục ái,",
      "Không sầu, đâu sợ hãi."
    ]
  },
  {
    id: 216, chapterId: 16,
    lines: [
      "Tham ái sinh sầu ưu,",
      "Tham ái sinh sợ hãi.",
      "Ai thoát khỏi tham ái,",
      "Không sầu, đâu sợ hãi."
    ]
  },
  {
    id: 217, chapterId: 16,
    lines: [
      "Đủ giới đức, chính kiến,",
      "Trú pháp, chứng chân lý,",
      "Tự làm công việc mình,",
      "Được quần chúng ái kính."
    ]
  },
  {
    id: 218, chapterId: 16,
    lines: [
      "Ước vọng pháp ly ngôn,",
      "Ý cảm xúc thượng quả,",
      "Tâm thoát ly ác dục,",
      "Xứng gọi bậc Thượng lưu."
    ]
  },
  {
    id: 219, chapterId: 16,
    lines: [
      "Khách lâu ngày ly hương,",
      "An toàn từ xa về,",
      "Bà con cùng thân hữu,",
      "Hân hoan đón chào mừng."
    ]
  },
  {
    id: 220, chapterId: 16,
    lines: [
      "Cũng vậy, các phước nghiệp,",
      "Đón chào người làm lành,",
      "Đời này đến đời kia,",
      "Như thân nhân đón chào."
    ]
  },

  // XVII. PHẨM PHẪN NỘ (221 - 234)
  {
    id: 221, chapterId: 17,
    lines: [
      "Bỏ phẫn nộ, ly mạn,",
      "Vượt qua mọi kiết sử,",
      "Không chấp trước danh sắc,",
      "Khổ không theo vô sản."
    ]
  },
  {
    id: 222, chapterId: 17,
    lines: [
      "Ai chặn được phẫn nộ,",
      "Như dừng xe đang lăn,",
      "Ta gọi người đánh xe,",
      "Kẻ khác, cầm cương hờ."
    ]
  },
  {
    id: 223, chapterId: 17,
    lines: [
      "Lấy không giận thắng giận,",
      "Lấy thiện thắng không thiện,",
      "Lấy thí thắng xan tham,",
      "Lấy chân thắng hư ngụy."
    ]
  },
  {
    id: 224, chapterId: 17,
    lines: [
      "Nói thật, không phẫn nộ,",
      "Của ít thí người xin,",
      "Nhờ ba việc lành này,",
      "Người đến gần thiên giới."
    ]
  },
  {
    id: 225, chapterId: 17,
    lines: [
      "Bậc hiền không hại ai,",
      "Thân thường được chế ngự,",
      "Đạt được cảnh bất tử,",
      "Đến đây, không ưu sầu."
    ]
  },
  {
    id: 226, chapterId: 17,
    lines: [
      "Những người thường giác tỉnh,",
      "Ngày đêm siêng tu học,",
      "Chuyên tâm hướng Niết bàn,",
      "Mọi lậu hoặc được tiêu."
    ]
  },
  {
    id: 227, chapterId: 17,
    lines: [
      "A Tu La, nên biết,",
      "Xưa vậy, nay cũng vậy,",
      "Ngồi im, bị người chê,",
      "Nói nhiều, bị người chê.",
      "Nói vừa phải, bị chê.",
      "Làm người không bị chê,",
      "Thật khó tìm ở đời."
    ]
  },
  {
    id: 228, chapterId: 17,
    lines: [
      "Xưa, vị lai và nay,",
      "Đâu có sự kiện này:",
      "Người hoàn toàn bị chê,",
      "Người trọn vẹn được khen."
    ]
  },
  {
    id: 229, chapterId: 17,
    lines: [
      "Sáng suốt, thẩm xét kỹ,",
      "Bậc có trí tán thán,",
      "Bậc trí không tỳ vết,",
      "Đầy đủ giới định tuệ."
    ]
  },
  {
    id: 230, chapterId: 17,
    lines: [
      "Hạnh sáng như vàng ròng,",
      "Ai dám chê vị ấy?",
      "Chư thiên phải khen thưởng,",
      "Phạm thiên cũng tán dương."
    ]
  },
  {
    id: 231, chapterId: 17,
    lines: [
      "Giữ thân đừng phẫn nộ,",
      "Phòng thân, khéo bảo vệ,",
      "Từ bỏ thân làm ác,",
      "Với thân, làm hạnh lành."
    ]
  },
  {
    id: 232, chapterId: 17,
    lines: [
      "Giữ lời đừng phẫn nộ,",
      "Phòng lời, khéo bảo vệ,",
      "Từ bỏ lời thô ác,",
      "Với lời, nói điều lành."
    ]
  },
  {
    id: 233, chapterId: 17,
    lines: [
      "Giữ ý đừng phẫn nộ,",
      "Phòng ý, khéo bảo vệ,",
      "Từ bỏ ý nghĩ ác,",
      "Với ý, nghĩ hạnh lành."
    ]
  },
  {
    id: 234, chapterId: 17,
    lines: [
      "Bậc trí bảo vệ thân,",
      "Bảo vệ luôn lời nói,",
      "Bảo vệ cả tâm tư,",
      "Ba nghiệp khéo bảo vệ."
    ]
  },

  // XVIII. PHẨM CẤU UẾ (235 - 255)
  {
    id: 235, chapterId: 18,
    lines: [
      "Ngươi nay giống lá héo,",
      "Diêm sứ đang chờ ngươi,",
      "Ngươi đứng trước cửa chết,",
      "Đường trường thiếu tư lương."
    ]
  },
  {
    id: 236, chapterId: 18,
    lines: [
      "Hãy tự làm hòn đảo,",
      "Tinh cần gấp, sáng suốt,",
      "Trừ cấu uế, thanh tịnh,",
      "Đến Thánh địa chư thiên."
    ]
  },
  {
    id: 237, chapterId: 18,
    lines: [
      "Đời ngươi nay sắp tàn,",
      "Tiến gần đến Diêm vương,",
      "Giữa đường không nơi nghỉ,",
      "Đường trường thiếu tư lương."
    ]
  },
  {
    id: 238, chapterId: 18,
    lines: [
      "Hãy tự làm hòn đảo,",
      "Tinh cần gấp, sáng suốt,",
      "Trừ cấu uế, thanh tịnh,",
      "Chẳng trở lại sinh già."
    ]
  },
  {
    id: 239, chapterId: 18,
    lines: [
      "Bậc trí theo tuần tự,",
      "Từng sát na trừ dần,",
      "Như thợ vàng lọc bụi,",
      "Trừ cấu uế nơi mình."
    ]
  },
  {
    id: 240, chapterId: 18,
    lines: [
      "Như sét từ sắt sinh,",
      "Sét sinh lại ăn sắt,",
      "Cũng vậy, quá lợi dưỡng,",
      "Tự nghiệp dẫn cõi ác."
    ]
  },
  {
    id: 241, chapterId: 18,
    lines: [
      "Không tụng làm nhớp kinh,",
      "Không đứng dậy, bẩn nhà,",
      "Biếng nhác làm nhơ sắc,",
      "Phóng dật uế người canh."
    ]
  },
  {
    id: 242, chapterId: 18,
    lines: [
      "Tà hạnh nhơ đàn bà,",
      "Xan tham nhớp kẻ thí,",
      "Ác pháp là vết nhơ,",
      "Đời này và đời sau."
    ]
  },
  {
    id: 243, chapterId: 18,
    lines: [
      "Trong hàng cấu uế ấy,",
      "Vô minh, nhơ tối thượng.",
      "Đoạn nhơ ấy, tỳ kheo,",
      "Thành bậc không uế nhiễm."
    ]
  },
  {
    id: 244, chapterId: 18,
    lines: [
      "Dễ thay, sống không hổ,",
      "Sống lỗ mãng như quạ,",
      "Sống công kích huênh hoang,",
      "Sống liều lĩnh, nhiễm ô."
    ]
  },
  {
    id: 245, chapterId: 18,
    lines: [
      "Khó thay, sống xấu hổ,",
      "Thường thường cầu thanh tịnh,",
      "Sống vô tư, khiêm tốn,",
      "Trong sạch và sáng suốt."
    ]
  },
  {
    id: 246, chapterId: 18,
    lines: [
      "Ai ở đời sát sinh,",
      "Nói láo, không chân thật,",
      "Ở đời lấy không cho,",
      "Qua lại với vợ người."
    ]
  },
  {
    id: 247, chapterId: 18,
    lines: [
      "Uống rượu men, rượu nấu,",
      "Người sống đam mê vậy,",
      "Chính ngay tại đời này,",
      "Tự đào bới gốc mình."
    ]
  },
  {
    id: 248, chapterId: 18,
    lines: [
      "Vậy người, hãy nên biết,",
      "Không chế ngự là ác.",
      "Chớ để tham, phi pháp,",
      "Làm người đau khổ dài."
    ]
  },
  {
    id: 249, chapterId: 18,
    lines: [
      "Do tín tâm, hỷ tâm,",
      "Loài người mới bố thí.",
      "Ở đây ai bất mãn,",
      "Người khác được ăn uống,",
      "Người ấy ngày hoặc đêm,",
      "Không đạt được tâm định."
    ]
  },
  {
    id: 250, chapterId: 18,
    lines: [
      "Ai cắt được, phá được,",
      "Tận gốc nhổ tâm ấy,",
      "Người ấy ngày hoặc đêm,",
      "Đạt được tâm thiền định."
    ]
  },
  {
    id: 251, chapterId: 18,
    lines: [
      "Lửa nào bằng lửa tham,",
      "Chấp nào bằng sân hận,",
      "Lưới nào bằng lưới si,",
      "Sông nào bằng sông ái."
    ]
  },
  {
    id: 252, chapterId: 18,
    lines: [
      "Dễ thay, thấy lỗi người,",
      "Lỗi mình thấy mới khó.",
      "Lỗi người ta phanh tìm,",
      "Như sàng trấu trong gạo.",
      "Còn lỗi mình che đậy,",
      "Như kẻ gian giấu bài."
    ]
  },
  {
    id: 253, chapterId: 18,
    lines: [
      "Ai thấy lỗi của người,",
      "Thường sinh lòng chỉ trích,",
      "Người ấy lậu hoặc tăng,",
      "Rất xa lậu hoặc diệt."
    ]
  },
  {
    id: 254, chapterId: 18,
    lines: [
      "Hư không, không dấu chân,",
      "Ngoài đây, không Sa môn,",
      "Chúng sinh thích hý luận,",
      "Như Lai, hý luận trừ."
    ]
  },
  {
    id: 255, chapterId: 18,
    lines: [
      "Hư không, không dấu chân,",
      "Ngoài đây, không Sa môn,",
      "Các hành không thường trú,",
      "Chư Phật không dao động."
    ]
  },

  // XIX. PHẨM PHÁP TRỤ (256 - 272)
  {
    id: 256, chapterId: 19,
    lines: [
      "Người đâu phải pháp trụ,",
      "Xử sự quá chuyên chế,",
      "Bậc trí cần phân biệt,",
      "Cả hai chính và tà."
    ]
  },
  {
    id: 257, chapterId: 19,
    lines: [
      "Không chuyên chế, đúng pháp,",
      "Công bằng dắt dẫn người,",
      "Bậc trí sống đúng pháp,",
      "Thật xứng danh pháp trụ."
    ]
  },
  {
    id: 258, chapterId: 19,
    lines: [
      "Không phải vì nói nhiều,",
      "Mới xứng danh bậc trí.",
      "An ổn, không oán sợ,",
      "Thật đáng gọi bậc trí."
    ]
  },
  {
    id: 259, chapterId: 19,
    lines: [
      "Không phải vì nói nhiều,",
      "Mới xứng danh trì pháp.",
      "Những ai tuy nghe ít,",
      "Nhưng thân hành đúng pháp,",
      "Không phóng túng Chính pháp,",
      "Mới xứng danh trì pháp."
    ]
  },
  {
    id: 260, chapterId: 19,
    lines: [
      "Không phải là trưởng lão,",
      "Dù cho có bạc đầu,",
      "Người chỉ tuổi tác cao,",
      "Được gọi là Lão ngu."
    ]
  },
  {
    id: 261, chapterId: 19,
    lines: [
      "Ai chân thật, đúng pháp,",
      "Không hại, biết chế phục,",
      "Bậc trí không cấu uế,",
      "Mới xứng danh Trưởng lão."
    ]
  },
  {
    id: 262, chapterId: 19,
    lines: [
      "Không phải nói lưu loát,",
      "Không phải sắc mặt đẹp,",
      "Thành được người lương thiện,",
      "Nếu ganh, tham, dối trá."
    ]
  },
  {
    id: 263, chapterId: 19,
    lines: [
      "Ai cắt được, phá được,",
      "Tận gốc nhổ tâm ấy,",
      "Người trí ấy diệt sân,",
      "Được gọi người hiền thiện."
    ]
  },
  {
    id: 264, chapterId: 19,
    lines: [
      "Đầu trọc, không Sa môn,",
      "Nếu phóng túng, nói láo.",
      "Ai còn đầy dục tham,",
      "Sao được gọi Sa môn."
    ]
  },
  {
    id: 265, chapterId: 19,
    lines: [
      "Ai lắng dịu hoàn toàn,",
      "Các điều ác lớn nhỏ,",
      "Vì lắng dịu ác pháp,",
      "Được gọi là Sa môn."
    ]
  },
  {
    id: 266, chapterId: 19,
    lines: [
      "Chỉ khất thực nhờ người,",
      "Đâu phải là tỳ kheo,",
      "Phải theo pháp toàn diện,",
      "Khất sĩ không, không đủ."
    ]
  },
  {
    id: 267, chapterId: 19,
    lines: [
      "Ai vượt qua thiện ác,",
      "Chuyên sống đời Phạm hạnh,",
      "Sống thẩm sát ở đời,",
      "Mới xứng danh tỳ kheo."
    ]
  },
  {
    id: 268, chapterId: 19,
    lines: [
      "Im lặng nhưng ngu si,",
      "Đâu được gọi ẩn sĩ.",
      "Như người cầm cán cân,",
      "Bậc trí chọn điều lành."
    ]
  },
  {
    id: 269, chapterId: 19,
    lines: [
      "Từ bỏ các ác pháp,",
      "Mới thật là ẩn sĩ.",
      "Ai thật hiểu hai đời,",
      "Mới được gọi ẩn sĩ."
    ]
  },
  {
    id: 270, chapterId: 19,
    lines: [
      "Còn sát hại sinh linh,",
      "Đâu được gọi hiền Thánh.",
      "Không hại mọi hữu tình,",
      "Mới được gọi hiền Thánh."
    ]
  },
  {
    id: 271, chapterId: 19,
    lines: [
      "Chẳng phải chỉ giới cấm,",
      "Cũng không phải học nhiều,",
      "Chẳng phải chứng thiền định,",
      "Sống thanh vắng một mình."
    ]
  },
  {
    id: 272, chapterId: 19,
    lines: [
      "Ta hưởng an ổn lạc,",
      "Phàm phu chưa hưởng được,",
      "Tỳ kheo, chớ tự tin,",
      "Khi lậu hoặc chưa diệt."
    ]
  },

  // XX. PHẨM ĐẠO (273 - 289)
  {
    id: 273, chapterId: 20,
    lines: [
      "Tám ngành, đường thù thắng,",
      "Bốn đế, lý thù thắng,",
      "Ly tham, pháp thù thắng,",
      "Giữa các loài hai chân,",
      "Pháp nhãn, người thù thắng."
    ]
  },
  {
    id: 274, chapterId: 20,
    lines: [
      "Đường này, không đường khác,",
      "Đưa đến kiến thanh tịnh.",
      "Nếu ngươi theo đường này,",
      "Ma quân sẽ mê loạn."
    ]
  },
  {
    id: 275, chapterId: 20,
    lines: [
      "Nếu ngươi theo đường này,",
      "Đau khổ được đoạn tận,",
      "Ta dạy ngươi con đường,",
      "Với trí, gai chướng diệt."
    ]
  },
  {
    id: 276, chapterId: 20,
    lines: [
      "Ngươi hãy nhiệt tình làm,",
      "Như Lai chỉ thuyết dạy,",
      "Người hành trì thiền định,",
      "Thoát trói buộc Ác ma."
    ]
  },
  {
    id: 277, chapterId: 20,
    lines: [
      "Tất cả hành vô thường,",
      "Với tuệ, quán thấy vậy,",
      "Đau khổ được nhàm chán,",
      "Chính con đường thanh tịnh."
    ]
  },
  {
    id: 278, chapterId: 20,
    lines: [
      "Tất cả hành khổ đau,",
      "Với tuệ, quán thấy vậy,",
      "Đau khổ được nhàm chán,",
      "Chính con đường thanh tịnh."
    ]
  },
  {
    id: 279, chapterId: 20,
    lines: [
      "Tất cả pháp vô ngã,",
      "Với tuệ, quán thấy vậy,",
      "Đau khổ được nhàm chán,",
      "Chính con đường thanh tịnh."
    ]
  },
  {
    id: 280, chapterId: 20,
    lines: [
      "Khi cần, không nỗ lực,",
      "Tuy trẻ mạnh, nhưng lười,",
      "Chí nhu nhược, biếng nhác,",
      "Với trí tuệ thụ động,",
      "Sao tìm được chính đạo."
    ]
  },
  {
    id: 281, chapterId: 20,
    lines: [
      "Lời nói được thận trọng,",
      "Tâm tư khéo hộ phòng,",
      "Thân chớ làm điều ác,",
      "Hãy giữ ba nghiệp tịnh,",
      "Chứng đạo Thánh nhân dạy."
    ]
  },
  {
    id: 282, chapterId: 20,
    lines: [
      "Tu thiền, trí tuệ sinh,",
      "Bỏ thiền, trí tuệ diệt.",
      "Biết con đường hai ngã,",
      "Đưa đến hữu, phi hữu,",
      "Hãy tự mình nỗ lực,",
      "Khiến trí tuệ tăng trưởng."
    ]
  },
  {
    id: 283, chapterId: 20,
    lines: [
      "Đốn rừng, không đốn cây,",
      "Từ rừng, sinh sợ hãi.",
      "Đốn rừng và ái dục,",
      "Tỳ kheo hãy tịch tịnh."
    ]
  },
  {
    id: 284, chapterId: 20,
    lines: [
      "Khi nào chưa cắt tiệt,",
      "Ái dục giữa gái trai,",
      "Tâm ý vẫn buộc ràng,",
      "Như bò con vú mẹ."
    ]
  },
  {
    id: 285, chapterId: 20,
    lines: [
      "Tự cắt dây ái dục,",
      "Như tay bẻ sen thu,",
      "Hãy tu đạo tịch tịnh,",
      "Niết bàn, Thiện Thệ dạy."
    ]
  },
  {
    id: 286, chapterId: 20,
    lines: [
      "Mùa mưa ta ở đây,",
      "Đông, Hạ cũng ở đây,",
      "Người ngu tâm tưởng vậy,",
      "Không tự giác hiểm nguy."
    ]
  },
  {
    id: 287, chapterId: 20,
    lines: [
      "Người tâm ý đắm say,",
      "Con cái và súc vật,",
      "Tử thần bắt người ấy,",
      "Như lụt trôi làng ngủ."
    ]
  },
  {
    id: 288, chapterId: 20,
    lines: [
      "Một khi tử thần đến,",
      "Không có con che chở,",
      "Không cha, không bà con,",
      "Không thân thích che chở."
    ]
  },
  {
    id: 289, chapterId: 20,
    lines: [
      "Biết rõ ý nghĩa này,",
      "Bậc trí lo trì giới,",
      "Mau lẹ làm thanh tịnh,",
      "Con đường đến Niết bàn."
    ]
  },

  // XXI. PHẨM TẠP LỤC (290 - 305)
  {
    id: 290, chapterId: 21,
    lines: [
      "Nhờ từ bỏ lạc nhỏ,",
      "Thấy được lạc lớn hơn.",
      "Bậc trí bỏ lạc nhỏ,",
      "Thấy được lạc lớn hơn."
    ]
  },
  {
    id: 291, chapterId: 21,
    lines: [
      "Gieo khổ đau cho người,",
      "Mong cầu lạc cho mình,",
      "Bị hận thù buộc ràng,",
      "Không sao thoát hận thù."
    ]
  },
  {
    id: 292, chapterId: 21,
    lines: [
      "Việc đáng làm, không làm,",
      "Không đáng làm, lại làm,",
      "Người ngạo mạn, phóng dật,",
      "Lậu hoặc ắt tăng trưởng."
    ]
  },
  {
    id: 293, chapterId: 21,
    lines: [
      "Người siêng năng, cần mẫn,",
      "Thường thường quán thân niệm,",
      "Không làm việc không đáng,",
      "Gắng làm việc đáng làm,",
      "Người tư niệm giác tỉnh,",
      "Lậu hoặc được tiêu trừ."
    ]
  },
  {
    id: 294, chapterId: 21,
    lines: [
      "Sau khi giết mẹ cha,",
      "Giết hai vua Sát ly,",
      "Giết vương quốc, quần thần,",
      "Vô ưu, Phạm chí sống."
    ]
  },
  {
    id: 295, chapterId: 21,
    lines: [
      "Sau khi giết mẹ cha,",
      "Hai vua Bà la môn,",
      "Giết hổ tướng, thứ năm,",
      "Vô ưu, Phạm chí sống."
    ]
  },
  {
    id: 296, chapterId: 21,
    lines: [
      "Đệ tử Gotama,",
      "Luôn luôn tự tỉnh giác,",
      "Vô luận ngày hay đêm,",
      "Tưởng Phật đà thường niệm."
    ]
  },
  {
    id: 297, chapterId: 21,
    lines: [
      "Đệ tử Gotama,",
      "Luôn luôn tự tỉnh giác,",
      "Vô luận ngày hay đêm,",
      "Tưởng Chính pháp thường niệm."
    ]
  },
  {
    id: 298, chapterId: 21,
    lines: [
      "Đệ tử Gotama,",
      "Luôn luôn tự tỉnh giác,",
      "Vô luận ngày hay đêm,",
      "Tưởng Tăng già thường niệm."
    ]
  },
  {
    id: 299, chapterId: 21,
    lines: [
      "Đệ tử Gotama,",
      "Luôn luôn tự tỉnh giác,",
      "Vô luận ngày hay đêm,",
      "Tưởng sắc thân thường niệm."
    ]
  },
  {
    id: 300, chapterId: 21,
    lines: [
      "Đệ tử Gotama,",
      "Luôn luôn tự tỉnh giác,",
      "Vô luận ngày hay đêm,",
      "Ý vui niềm bất hại."
    ]
  },
  {
    id: 301, chapterId: 21,
    lines: [
      "Đệ tử Gotama,",
      "Luôn luôn tự tỉnh giác,",
      "Vô luận ngày hay đêm,",
      "Ý vui tu thiền quán."
    ]
  },
  {
    id: 302, chapterId: 21,
    lines: [
      "Vui hạnh xuất gia khó,",
      "Tại gia sinh hoạt khó,",
      "Sống bạn không đồng, khổ,",
      "Trôi lăn luân hồi, khổ,",
      "Vậy chớ sống luân hồi,",
      "Chớ chạy theo đau khổ."
    ]
  },
  {
    id: 303, chapterId: 21,
    lines: [
      "Tín tâm, sống giới hạnh,",
      "Đủ danh xưng, tài sản,",
      "Chỗ nào người ấy đến,",
      "Chỗ ấy được cung kính."
    ]
  },
  {
    id: 304, chapterId: 21,
    lines: [
      "Người lành dù ở xa,",
      "Sáng tỏ như núi tuyết.",
      "Người ác dù ở gần,",
      "Như tên bắn đêm đen."
    ]
  },
  {
    id: 305, chapterId: 21,
    lines: [
      "Ai ngồi nằm một mình,",
      "Độc hành không buồn chán,",
      "Tự điều phục một mình,",
      "Sống thoải mái rừng sâu."
    ]
  },

  // XXII. PHẨM ĐỊA NGỤC (306 - 319)
  {
    id: 306, chapterId: 22,
    lines: [
      "Nói láo đọa địa ngục,",
      "Có làm nói không làm,",
      "Cả hai chết đồng đẳng,",
      "Làm người, nghiệp hạ liệt."
    ]
  },
  {
    id: 307, chapterId: 22,
    lines: [
      "Nhiều người khoác cà sa,",
      "Ác hạnh không nhiếp phục,",
      "Người ác do ác hạnh,",
      "Phải sinh cõi địa ngục."
    ]
  },
  {
    id: 308, chapterId: 22,
    lines: [
      "Tốt hơn, nuốt hòn sắt,",
      "Cháy đỏ như lửa hừng,",
      "Hơn ác giới, buông lung,",
      "Ăn đồ ăn quốc độ."
    ]
  },
  {
    id: 309, chapterId: 22,
    lines: [
      "Bốn nạn chờ đợi người,",
      "Phóng dật theo vợ người:",
      "Mắc họa, ngủ không yên,",
      "Bị chê là thứ ba,",
      "Đọa địa ngục, thứ bốn."
    ]
  },
  {
    id: 310, chapterId: 22,
    lines: [
      "Mắc họa, đọa ác thú,",
      "Bị hoảng sợ, ít vui,",
      "Quốc vương phạt trọng hình,",
      "Vậy chớ theo vợ người."
    ]
  },
  {
    id: 311, chapterId: 22,
    lines: [
      "Như cỏ sa vụng nắm,",
      "Tất bị họa đứt tay.",
      "Hạnh Sa môn tà vạy,",
      "Tất bị đọa địa ngục."
    ]
  },
  {
    id: 312, chapterId: 22,
    lines: [
      "Sống phóng đãng, buông lung,",
      "Theo giới cấm ô nhiễm,",
      "Sống Phạm hạnh đáng nghi,",
      "Sao chứng được quả lớn?"
    ]
  },
  {
    id: 313, chapterId: 22,
    lines: [
      "Cần phải làm, nên làm,",
      "Làm cùng tận khả năng,",
      "Xuất gia sống phóng đãng,",
      "Chỉ tăng loạn bụi đời."
    ]
  },
  {
    id: 314, chapterId: 22,
    lines: [
      "Ác hạnh không nên làm,",
      "Làm xong, chịu khổ lụy.",
      "Thiện hạnh ắt nên làm,",
      "Làm xong, không ăn năn."
    ]
  },
  {
    id: 315, chapterId: 22,
    lines: [
      "Như thành ở biên thùy,",
      "Trong ngoài đều phòng hộ,",
      "Cũng vậy, phòng hộ mình,",
      "Sát na chớ buông lung.",
      "Giây phút qua, sầu muộn,",
      "Khi rơi vào địa ngục."
    ]
  },
  {
    id: 316, chapterId: 22,
    lines: [
      "Không đáng hổ, lại hổ,",
      "Việc đáng hổ, lại không,",
      "Do chấp nhận tà kiến,",
      "Chúng sinh đi ác thú."
    ]
  },
  {
    id: 317, chapterId: 22,
    lines: [
      "Không đáng sợ, lại sợ,",
      "Đáng sợ, lại thấy không,",
      "Do chấp nhận tà kiến,",
      "Chúng sinh đi ác thú."
    ]
  },
  {
    id: 318, chapterId: 22,
    lines: [
      "Không lỗi, lại thấy lỗi,",
      "Có lỗi, lại thấy không,",
      "Do chấp nhận tà kiến,",
      "Chúng sinh đi ác thú."
    ]
  },
  {
    id: 319, chapterId: 22,
    lines: [
      "Có lỗi, biết có lỗi,",
      "Không lỗi, biết là không,",
      "Do chấp nhận chính kiến,",
      "Chúng sinh đi cõi lành."
    ]
  },

  // XXIII. PHẨM VOI (320 - 333)
  {
    id: 320, chapterId: 23,
    lines: [
      "Ta như voi giữa trận,",
      "Hứng chịu cung tên rơi,",
      "Chịu đựng mọi phỉ báng,",
      "Ác giới rất nhiều người."
    ]
  },
  {
    id: 321, chapterId: 23,
    lines: [
      "Voi luyện, đưa dự hội,",
      "Ngựa luyện, được vua cưỡi,",
      "Người luyện, bậc tối thượng,",
      "Chịu đựng mọi phỉ báng."
    ]
  },
  {
    id: 322, chapterId: 23,
    lines: [
      "Tốt thay con la thuần,",
      "Thuần chủng loài ngựa Sin,",
      "Đại tượng, voi có ngà,",
      "Tự điều mới tối thượng."
    ]
  },
  {
    id: 323, chapterId: 23,
    lines: [
      "Chẳng phải loài cưỡi ấy,",
      "Đưa người đến Niết bàn,",
      "Chỉ có người tự điều,",
      "Đến đích nhờ điều phục."
    ]
  },
  {
    id: 324, chapterId: 23,
    lines: [
      "Con voi tên Tài Hộ,",
      "Phát dục khó điều phục,",
      "Trói buộc, không ăn uống,",
      "Voi nhớ đến rừng voi."
    ]
  },
  {
    id: 325, chapterId: 23,
    lines: [
      "Người ưa ngủ, ăn lớn,",
      "Nằm lăn lóc qua lại,",
      "Chẳng khác heo no bụng,",
      "Kẻ ngu nhập thai mãi."
    ]
  },
  {
    id: 326, chapterId: 23,
    lines: [
      "Trước tâm này buông lung,",
      "Chạy theo ái, dục, lạc.",
      "Nay Ta chính chế ngự,",
      "Như cầm móc điều voi."
    ]
  },
  {
    id: 327, chapterId: 23,
    lines: [
      "Hãy vui không phóng dật,",
      "Khéo phòng hộ tâm ý,",
      "Kéo mình khỏi ác đạo,",
      "Như voi bị sa lầy."
    ]
  },
  {
    id: 328, chapterId: 23,
    lines: [
      "Nếu được bạn hiền trí,",
      "Đáng sống chung, hạnh lành,",
      "Nhiếp phục mọi hiểm nguy,",
      "Hoan hỷ sống chính niệm."
    ]
  },
  {
    id: 329, chapterId: 23,
    lines: [
      "Không gặp bạn hiền trí,",
      "Đáng sống chung, hạnh lành,",
      "Như vua bỏ nước bại,",
      "Hãy sống riêng cô độc,",
      "Như voi sống rừng voi."
    ]
  },
  {
    id: 330, chapterId: 23,
    lines: [
      "Tốt hơn, sống một mình,",
      "Không kết bạn người ngu,",
      "Độc thân, không ác hạnh,",
      "Sống vô tư vô lự,",
      "Như voi sống rừng voi."
    ]
  },
  {
    id: 331, chapterId: 23,
    lines: [
      "Vui thay, bạn lúc cần,",
      "Vui thay, sống biết đủ,",
      "Vui thay, chết có đức,",
      "Vui thay, mọi khổ đoạn."
    ]
  },
  {
    id: 332, chapterId: 23,
    lines: [
      "Vui thay, hiếu kính mẹ,",
      "Vui thay, hiếu kính cha,",
      "Vui thay, kính Sa môn,",
      "Vui thay, kính hiền Thánh."
    ]
  },
  {
    id: 333, chapterId: 23,
    lines: [
      "Vui thay, già có giới,",
      "Vui thay, tín an trú,",
      "Vui thay, được trí tuệ,",
      "Vui thay, ác không làm."
    ]
  },

  // XXIV. PHẨM THAM ÁI (334 - 359)
  {
    id: 334, chapterId: 24,
    lines: [
      "Người sống đời phóng dật,",
      "Ái tăng như dây leo,",
      "Nhảy đời này đời khác,",
      "Như vượn tham quả rừng."
    ]
  },
  {
    id: 335, chapterId: 24,
    lines: [
      "Ai sống trong đời này,",
      "Bị ái dục buộc ràng,",
      "Sầu khổ sẽ tăng trưởng,",
      "Như cỏ bi gặp mưa."
    ]
  },
  {
    id: 336, chapterId: 24,
    lines: [
      "Ai sống trong đời này,",
      "Ái dục được hàng phục,",
      "Sầu rơi khỏi người ấy,",
      "Như giọt nước lá sen."
    ]
  },
  {
    id: 337, chapterId: 24,
    lines: [
      "Đây điều lành Ta dạy,",
      "Các người tụ họp đây,",
      "Hãy nhổ tận gốc ái,",
      "Như nhổ gốc cỏ bi,",
      "Chớ để ma phá hoại,",
      "Như dòng nước cỏ lau."
    ]
  },
  {
    id: 338, chapterId: 24,
    lines: [
      "Như cây bị chặt đốn,",
      "Gốc chưa hại vẫn bền.",
      "Ái tùy miên chưa nhổ,",
      "Khổ này vẫn sinh hoài."
    ]
  },
  {
    id: 339, chapterId: 24,
    lines: [
      "Ba mươi sáu dòng ái,",
      "Trôi người đến khả ái.",
      "Các tư tưởng tham ái,",
      "Cuốn trôi người tà kiến."
    ]
  },
  {
    id: 340, chapterId: 24,
    lines: [
      "Dòng ái dục chảy khắp,",
      "Như dây leo mọc tràn.",
      "Thấy dây leo vừa sinh,",
      "Với tuệ, hãy đoạn gốc."
    ]
  },
  {
    id: 341, chapterId: 24,
    lines: [
      "Người đời nhớ ái dục,",
      "Ưa thích các hỷ lạc.",
      "Tuy mong cầu an lạc,",
      "Họ vẫn phải sinh, già."
    ]
  },
  {
    id: 342, chapterId: 24,
    lines: [
      "Người bị ái buộc ràng,",
      "Vùng vẫy và hoảng sợ,",
      "Như thỏ bị sa lưới.",
      "Họ sinh ái trói buộc,",
      "Chịu khổ đau dài dài."
    ]
  },
  {
    id: 343, chapterId: 24,
    lines: [
      "Người bị ái buộc ràng,",
      "Vùng vẫy và hoảng sợ,",
      "Như thỏ bị sa lưới.",
      "Do vậy vị tỳ kheo,",
      "Mong cầu mình ly tham,",
      "Nên nhiếp phục ái dục."
    ]
  },
  {
    id: 344, chapterId: 24,
    lines: [
      "Lìa rừng lại hướng rừng,",
      "Thoát rừng chạy theo rừng,",
      "Nên xem người như vậy,",
      "Được thoát khỏi buộc ràng.",
      "Lại chạy theo ràng buộc."
    ]
  },
  {
    id: 345, chapterId: 24,
    lines: [
      "Sắt, cây, gai trói buộc,",
      "Người trí xem chưa bền.",
      "Tham châu báu, trang sức,",
      "Tham vọng vợ và con."
    ]
  },
  {
    id: 346, chapterId: 24,
    lines: [
      "Người có trí nói rằng:",
      "Trói buộc này thật bền.",
      "Trì kéo xuống, lún xuống,",
      "Nhưng thật sự khó thoát.",
      "Người trí cắt trừ nó,",
      "Bỏ dục lạc, không màng."
    ]
  },
  {
    id: 347, chapterId: 24,
    lines: [
      "Người đắm say ái dục,",
      "Tự lao mình xuống dòng,",
      "Như nhện sa lưới dệt.",
      "Người trí cắt trừ nó,",
      "Bỏ mọi khổ, không màng."
    ]
  },
  {
    id: 348, chapterId: 24,
    lines: [
      "Bỏ quá, hiện, vị lai,",
      "Đến bờ kia cuộc đời,",
      "Ý giải thoát tất cả,",
      "Chớ vướng lại sinh già."
    ]
  },
  {
    id: 349, chapterId: 24,
    lines: [
      "Người tà ý nhiếp phục,",
      "Tham sắc bén nhìn tịnh,",
      "Người ấy ái tăng trưởng,",
      "Làm dây trói mình chặt."
    ]
  },
  {
    id: 350, chapterId: 24,
    lines: [
      "Ai vui, an tịnh ý,",
      "Quán bất tịnh, thường niệm,",
      "Người ấy sẽ diệt ái,",
      "Cắt đứt ma trói buộc."
    ]
  },
  {
    id: 351, chapterId: 24,
    lines: [
      "Ai tới đích, không sợ,",
      "Ly ái, không nhiễm ô,",
      "Nhổ mũi tên sinh tử,",
      "Thân này thân cuối cùng."
    ]
  },
  {
    id: 352, chapterId: 24,
    lines: [
      "Ái lìa, không chấp thủ,",
      "Cú pháp khéo biện tài,",
      "Thấu suốt từ vô ngại,",
      "Hiểu thứ lớp trước sau,",
      "Thân này thân cuối cùng.",
      "Vị như vậy được gọi,",
      "Bậc Đại trí, Đại nhân."
    ]
  },
  {
    id: 353, chapterId: 24,
    lines: [
      "Ta hàng phục tất cả,",
      "Ta rõ biết tất cả,",
      "Không bị nhiễm pháp nào.",
      "Ta từ bỏ tất cả,",
      "Ái diệt, tự giải thoát,",
      "Đã tự mình thắng trí,",
      "Ta gọi ai thầy Ta?"
    ]
  },
  {
    id: 354, chapterId: 24,
    lines: [
      "Pháp thí thắng mọi thí,",
      "Pháp vị thắng mọi vị,",
      "Pháp hỷ thắng mọi hỷ,",
      "Ái diệt thắng mọi khổ."
    ]
  },
  {
    id: 355, chapterId: 24,
    lines: [
      "Tài sản hại người ngu,",
      "Không người tìm bờ kia,",
      "Kẻ ngu vì tham giàu,",
      "Hại mình và hại người."
    ]
  },
  {
    id: 356, chapterId: 24,
    lines: [
      "Cỏ làm hại ruộng vườn,",
      "Tham làm hại người đời.",
      "Bố thí người ly tham,",
      "Do vậy được quả lớn."
    ]
  },
  {
    id: 357, chapterId: 24,
    lines: [
      "Cỏ làm hại ruộng vườn,",
      "Sân làm hại người đời.",
      "Bố thí người ly sân,",
      "Do vậy được quả lớn."
    ]
  },
  {
    id: 358, chapterId: 24,
    lines: [
      "Cỏ làm hại ruộng vườn,",
      "Si làm hại người đời.",
      "Bố thí người ly si,",
      "Do vậy được quả lớn."
    ]
  },
  {
    id: 359, chapterId: 24,
    lines: [
      "Cỏ làm hại ruộng vườn,",
      "Dục làm hại người đời.",
      "Bố thí người ly dục,",
      "Do vậy được quả lớn."
    ]
  },

  // XXV. PHẨM TỲ KHEO (360 - 382)
  {
    id: 360, chapterId: 25,
    lines: [
      "Lành thay, phòng hộ mắt,",
      "Lành thay, phòng hộ tai,",
      "Lành thay, phòng hộ mũi,",
      "Lành thay, phòng hộ lưỡi."
    ]
  },
  {
    id: 361, chapterId: 25,
    lines: [
      "Lành thay, phòng hộ thân,",
      "Lành thay, phòng hộ lời,",
      "Lành thay, phòng hộ ý,",
      "Lành thay, phòng tất cả.",
      "Tỳ kheo phòng tất cả,",
      "Thoát được mọi khổ đau."
    ]
  },
  {
    id: 362, chapterId: 25,
    lines: [
      "Người chế ngự tay chân,",
      "Chế ngự lời và đầu,",
      "Vui thích nội thiền định,",
      "Độc thân, biết vừa đủ,",
      "Thật xứng gọi tỳ kheo."
    ]
  },
  {
    id: 363, chapterId: 25,
    lines: [
      "Tỳ kheo chế ngự miệng,",
      "Vừa lời, không cống cao,",
      "Khi trình bày pháp nghĩa,",
      "Lời lẽ dịu, ngọt ngào."
    ]
  },
  {
    id: 364, chapterId: 25,
    lines: [
      "Vị tỳ kheo thích pháp,",
      "Mến pháp, suy tư pháp,",
      "Tâm tư niệm Chính pháp,",
      "Không rời bỏ Chính pháp."
    ]
  },
  {
    id: 365, chapterId: 25,
    lines: [
      "Không khinh điều mình được,",
      "Không ganh người khác được.",
      "Tỳ kheo ganh tị người,",
      "Không sao chứng thiền định."
    ]
  },
  {
    id: 366, chapterId: 25,
    lines: [
      "Tỳ kheo dù được ít,",
      "Không khinh điều mình được,",
      "Sống thanh tịnh không nhác,",
      "Chư thiên khen vị này."
    ]
  },
  {
    id: 367, chapterId: 25,
    lines: [
      "Hoàn toàn, đối danh sắc,",
      "Không chấp ta, của ta.",
      "Không chấp, không sầu não,",
      "Thật xứng danh tỳ kheo."
    ]
  },
  {
    id: 368, chapterId: 25,
    lines: [
      "Tỳ kheo trú từ bi,",
      "Tín thành giáo pháp Phật,",
      "Chứng cảnh giới tịch tĩnh,",
      "Các hạnh an tịnh lạc."
    ]
  },
  {
    id: 369, chapterId: 25,
    lines: [
      "Tỳ kheo tát thuyền này,",
      "Thuyền không, nhẹ đi mau.",
      "Trừ tham, diệt sân hận,",
      "Tất chứng đạt Niết bàn."
    ]
  },
  {
    id: 370, chapterId: 25,
    lines: [
      "Đoạn năm, từ bỏ năm,",
      "Tu tập năm tối thượng,",
      "Tỳ kheo vượt năm ái,",
      "Xứng danh vượt bộc lưu."
    ]
  },
  {
    id: 371, chapterId: 25,
    lines: [
      "Tỳ kheo, hãy tu thiền,",
      "Chớ buông lung phóng dật,",
      "Tâm chớ đắm say dục.",
      "Phóng dật, nuốt sắt nóng,",
      "Bị đốt, chớ than khổ."
    ]
  },
  {
    id: 372, chapterId: 25,
    lines: [
      "Không trí tuệ, không thiền,",
      "Không thiền, không trí tuệ.",
      "Người có thiền có tuệ,",
      "Nhất định gần Niết bàn."
    ]
  },
  {
    id: 373, chapterId: 25,
    lines: [
      "Bước vào ngôi nhà trống,",
      "Tỳ kheo tâm an tịnh,",
      "Thọ hưởng vui siêu nhân,",
      "Tịnh quán theo Chính pháp."
    ]
  },
  {
    id: 374, chapterId: 25,
    lines: [
      "Người luôn luôn chính niệm,",
      "Sự sinh diệt các uẩn,",
      "Được hoan hỷ, hân hoan,",
      "Chỉ bậc Bất tử biết."
    ]
  },
  {
    id: 375, chapterId: 25,
    lines: [
      "Đây tỳ kheo có trí,",
      "Tu tập pháp căn bản,",
      "Hộ căn, biết vừa đủ,",
      "Giữ gìn căn bản giới,",
      "Thường gần gũi bạn lành,",
      "Sống thanh tịnh, tinh cần."
    ]
  },
  {
    id: 376, chapterId: 25,
    lines: [
      "Giao thiệp khéo thân thiện,",
      "Cử chỉ mực đoan trang,",
      "Do vậy hưởng vui nhiều,",
      "Sẽ dứt mọi khổ đau."
    ]
  },
  {
    id: 377, chapterId: 25,
    lines: [
      "Như hoa vassikā,",
      "Quăng bỏ cánh úa tàn.",
      "Cũng vậy, vị tỳ kheo,",
      "Hãy giải thoát tham sân."
    ]
  },
  {
    id: 378, chapterId: 25,
    lines: [
      "Thân tịnh, lời an tịnh,",
      "An tịnh, khéo thiền tịnh,",
      "Tỳ kheo bỏ thế vật,",
      "Xứng danh bậc Tịch tịnh."
    ]
  },
  {
    id: 379, chapterId: 25,
    lines: [
      "Tự mình chỉ trích mình,",
      "Tự mình dò xét mình,",
      "Tỳ kheo tự phòng hộ,",
      "Chính niệm, trú an lạc."
    ]
  },
  {
    id: 380, chapterId: 25,
    lines: [
      "Tự mình y chỉ mình,",
      "Tự mình đi đến mình,",
      "Vậy hãy tự điều phục,",
      "Như khách buôn ngựa hiền."
    ]
  },
  {
    id: 381, chapterId: 25,
    lines: [
      "Tỳ kheo nhiều hân hoan,",
      "Tịnh tín giáo pháp Phật,",
      "Chứng cảnh giới tịch tịnh,",
      "Các hạnh an tịnh lạc."
    ]
  },
  {
    id: 382, chapterId: 25,
    lines: [
      "Tỳ kheo tuy tuổi nhỏ,",
      "Siêng tu giáo pháp Phật,",
      "Soi sáng thế gian này,",
      "Như trăng thoát khỏi mây."
    ]
  },

  // XXVI. PHẨM BÀ LA MÔN (383 - 423)
  {
    id: 383, chapterId: 26,
    lines: [
      "Hỡi này Bà la môn,",
      "Hãy tinh tấn đoạn dòng,",
      "Từ bỏ các dục lạc,",
      "Biết được hành đoạn diệt,",
      "Ngươi là bậc Vô vi."
    ]
  },
  {
    id: 384, chapterId: 26,
    lines: [
      "Nhờ thường trú hai pháp,",
      "Đến được bờ bên kia.",
      "Bà la môn có trí,",
      "Mọi kiết sử dứt sạch."
    ]
  },
  {
    id: 385, chapterId: 26,
    lines: [
      "Không bờ này, bờ kia,",
      "Cả hai bờ không có,",
      "Lìa khổ, không trói buộc,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 386, chapterId: 26,
    lines: [
      "Tu thiền, trú ly trần,",
      "Phận sự xong, vô lậu,",
      "Đạt được đích tối thượng,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 387, chapterId: 26,
    lines: [
      "Mặt trời sáng ban ngày,",
      "Mặt trăng sáng ban đêm,",
      "Khí giới sáng Sát ly,",
      "Thiền định sáng Phạm chí,",
      "Còn hào quang đức Phật,",
      "Chói sáng cả ngày đêm."
    ]
  },
  {
    id: 388, chapterId: 26,
    lines: [
      "Dứt ác gọi Phạm chí,",
      "Tịnh hạnh gọi Sa môn,",
      "Tự mình xuất cấu uế,",
      "Nên gọi bậc xuất gia."
    ]
  },
  {
    id: 389, chapterId: 26,
    lines: [
      "Chớ có đánh Phạm chí,",
      "Phạm chí chớ đánh lại.",
      "Xấu thay đánh Phạm chí,",
      "Đánh trả lại, xấu hơn."
    ]
  },
  {
    id: 390, chapterId: 26,
    lines: [
      "Đối vị Bà la môn,",
      "Đây không lợi ích nhỏ,",
      "Khi ý không ái luyến,",
      "Tâm hại được chặn đứng,",
      "Chỉ khi ấy, khổ diệt."
    ]
  },
  {
    id: 391, chapterId: 26,
    lines: [
      "Với người thân, miệng, ý,",
      "Không làm các ác hạnh,",
      "Ba nghiệp được phòng hộ,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 392, chapterId: 26,
    lines: [
      "Từ ai biết Chính pháp,",
      "Bậc Chính Giác thuyết giảng,",
      "Hãy kính lễ vị ấy,",
      "Như Phạm chí thờ lửa."
    ]
  },
  {
    id: 393, chapterId: 26,
    lines: [
      "Được gọi Bà la môn,",
      "Không vì đầu bện tóc,",
      "Không chủng tộc, thọ sinh.",
      "Ai thật chân, chính, tịnh,",
      "Mới gọi Bà la môn."
    ]
  },
  {
    id: 394, chapterId: 26,
    lines: [
      "Kẻ ngu, có ích gì,",
      "Bện tóc với da dê,",
      "Nội tâm toàn phiền não,",
      "Ngoài mặt đánh bóng suông."
    ]
  },
  {
    id: 395, chapterId: 26,
    lines: [
      "Người mặc áo đống rác,",
      "Gầy ốm, lộ mạch gân,",
      "Độc thân thiền trong rừng,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 396, chapterId: 26,
    lines: [
      "Ta không gọi Phạm chí,",
      "Vì chỗ sinh, mẹ sinh,",
      "Chỉ được gọi tên suông,",
      "Nếu tâm còn phiền não.",
      "Không phiền não, chấp trước,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 397, chapterId: 26,
    lines: [
      "Đoạn hết các kiết sử,",
      "Không còn gì lo sợ,",
      "Không đắm trước buộc ràng,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 398, chapterId: 26,
    lines: [
      "Bỏ đai da, bỏ cương,",
      "Bỏ dây, đồ sở thuộc,",
      "Bỏ then chốt, sáng suốt,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 399, chapterId: 26,
    lines: [
      "Không ác ý, nhẫn chịu,",
      "Phỉ báng, đánh, phạt hình,",
      "Lấy nhẫn làm quân lực,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 400, chapterId: 26,
    lines: [
      "Không hận, hết bổn phận,",
      "Trì giới, không tham ái,",
      "Nhiếp phục, thân cuối cùng,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 401, chapterId: 26,
    lines: [
      "Như nước trên lá sen,",
      "Như hạt cải đầu kim,",
      "Người không nhiễm ái dục,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 402, chapterId: 26,
    lines: [
      "Ai tự trên đời này,",
      "Giác khổ, diệt trừ khổ,",
      "Bỏ gánh nặng, giải thoát,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 403, chapterId: 26,
    lines: [
      "Người trí tuệ sâu xa,",
      "Khéo biết đạo, phi đạo,",
      "Chứng đạt đích vô thượng,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 404, chapterId: 26,
    lines: [
      "Không liên hệ cả hai,",
      "Xuất gia và thế tục,",
      "Sống độc thân, ít dục,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 405, chapterId: 26,
    lines: [
      "Bỏ trượng, đối chúng sinh,",
      "Yếu kém hay kiên cường,",
      "Không giết, không bảo giết,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 406, chapterId: 26,
    lines: [
      "Thân thiện giữa thù địch,",
      "Ôn hòa giữa hung hăng,",
      "Không nhiễm giữa nhiễm trước,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 407, chapterId: 26,
    lines: [
      "Người bỏ rơi tham sân,",
      "Không mạn, không ganh tị,",
      "Như hạt cải đầu kim,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 408, chapterId: 26,
    lines: [
      "Nói lên lời ôn hòa,",
      "Lợi ích và chân thật,",
      "Không mất lòng một ai,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 409, chapterId: 26,
    lines: [
      "Ở đời, vật dài, ngắn,",
      "Nhỏ, lớn, đẹp hay xấu,",
      "Phàm không cho không lấy,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 410, chapterId: 26,
    lines: [
      "Người không có hy cầu,",
      "Đời này và đời sau,",
      "Không hy cầu, giải thoát,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 411, chapterId: 26,
    lines: [
      "Người không còn tham ái,",
      "Có trí, không nghi hoặc,",
      "Thể nhập vào bất tử,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 412, chapterId: 26,
    lines: [
      "Người sống ở đời này,",
      "Không nhiễm cả thiện ác,",
      "Không sầu, sạch không bụi,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 413, chapterId: 26,
    lines: [
      "Như trăng, sạch không uế,",
      "Sáng trong và tịnh lặng,",
      "Hữu ái được đoạn tận,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 414, chapterId: 26,
    lines: [
      "Vượt đường nguy hiểm này,",
      "Nhiếp phục luân hồi, si,",
      "Đến bờ kia thiền định,",
      "Không dục ái, không nghi,",
      "Không chấp trước, tịch tịnh,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 415, chapterId: 26,
    lines: [
      "Ai ở đời đoạn dục,",
      "Bỏ nhà, sống xuất gia,",
      "Dục hữu được đoạn tận,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 416, chapterId: 26,
    lines: [
      "Ai ở đời đoạn ái,",
      "Bỏ nhà, sống xuất gia,",
      "Ái hữu được đoạn tận,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 417, chapterId: 26,
    lines: [
      "Bỏ trói buộc loài Người,",
      "Vượt trói buộc cõi Trời.",
      "Giải thoát mọi buộc ràng,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 418, chapterId: 26,
    lines: [
      "Bỏ điều ưa, điều ghét,",
      "Mát lạnh, diệt sinh y,",
      "Bậc anh hùng chiến thắng,",
      "Nhiếp phục mọi thế giới,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 419, chapterId: 26,
    lines: [
      "Ai hiểu rõ hoàn toàn,",
      "Sinh tử các chúng sinh,",
      "Không nhiễm, khéo vượt qua,",
      "Sáng suốt chân giác ngộ,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 420, chapterId: 26,
    lines: [
      "Với ai, loài Trời, Người,",
      "Cùng với Càn thát bà,",
      "Không biết chỗ thọ sinh,",
      "Lậu tận, bậc La Hán,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 421, chapterId: 26,
    lines: [
      "Ai quá, hiện, vị lai,",
      "Không một sở hữu gì,",
      "Không sở hữu, không nắm,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 422, chapterId: 26,
    lines: [
      "Bậc Trâu chúa, thù thắng,",
      "Bậc Anh hùng, đại sĩ,",
      "Bậc Chiến thắng, không nhiễm,",
      "Bậc Tẩy sạch, giác ngộ,",
      "Ta gọi Bà la môn."
    ]
  },
  {
    id: 423, chapterId: 26,
    lines: [
      "Ai biết được đời trước,",
      "Thấy thiên giới, đọa xứ,",
      "Đạt được sinh diệt tận,",
      "Thắng trí tự viên thành,",
      "Bậc Mâu Ni đạo sĩ,",
      "Viên mãn mọi thành tựu,",
      "Ta gọi Bà la môn."
    ]
  }
];
