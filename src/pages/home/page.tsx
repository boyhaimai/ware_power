
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProblemsSection from './components/ProblemsSection';
import GoalsSection from './components/GoalsSection';
import SkillsSection from './components/SkillsSection';
import ConcernsSection from './components/ConcernsSection';
import PricingSection from './components/PricingSection';
import ReferralSection from './components/ReferralSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Header onRegisterClick={handleOpenModal} />
      <HeroSection onRegisterClick={handleOpenModal} />
      <BenefitsSection onRegisterClick={handleOpenModal} />
      <ProblemsSection onRegisterClick={handleOpenModal} />
      <GoalsSection />
      <SkillsSection onRegisterClick={handleOpenModal} />
      <ConcernsSection onRegisterClick={handleOpenModal} />
      <TestimonialsSection onRegisterClick={handleOpenModal} />
      <PricingSection />
      {/* <ReferralSection onRegisterClick={handleOpenModal} /> */}
      <Footer />
      
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
