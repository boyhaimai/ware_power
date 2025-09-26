export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-black text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 px-4 sm:px-6 lg:px-0">
              <h3 className="text-xl md:text-2xl font-bold">
                Thông tin liên hệ:
              </h3>

              <div className="space-y-4">
                {/* Đơn vị kinh doanh */}
                <div className="flex items-center space-x-4">
                  <div className="min-w-[3rem] min-h-[3rem] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <i className="ri-building-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Đơn vị kinh doanh:
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      Công ty đào tạo đánh thức tiềm năng Việt
                    </p>
                  </div>
                </div>

                {/* Địa chỉ */}
                <div className="flex items-center space-x-4">
                  <div className="min-w-[3rem] min-h-[3rem] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <i className="ri-map-pin-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Địa chỉ:
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      Lô 10 Mặt bằng 20 Phố Thành Yên – P Quảng Phú – Thanh Hoá
                    </p>
                  </div>
                </div>

                {/* Đơn vị hỗ trợ chuyên môn */}
                <div className="flex items-center space-x-4">
                  <div className="min-w-[3rem] min-h-[3rem] bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <i className="ri-customer-service-2-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Đơn vị hỗ trợ chuyên môn:
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      Học viện hướng nghiệp Wake Power
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      Số 9 Dịch Vọng Hậu – P Cầu Giấy - Hà Nội.
                    </p>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-center space-x-4">
                  <div className="min-w-[3rem] min-h-[3rem] bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <i className="ri-phone-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Hotline:
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      0912 136 158 – 0984 686 616
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center space-x-4">
                  <div className="min-w-[3rem] min-h-[3rem] bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <i className="ri-global-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Website:
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">
                      Hocvienhuongngiep.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Kết nối với chúng tôi</h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: "ri-facebook-fill",
                    color: "from-blue-600 to-blue-800",
                  },
                  { icon: "ri-youtube-fill", color: "from-red-600 to-red-800" },
                  { icon: "ri-tiktok-fill", color: "from-gray-800 to-black" },
                  {
                    icon: "ri-instagram-fill",
                    color: "from-pink-600 to-purple-600",
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`min-w-[3rem] min-h-[3rem]  bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
                  >
                    <i
                      className={`${social.icon} text-white text-xl w-5 h-5 flex items-center justify-center`}
                    ></i>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Contact Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20customer%20service%20team%20working%20in%20professional%20office%20environment%2C%20diverse%20support%20staff%20helping%20customers%2C%20friendly%20business%20communication%2C%20bright%20corporate%20workspace%20with%20computers%20and%20headsets&width=600&height=500&seq=contact001&orientation=landscape"
                alt="Liên hệ hỗ trợ"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Floating Contact Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Hỗ trợ 24/7
                  </h4>
                  <p className="text-gray-600">
                    Chúng tôi luôn sẵn sàng giúp đỡ bạn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <p>&copy; 2025 VAZO. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Chính sách bảo mật
              </a>
              <span                
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                Powered by Wake Power
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
