import img1 from "@/asset/Images/92753b28f85ff6efb6dc0317faa0ca28.jpg";

interface BenefitsSectionProps {
  onRegisterClick: () => void;
}

export default function BenefitsSection({ onRegisterClick }: BenefitsSectionProps) {
  const benefits = [
    "Phổ biến kiến thức chuẩn cho phụ huynh về kiến thức hướng nghiệp đúng cho con.",
    "Biết được nguyên nhân, hậu quả của hướng nghiệp sai lầm.",
    "Biết được tiêu chí hướng nghiệp đúng và những con đường học sinh sẽ đi.",
    "Giúp cho học sinh Việt Nam chọn đúng nghề, sống đúng là mình.",
    "Hạn chế tình trạng làm trái ngành, bỏ học giữa chừng như hiện nay.",
    "VÌ MỘT VIỆT NAM HÙNG CƯỜNG – CÙNG CHUNG TAY LAN TOẢ."
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                <i className="ri-star-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
                Khóa học được yêu thích nhất
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                KHÓA HỌC GIÚP CHO
              </h2>
            </div>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white font-bold w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
                </li>
              ))}
            </ul>

            <button
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              ĐĂNG KÝ NGAY
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={img1}
                alt="Khóa học online"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Gia đình được tư vấn</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Chọn đúng nghề</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
