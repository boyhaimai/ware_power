import { useState } from "react";

export default function PricingSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.phone) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://readdy.ai/api/form/d3alcd7hm68tmmd6sbi0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          note: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            <i className="ri-money-dollar-circle-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
            Học phí ưu đãi
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            CHI PHÍ RẤT THẤP PHÙ HỢP MỌI GIA ĐÌNH
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Pricing */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-gray-900">
                  ĐĂNG KÝ NGAY HÔM NAY
                </h3>
                <p className="text-lg text-red-600 font-bold">
                  (NHẬN ƯU ĐÃI HẤP DẪN)
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-gray-400 line-through text-2xl font-bold">
                  36.179.000đ
                </div>
                <div className="text-6xl font-black text-green-600">
                  4.868.000 đ
                </div>
                <div className="text-2xl font-bold text-green-600">VNĐ</div>
              </div>

              <div className="bg-yellow-100 rounded-2xl p-6 space-y-4">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Điền thông tin để nhận tư vấn
                  </h4>
                  <p className="text-gray-600">
                    Chúng tôi sẽ liên hệ và hỗ trợ bạn ngay lập tức
                  </p>
                </div>

                {submitStatus === "success" ? (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-check-line text-green-600 text-xl w-5 h-5 flex items-center justify-center"></i>
                    </div>
                    <p className="text-green-700 font-bold">
                      Đăng ký thành công!
                    </p>
                    <p className="text-gray-600 text-sm">
                      Chúng tôi sẽ liên hệ với bạn sớm
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    data-readdy-form
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Họ tên *"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Số điện thoại *"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                    />

                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="Ghi chú (tùy chọn)"
                      maxLength={500}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                    />

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <p className="text-red-600 text-sm">
                          Có lỗi xảy ra. Vui lòng thử lại!
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                    >
                      {isSubmitting ? "Đang gửi..." : "ĐĂNG KÝ NGAY"}
                    </button>
                  </form>
                )}
              </div>

              <div className="bg-red-100 rounded-2xl p-4">
                <p className="text-red-800 font-bold text-lg">
                  ⏰ Ưu đãi có hạn
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Benefits */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Những gì bạn nhận được:</h3>

              <div className="space-y-4">
                {[
                  "20 khoá học đã quay sẵn chủ động học mọi lúc, mọi nơi trị giá 20 triệu đồng",
                  "Sách truyền nghề hướng nghiệp trị giá 999k",
                  "Sách Cẩm nang hướng nghiệp trị giá 180k.",
                  "5 Bài báo cáo Ứng dụng hướng nghiệp Wake Power làm cho 5 cháu trị giá 15 triệu đồng.",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white font-bold w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">
                  Đảm bảo hoàn tiền 100%
                </h4>
                <p className="text-lg">Nếu không hài lòng trong 30 ngày đầu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { number: "5000+", label: "Học viên đã tham gia" },
            { number: "98%", label: "Tỷ lệ hài lòng" },
            { number: "50M+", label: "Thu nhập trung bình/tháng" },
            { number: "24/7", label: "Hỗ trợ học viên" },
          ].map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl font-black text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
