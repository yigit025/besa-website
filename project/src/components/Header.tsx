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
              <button onClick={() => handleSmoothScroll('home')} className="hover:text-besa-blue">{t.home}</button>
              <button onClick={() => handleSmoothScroll('projects')} className="hover:text-besa-blue">{t.projects}</button>
              <button onClick={() => handleSmoothScroll('about')} className="hover:text-besa-blue">{t.about}</button>
              <button onClick={() => handleSmoothScroll('services')} className="hover:text-besa-blue">{t.services}</button>
              <button onClick={() => handleSmoothScroll('contact')} className="hover:text-besa-blue">{t.contact}</button>
            </nav>
          </div>

          {/* SEARCH + LANGUAGE + MENU (mobile) */}
          <div className="flex items-center space-x-4 lg:hidden">

            {/* Search icon */}
            <button className="p-1">
              <Search className="w-5 h-5 text-besa-dark" />
            </button>

            {/* Language buttons mobile */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`flex items-center space-x-1 text-xs font-bold text-besa-dark px-2 py-1 rounded-full border border-besa-dark/20 ${
                  language === 'tr' ? 'bg-besa-dark/10' : ''
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
                className={`flex items-center space-x-1 text-xs font-bold text-besa-dark px-2 py-1 rounded-full border border-besa-dark/20 ${
                  language === 'en' ? 'bg-besa-dark/10' : ''
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
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* CONTACT INFO + LANGUAGE (desktop) */}
          <div className="hidden lg:flex items-center space-x-4">

            <div className="flex items-center space-x-2 text-sm text-besa-dark/70">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+90 533 016 98 48</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-besa-dark/70">
              <Mail className="w-4 h-4" />
              <span className="font-semibold">infobesainsaat@gmail.com</span>
            </div>

            <div className="h-5 w-px bg-besa-dark/20"></div>

            {/* Language buttons desktop */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`flex items-center space-x-1 text-sm font-bold text-besa-dark border border-besa-dark/20 rounded-full px-3 py-1 hover:bg-besa-dark/5 transition ${
                  language === 'tr' ? 'bg-besa-dark/10' : ''
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
                className={`flex items-center space-x-1 text-sm font-bold text-besa-dark border border-besa-dark/20 rounded-full px-3 py-1 hover:bg-besa-dark/5 transition ${
                  language === 'en' ? 'bg-besa-dark/10' : ''
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
          <div className="lg:hidden border-t border-besa-beige py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleSmoothScroll('home')} className="text-besa-dark hover:text-besa-blue font-bold">{t.home}</button>
              <button onClick={() => handleSmoothScroll('projects')} className="text-besa-dark hover:text-besa-blue font-bold">{t.projects}</button>
              <button onClick={() => handleSmoothScroll('about')} className="text-besa-dark hover:text-besa-blue font-bold">{t.about}</button>
              <button onClick={() => handleSmoothScroll('services')} className="text-besa-dark hover:text-besa-blue font-bold">{t.services}</button>
              <button onClick={() => handleSmoothScroll('contact')} className="text-besa-dark hover:text-besa-blue font-bold">{t.contact}</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
