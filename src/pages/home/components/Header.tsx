
import { useState } from 'react';

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              WAKE POWER
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Giới thiệu
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Feedback
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Liên hệ
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <i className="ri-menu-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Giới thiệu
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Feedback
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Liên hệ
              </a>
              <button
                onClick={() => {
                  onRegisterClick();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer w-fit"
              >
                Sử dụng theme
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
