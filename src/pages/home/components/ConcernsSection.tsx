import { useState } from "react";
import thv1 from "@/asset/Images/THV1.jpg";
import thanhhoa from "@/asset/Images/z7014044089041_cd67f13ce70703b65595da46e204e440.jpg";
import kg from "@/asset/Images/DSC09777.jpg";

interface TestimonialsSectionProps {
  onRegisterClick: () => void;
}

export default function TestimonialsSection({
  onRegisterClick,
}: TestimonialsSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const videoTestimonials = [
    {
      thumbnail: `${thv1}`,
      videoUrl: "https://www.youtube.com/embed/KDf9O7I5vg0?start=52",
      title: "Khai giảng cho hơn 2500 giáo viên dạy hướng nghiệp",
    },
    {
      thumbnail: `${thanhhoa}`,
      videoUrl: "https://vhds.baothanhhoa.vn/huong-nghiep-chua-bao-gio-la-muon-30857.html",
      title: "Hướng nghiệp chưa bao giờ là muộn",
    },
    {
      thumbnail: `${kg}`,
      videoUrl: "https://nguonluc.com.vn/khai-giang-cho-hon-2500-giao-vien-day-huong-nghiep-a14399.html",
      title: "Khai giảng dạy hướng nghiệp cho hơn 2500 giáo viên",
    },
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setScale(1);
  };

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
    setScale(1);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY;
    setScale((prevScale) => {
      const newScale = delta > 0 ? prevScale * 0.9 : prevScale * 1.1;
      return Math.max(0.5, Math.min(5, newScale));
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="ri-customer-service-2-fill mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
            Feedback từ học viên
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            CÙNG LẮNG NGHE CẢM NHẬN
          </h2>
          <p className="text-2xl text-blue-600 font-bold">
            Của Những Học Viên Đi Trước
          </p>
        </div>

        {/* Video Testimonials with Thumbnails */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videoTestimonials.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-play-fill text-blue-600 text-2xl ml-1 w-6 h-6 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            THAM GIA NGAY
          </button>
        </div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClosePopup}
        >
          <div
            className="relative max-w-4xl max-h-screen p-4"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          >
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute -top-2 -right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10 cursor-pointer"
            >
              <i className="ri-close-line text-gray-800 text-xl w-5 h-5 flex items-center justify-center"></i>
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Xem ảnh lớn"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300"
              style={{ transform: `scale(${scale})` }}
            />

            {/* Scale Info */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
              Phóng đại: {Math.round(scale * 100)}%
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
              Cuộn chuột để phóng to/thu nhỏ
            </div>
          </div>
        </div>
      )}

      {/* Video Popup */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleClosePopup}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "90vh" }}
          >
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute -top-4 -right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10 cursor-pointer"
            >
              <i className="ri-close-line text-gray-800 text-2xl w-6 h-6 flex items-center justify-center"></i>
            </button>

            {/* Video */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={selectedVideo}
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video testimonial"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
