import tl from "@/asset/Images/tl.png"

interface ProblemsSectionProps {
  onRegisterClick: () => void;
}

export default function ProblemsSection({ onRegisterClick }: ProblemsSectionProps) {
  const problems = [
    "Môn hoạt động hướng nghiệp trải nghiệm đã được đưa vào các trường để giảng dạy",
    "Giáo viên chưa được đào tạo chủ yếu biết gì dạy đó",
    "Học sinh chưa hứng thú học tập vì kiến thức chưa sát thực",
    "Sách dùng chưa tập trung giải quyết vấn đề thực tế",
    "Hiệu quả mang lại chưa cao và giáo viên chưa hứng thú giảng dạy.",
    "Phụ huynh chưa biết tìm hiểu ở đâu kiến thức chuẩn.",
    "Công tác hướng nghiệp các trường làm chưa hiệu quả.",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-error-warning-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
            Vấn đề phổ biến
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            THỰC TRẠNG VIỆC GIÁO DỤC HƯỚNG NGHIỆP HIỆN NAY
          </h2>
          <p className="text-2xl text-red-600 font-bold">
            Trong Thực Tế
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Problems List */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={tl}
                alt="Thách thức kinh doanh"
                className="w-full h-[600px] object-cover object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Problem Icons */}
              <div className="absolute top-6 right-6 bg-red-500/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-pulse">
                <i className="ri-error-warning-fill text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-orange-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">80%</div>
                  <div className="text-sm">Gặp khó khăn</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            THAM GIA NGAY
          </button>
        </div>
      </div>
    </section>
  );
}
