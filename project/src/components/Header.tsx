import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const text = {
    tr: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      contact: 'İletişim'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact'
    }
  };

  const t = text[language];

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-white">
              <span className="text-4xl sm:text-5xl font-black text-white mb-6">
                BESA
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6 text-sm font-bold text-white">
              <button
                onClick={() => handleSmoothScroll('home')}
                className="hover:text-besa-beige transition-colors"
              >
                {t.home}
              </button>

              <button
                onClick={() => handleSmoothScroll('projects')}
                className="hover:text-besa-beige transition-colors"
              >
                {t.projects}
              </button>

              <button
                onClick={() => handleSmoothScroll('about')}
                className="hover:text-besa-beige transition-colors"
              >
                {t.about}
              </button>

              <button
                onClick={() => handleSmoothScroll('services')}
                className="hover:text-besa-beige transition-colors"
              >
                {t.services}
              </button>

              <button
                onClick={() => handleSmoothScroll('contact')}
                className="hover:text-besa-beige transition-colors"
              >
                {t.contact}
              </button>
            </nav>
          </div>

          {/* SEARCH + LANGUAGE + MENU MOBILE */}
          <div className="flex items-center space-x-4 lg:hidden">

            {/* Search icon */}
            <button className="p-1">
              <Search className="w-5 h-5 text-white" />
            </button>

            {/* Language buttons mobile */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`flex items-center space-x-1 text-xs font-bold text-white px-2 py-1 rounded-full border border-white/40 hover:bg-white/10 transition ${
                  language === 'tr' ? 'bg-white/20' : ''
                }`}
              >
                <img
                  src="https://flagcdn.com/w20/tr.png"
                  alt="Türkçe"
                  className="w-5 h-auto rounded-sm"
                />
                <span>TR</span>
              </button>

              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 text-xs font-bold text-white px-2 py-1 rounded-full border border-white/40 hover:bg-white/10 transition ${
                  language === 'en' ? 'bg-white/20' : ''
                }`}
              >
                <img
                  src="https://flagcdn.com/w20/gb.png"
                  alt="English"
                  className="w-5 h-auto rounded-sm"
                />
                <span>EN</span>
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* CONTACT INFO + LANGUAGE DESKTOP */}
          <div className="hidden lg:flex items-center space-x-4">

            <div className="flex items-center space-x-2 text-sm text-white/80">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+90 533 016 98 48</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-white/80">
              <Mail className="w-4 h-4" />
              <span className="font-semibold">infobesainsaat@gmail.com</span>
            </div>

            <div className="h-5 w-px bg-white/30"></div>

            {/* Language buttons desktop */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`flex items-center space-x-1 text-sm font-bold text-white border border-white/40 rounded-full px-3 py-1 hover:bg-white/10 transition ${
                  language === 'tr' ? 'bg-white/20' : ''
                }`}
              >
                <img
                  src="https://flagcdn.com/w20/tr.png"
                  alt="Türkçe"
                  className="w-5 h-auto rounded-sm"
                />
                <span>TR</span>
              </button>

              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 text-sm font-bold text-white border border-white/40 rounded-full px-3 py-1 hover:bg-white/10 transition ${
                  language === 'en' ? 'bg-white/20' : ''
                }`}
              >
                <img
                  src="https://flagcdn.com/w20/gb.png"
                  alt="English"
                  className="w-5 h-auto rounded-sm"
                />
                <span>EN</span>
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4 bg-black">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleSmoothScroll('home')}
                className="text-white hover:text-besa-beige font-bold transition-colors"
              >
                {t.home}
              </button>

              <button
                onClick={() => handleSmoothScroll('projects')}
                className="text-white hover:text-besa-beige font-bold transition-colors"
              >
                {t.projects}
              </button>

              <button
                onClick={() => handleSmoothScroll('about')}
                className="text-white hover:text-besa-beige font-bold transition-colors"
              >
                {t.about}
              </button>

              <button
                onClick={() => handleSmoothScroll('services')}
                className="text-white hover:text-besa-beige font-bold transition-colors"
              >
                {t.services}
              </button>

              <button
                onClick={() => handleSmoothScroll('contact')}
                className="text-white hover:text-besa-beige font-bold transition-colors"
              >
                {t.contact}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
