import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // mobil menüyü kapat
    }
  };

  return (
    <header className="bg-besa-banner shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-besa-dark">
              <span className="text-4xl sm:text-5xl font-black text-besa-dark mb-6">BESA</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6 text-sm font-bold text-besa-dark">
              <button onClick={() => handleSmoothScroll('home')} className="hover:text-besa-blue">Ana Sayfa</button>
              <button onClick={() => handleSmoothScroll('projects')} className="hover:text-besa-blue">Projeler</button>
              <button onClick={() => handleSmoothScroll('about')} className="hover:text-besa-blue">Hakkımızda</button>
              <button onClick={() => handleSmoothScroll('services')} className="hover:text-besa-blue">Hizmetler</button>
              <button onClick={() => handleSmoothScroll('contact')} className="hover:text-besa-blue">İletişim</button>
            </nav>
          </div>

          {/* SEARCH + LANGUAGE + MENU (mobile) */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Search icon */}
            <button className="p-1">
              <Search className="w-5 h-5 text-besa-dark" />
            </button>

            {/* Language selector */}
            <select className="text-sm text-besa-dark bg-transparent focus:outline-none">
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>

            {/* Mobile menu toggle */}
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* CONTACT INFO (desktop) */}
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
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-besa-beige py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleSmoothScroll('home')} className="text-besa-dark hover:text-besa-blue font-bold">Ana Sayfa</button>
              <button onClick={() => handleSmoothScroll('projects')} className="text-besa-dark hover:text-besa-blue font-bold">Projeler</button>
              <button onClick={() => handleSmoothScroll('about')} className="text-besa-dark hover:text-besa-blue font-bold">Hakkımızda</button>
              <button onClick={() => handleSmoothScroll('services')} className="text-besa-dark hover:text-besa-blue font-bold">Hizmetler</button>
              <button onClick={() => handleSmoothScroll('contact')} className="text-besa-dark hover:text-besa-blue font-bold">İletişim</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
