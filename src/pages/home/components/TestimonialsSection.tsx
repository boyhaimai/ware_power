import { useState, useEffect, useRef } from "react";

import img1 from "@/asset/Images/TC.jpg";
import img2 from "@/asset/Images/CO.jpg";
import img3 from "@/asset/Images/CT.jpg";
import img4 from "@/asset/Images/TH.jpg";
import img5 from "@/asset/Images/CNM.jpg";
import img6 from "@/asset/Images/CN.jpg";

interface TestimonialsSectionProps {
  onRegisterClick: () => void;
}

export default function TestimonialsSection({
  onRegisterClick,
}: TestimonialsSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const testimonials = [{ image: img4 }, { image: img5 }, { image: img6 }];
  const videos = [{ src: img1 }, { src: img2 }, { src: img3 }];

  // reset zoom và vị trí khi mở ảnh mới
  useEffect(() => {
    if (selectedImage) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [selectedImage]);

  // handler cuộn chuột để zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(z + 0.1, 3));
    } else {
      setZoom((z) => Math.max(z - 0.1, 1)); // nhỏ nhất 1
    }
  };

  // bắt đầu kéo
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return; // chỉ kéo khi zoom > 1
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
            CÙNG XEM CẢM NHẬN
          </h2>
          <p className="text-2xl text-blue-600 font-bold">
            Của Những Học Viên Đi Trước
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(video.src)}
            >
              <div className="aspect-video">
                <img
                  src={video.src}
                  alt="Video Testimonial"
                  className="w-full max-h-[450px] object-cover"
                />
              </div>
              {/* icon kính lúp */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <i className="ri-search-line text-white text-4xl"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Written Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(testimonial.image)}
            >
              <img src={testimonial.image} className="w-full object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <i className="ri-search-line text-white text-4xl"></i>
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

      {/* Popup hiển thị ảnh */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
            className="max-w-[90%] max-h-[90%] transition-transform duration-150 select-none"
            onClick={(e) => e.stopPropagation()} // tránh đóng khi click vào ảnh
            draggable={false}
          />
        </div>
      )}
    </section>
  );
}
