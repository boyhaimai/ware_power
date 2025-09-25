
interface ReferralSectionProps {
  onRegisterClick: () => void;
}

export default function ReferralSection({ onRegisterClick }: ReferralSectionProps) {
  const referralTargets = [
    {
      title: "Bạn có bạn bè đang ấp ủ giấc mơ kinh doanh nhưng chưa biết bắt đầu từ đâu?",
      description: "Hãy giới thiệu họ khóa học này! Khóa học sẽ giúp họ trang bị đầy đủ kiến thức và kỹ năng để tìm kiếm sản phẩm tiềm năng, xây dựng thương hiệu cá nhân và đạt được mục tiêu doanh thu 9-10 chữ số mỗi tháng",
      icon: "ri-lightbulb-fill",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Bạn có bạn bè đang muốn kiếm thêm thu nhập mà không muốn bỏ quá nhiều thời gian?",
      description: "Hãy giới thiệu họ khóa học này! Khóa học sẽ giúp họ học cách kiếm thêm 10-50 triệu mỗi tháng chỉ với 2 tiếng làm việc mỗi ngày",
      icon: "ri-time-fill",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Bạn có bạn bè là sinh viên, bà mẹ bỉm sữa hoặc đang thất nghiệp muốn kiếm thêm thu nhập?",
      description: "Hãy giới thiệu họ khóa học TikTok kiếm tiền này! Khóa học sẽ giúp họ học cách tạo ra những video hấp dẫn, thu hút người xem và tăng thu nhập",
      icon: "ri-parent-fill",
      color: "from-pink-600 to-rose-600"
    },
    {
      title: "Bạn có bạn bè là nhà sáng tạo nội dung trên TikTok muốn tăng thu nhập?",
      description: "Hãy giới thiệu họ khóa học này! Khóa học sẽ giúp họ học cách tạo ra những video hấp dẫn, thu hút người xem và tăng doanh thu",
      icon: "ri-video-fill",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Bạn có bạn bè là nhà cung cấp hàng hóa muốn tăng doanh thu?",
      description: "Hãy giới thiệu họ khóa học xây dựng hệ thống affiliate này! Khóa học sẽ giúp họ học cách tìm kiếm và hợp tác với các đối tác affiliate, xây dựng chiến lược tiếp thị hiệu quả và tăng doanh số bán hàng",
      icon: "ri-store-fill",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-share-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
            Giới thiệu bạn bè
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            LAN TỎA ĐẾN NHIỀU NGƯỜI HƠN
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20friends%20sharing%20knowledge%20and%20helping%20each%20other%20succeed%20in%20business%2C%20teamwork%20and%20collaboration%20concept%2C%20modern%20workplace%20networking%2C%20professional%20relationships%20and%20referrals&width=800&height=300&seq=referral001&orientation=landscape"
              alt="Lan tỏa kiến thức"
              className="w-full h-64 object-cover object-top rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Referral Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {referralTargets.map((target, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${target.color} rounded-2xl flex items-center justify-center`}>
                  <i className={`${target.icon} text-white text-2xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {target.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {target.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Hãy Chia Sẻ Cơ Hội Thành Công
            </h3>
            <p className="text-xl text-blue-100">
              Giúp bạn bè của bạn thay đổi cuộc sống với khóa học Affiliate Salekit
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onRegisterClick}
                className="bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                THAM GIA NGAY
              </button>
              
              <div className="flex items-center space-x-4 text-white">
                <i className="ri-gift-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
                <span className="font-semibold">Nhận thưởng giới thiệu hấp dẫn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { number: "2000+", label: "Người được giới thiệu", icon: "ri-user-add-fill" },
            { number: "95%", label: "Tỷ lệ thành công", icon: "ri-trophy-fill" },
            { number: "5M+", label: "Thưởng giới thiệu", icon: "ri-money-dollar-circle-fill" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-white text-2xl w-6 h-6 flex items-center justify-center`}></i>
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
