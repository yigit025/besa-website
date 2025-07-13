import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-besa-banner shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-besa-dark">
              <span className="text-4xl sm:text-5xl font-bold text-besa-dark mb-6">BESA</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Ana Sayfa</a>
            <a href="#projects" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Projeler</a>
            <a href="#about" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Hakkımızda</a>
            <a href="#services" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Hizmetler</a>
            <a href="#contact" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">İletişim</a>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
  <div className="flex items-center space-x-2 text-sm text-besa-dark/70">
    <Phone className="w-4 h-4" />
    <span className="font-semibold">+90 533 016 98 48</span>
  </div>
  <div className="flex items-center space-x-2 text-sm text-besa-dark/70">
    <Mail className="w-4 h-4" />
    <span className="font-semibold">info@besainsaat.net</span>
  </div>
</div>

          
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden border-t border-besa-beige py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-besa-dark hover:text-besa-blue font-medium">Ana Sayfa</a>
              <a href="#projects" className="text-besa-dark hover:text-besa-blue font-medium">Projeler</a>
              <a href="#about" className="text-besa-dark hover:text-besa-blue font-medium">Hakkımızda</a>
              <a href="#services" className="text-besa-dark hover:text-besa-blue font-medium">Hizmetler</a>
              <a href="#contact" className="text-besa-dark hover:text-besa-blue font-medium">İletişim</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
