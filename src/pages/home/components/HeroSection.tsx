import s from  "@/asset/Images/S.jpg"

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20business%20presentation%20with%20vibrant%20purple%20and%20blue%20gradient%20background%2C%20digital%20marketing%20workspace%20with%20charts%20and%20graphs%2C%20clean%20minimalist%20design%2C%20high-tech%20atmosphere%2C%20business%20success%20visualization&width=1920&height=1080&seq=hero001&orientation=landscape')`
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-40 w-12 h-12 bg-yellow-400/30 rounded-full animate-bounce"></div>
        
        {/* Social Media Icons */}
        <div className="absolute bottom-20 left-10">
          <i className="ri-heart-fill text-pink-400 text-2xl animate-pulse"></i>
        </div>
        <div className="absolute top-80 right-10">
          <i className="ri-thumb-up-fill text-blue-400 text-3xl animate-bounce"></i>
        </div>
        <div className="absolute bottom-40 right-32">
          <i className="ri-star-fill text-yellow-400 text-xl animate-pulse"></i>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-300 text-lg font-semibold">
                <i className="ri-arrow-right-double-line w-6 h-6 flex items-center justify-center"></i>
                <span>Đào tạo từ chuyên gia hàng đầu</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="block">WAKE </span>
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  POWER
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-bold text-cyan-200">
                VÌ MỘT VIỆT NAM HÙNG CƯỜNG – CÙNG CHUNG TAY LAN TOẢ.
              </p>
            </div>

            <button
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-12 py-4 rounded-full text-xl font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              ĐĂNG KÝ NGAY
            </button>
          </div>

          {/* Right Content - Mock Phone Interface */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Phone Frame */}
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-1 rounded-3xl shadow-2xl">
                <div className="rounded-3xl p-6 min-h-[600px] relative overflow-hidden">
                  <img src={s} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
