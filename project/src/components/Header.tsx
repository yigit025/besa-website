import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail, Search, Instagram } from 'lucide-react';
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-black shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <div className="flex items-center">
              <div className="text-3xl font-bold text-white">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  BESA
                </span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex space-x-6 text-sm font-bold text-white">
                <button onClick={() => handleSmoothScroll('home')} className="hover:text-besa-beige transition-colors">
                  {t.home}
                </button>

                <button onClick={() => handleSmoothScroll('projects')} className="hover:text-besa-beige transition-colors">
                  {t.projects}
                </button>

                <button onClick={() => handleSmoothScroll('about')} className="hover:text-besa-beige transition-colors">
                  {t.about}
                </button>

                <button onClick={() => handleSmoothScroll('services')} className="hover:text-besa-beige transition-colors">
                  {t.services}
                </button>

                <button onClick={() => handleSmoothScroll('contact')} className="hover:text-besa-beige transition-colors">
                  {t.contact}
                </button>
              </nav>
            </div>

            {/* MOBILE RIGHT SIDE */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button className="p-1">
                <Search className="w-5 h-5 text-white" />
              </button>

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

              <button
                className="p-2 text-white"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Menüyü aç"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* DESKTOP CONTACT + LANGUAGE */}
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
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[9998] lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* MOBILE SIDE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black text-white z-[9999] lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/15">
          <span className="text-3xl font-black text-white">
            BESA
          </span>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            aria-label="Menüyü kapat"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 space-y-2">
          <button
            onClick={() => handleSmoothScroll('home')}
            className="text-left text-lg font-bold text-white py-4 border-b border-white/10 hover:text-besa-beige transition"
          >
            {t.home}
          </button>

          <button
            onClick={() => handleSmoothScroll('projects')}
            className="text-left text-lg font-bold text-white py-4 border-b border-white/10 hover:text-besa-beige transition"
          >
            {t.projects}
          </button>

          <button
            onClick={() => handleSmoothScroll('about')}
            className="text-left text-lg font-bold text-white py-4 border-b border-white/10 hover:text-besa-beige transition"
          >
            {t.about}
          </button>

          <button
            onClick={() => handleSmoothScroll('services')}
            className="text-left text-lg font-bold text-white py-4 border-b border-white/10 hover:text-besa-beige transition"
          >
            {t.services}
          </button>

          <button
            onClick={() => handleSmoothScroll('contact')}
            className="text-left text-lg font-bold text-white py-4 border-b border-white/10 hover:text-besa-beige transition"
          >
            {t.contact}
          </button>
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="text-sm text-white/60 mb-3">
            BESA Mimarlık İnşaat
          </div>

          <a
            href="tel:+905330169848"
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
          >
            <Phone className="w-4 h-4" />
            <span>+90 533 016 98 48</span>
          </a>

          <a
            href="mailto:infobesainsaat@gmail.com"
            className="mt-2 flex items-center gap-2 text-sm text-white/80 hover:text-white transition break-all"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>infobesainsaat@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/besamimarlikinsaat/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-2 text-white font-semibold hover:text-besa-beige transition"
          >
            <Instagram className="w-5 h-5" />
            <span>@besamimarlikinsaat</span>
          </a>
        </div>
      </aside>
    </>
  );
};
