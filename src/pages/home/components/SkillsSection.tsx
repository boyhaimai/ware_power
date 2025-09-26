import img1 from "@/asset/Images/z7014044086522_5a57de2ada17664251d1833e1dbf6f18.jpg"
import img2 from "@/asset/Images/z7014044091906_5f46fad5295f5586be79528f7a50ecad.jpg"
import img3 from "@/asset/Images/DSC07373.jpg"
import img4 from "@/asset/Images/G.jpg"
import img5 from "@/asset/Images/DSC00066.jpg"

interface SkillsSectionProps {
  onRegisterClick: () => void;
}

export default function SkillsSection({ onRegisterClick }: SkillsSectionProps) {
  const skills = [
    {
      title: "Tiên phong đào tạo giáo viên hướng nghiệp chuyên nghiệp",
      description: "Là đơn vị tiên phong và duy nhất đào tạo giáo viên dạy hướng nghiệp tại các trường.",
      image: `${img1}`
    },
    {
      title: "Triển khai toàn quốc",
      description: "Thông qua các Sở giáo dục và đào tạo triển khai đồng loạt tại 63 tỉnh thành.",
      image: `${img2}`
    },
    {
      title: "Đăng ký chính thống từ nhà trường",
      description: "Các trường gửi văn bản đăng ký cho giáo viên tham gia khoá đào tạo 13 buổi.",
      image: `${img5}`
    },
    {
      title: "Kết quả đào tạo ấn tượng",
      description: "Trong 3 năm đã đào tạo cho hơn 5000 giáo viên khắp cả nước.",
      image: `${img4}`
    },
    {
      title: "Tác động lan tỏa sâu rộng",
      description: "Với mong muốn truyền cho giáo viên – những người có ảnh hưởng trực tiếp đến nhiều thế hệ học sinh.",
      image: "https://readdy.ai/api/search-image?query=large%20community%20of%20diverse%20people%20connected%20through%20social%20media%2C%20network%20of%20followers%20and%20fans%2C%20digital%20community%20building%20visualization%2C%20modern%20social%20networking%20concept&width=300&height=200&seq=skill005&orientation=landscape"
    },
    {
      title: "Chất lượng chuyên môn cao, miễn phí 100%",
      description: "Đào tạo hoàn toàn miễn phí từ các Tiến sĩ, chuyên gia hàng đầu Việt Nam.Nhận được nhiều tình cảm đặc biệt của giáo viên khi tham gia khoá đào tạo.",
      image: `${img3}`
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-lightbulb-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
            Kỹ năng được trang bị
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
           HỌC VIỆN HƯỚNG NGHIỆP WAKE POWER
          </h2>
          <p className="text-2xl text-purple-600 font-bold">
            ĐÀO TẠO HƠN 5000 GIÁO VIÊN.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <div className="mb-6">
                <img
                  src={skill.image}
                  alt={`Skill ${index + 1}`}
                  className="w-full h-48 object-cover object-fill rounded-2xl"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            THAM GIA NGAY
          </button>
        </div>
      </div>
    </section>
  );
}
