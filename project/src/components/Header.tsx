import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-besa-banner shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-besa-dark">
              <span className="text-4xl sm:text-5xl font-bold text-besa-dark mb-6">BESA</span>
            </div>
          </div>

          {/* NAVBAR (desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Ana Sayfa</a>
            <a href="#projects" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Projeler</a>
            <a href="#about" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Hakkımızda</a>
            <a href="#services" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">Hizmetler</a>
            <a href="#contact" className="text-besa-dark hover:text-besa-blue font-bold transition-colors">İletişim</a>
          </nav>

          {/* CONTACT (desktop) */}
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

          {/* MENU BUTTON (mobile) */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-besa-beige py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-besa-dark hover:text-besa-blue font-medium">Ana Sayfa</a>
              <a href="#projects" className="text-besa-dark hover:text-besa-blue font-medium">Projeler</a>
              <a href="#about" className="text-besa-dark hover:text-besa-blue font-medium">Hakkımızda</a>
              <a href="#services" className="text-besa-dark hover:text-besa-blue font-medium">Hizmetler</a>
              <a href="#contact" className="text-besa-dark hover:text-besa-blue font-medium">İletişim</a>
            </nav>

            {/* 🔍 Arama Kutusu & 🌐 Dil Seçici */}
            <div className="mt-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Site içi arama..."
                  className="w-full border border-besa-blue rounded-md px-10 py-2 text-sm"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-besa-dark/60" />
              </div>

              <select className="w-full border border-besa-blue rounded-md px-4 py-2 text-sm text-besa-dark bg-white">
                <option value="tr">🌐 Türkçe</option>
                <option value="en">🌐 English</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
