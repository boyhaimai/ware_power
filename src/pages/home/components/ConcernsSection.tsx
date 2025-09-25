import thv1 from "@/asset/Images/THV1.jpg"
import thanhhoa from "@/asset/Images/z7014044089041_cd67f13ce70703b65595da46e204e440.jpg"
import kg from "@/asset/Images/DSC09777.jpg"

interface ConcernsSectionProps {
  onRegisterClick: () => void;
}

export default function ConcernsSection({
  onRegisterClick,
}: ConcernsSectionProps) {
  const concerns = [
    {
      title: "Khai giảng cho hơn 2500 giáo viên dạy hướng nghiệp",
      description:
        "https://nguonluc.com.vn/khai-giang-cho-hon-2500-giao-vien-day-huong-nghiep-a14399.html.",
      src: `${thanhhoa}`,
    },
    {
      title: "Hướng nghiệp chưa bao giờ là muộn",
      description:
        "https://vhds.baothanhhoa.vn/huong-nghiep-chua-bao-gio-la-muon-30857.html",
      src: `${kg}`,
    },
    {
      title: "VTV1 mời Diễn giả Đào Ngọc Cường",
      description: "https://www.youtube.com/watch?v=KDf9O7I5vg0&t=52s",
      src: `${thv1}`,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-question-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
            Những điều nổi bật
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Báo chí viết về chương trình đào tạo.
          </h2>
        </div>

        {/* Concerns Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {concerns.map((concern, index) => (
            <div key={index} className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src={concern.src}
                    alt="concern"
                    className="w-full h-auto  max-h-[200px] object-fill "
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {concern.title}
                </h3>

                <a
                  className="text-gray-600 leading-relaxed mb-6 block break-words"
                  href={concern.description}
                  target="_blank"
                >
                  {concern.description}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://readdy.ai/api/search-image?query=confident%20person%20overcoming%20obstacles%20and%20fears%2C%20breaking%20through%20barriers%20to%20success%2C%20motivational%20business%20concept%2C%20professional%20development%20and%20growth%2C%20bright%20inspiring%20atmosphere&width=1200&height=400&seq=overcome001&orientation=landscape"
            alt="Vượt qua ngần ngại"
            className="w-full h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">
                Khởi đầu hành trình hướng nghiệp vững chắc
              </h3>
              <p className="text-xl mb-8">
                Cùng chúng tôi định hướng nghề nghiệp, khai phá tiềm năng và xây dựng tương lai bền vững ngay hôm nay.
              </p>
              <button
                onClick={onRegisterClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-12 py-4 rounded-full text-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
