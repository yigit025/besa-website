import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      description:
        'BESA Mimarlık İnşaat, modern mimari anlayışı ve kaliteli yaşam alanlarıyla geleceğe değer katan projeler geliştirir.',
      quickLinks: 'Hızlı Erişim',
      contact: 'İletişim',
      social: 'Sosyal Medya',
      home: 'Ana Sayfa',
      projects: 'Projeler',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      contactLink: 'İletişim',
      rights: 'Tüm hakları saklıdır.'
    },
    en: {
      description:
        'BESA Mimarlık İnşaat develops projects that add value to the future with modern architectural vision and high-quality living spaces.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      social: 'Social Media',
      home: 'Home',
      projects: 'Projects',
      about: 'About Us',
      services: 'Services',
      contactLink: 'Contact',
      rights: 'All rights reserved.'
    },
    ru: {
      description:
        'BESA Mimarlık İnşaat разрабатывает проекты, которые создают ценность для будущего благодаря современному архитектурному подходу и качественным жилым пространствам.',
      quickLinks: 'Быстрые ссылки',
      contact: 'Контакты',
      social: 'Социальные сети',
      home: 'Главная',
      projects: 'Проекты',
      about: 'О нас',
      services: 'Услуги',
      contactLink: 'Контакты',
      rights: 'Все права защищены.'
    }
  };

  const t = text[language];

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-1">
            <div className="text-4xl font-black text-white mb-5">
              BESA
            </div>

            <p className="text-white/70 leading-relaxed">
              {t.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              {t.quickLinks}
            </h3>

            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleSmoothScroll('home')}
                className="text-left text-white/70 hover:text-white transition"
              >
                {t.home}
              </button>

              <button
                onClick={() => handleSmoothScroll('projects')}
                className="text-left text-white/70 hover:text-white transition"
              >
                {t.projects}
              </button>

              <button
                onClick={() => handleSmoothScroll('about')}
                className="text-left text-white/70 hover:text-white transition"
              >
                {t.about}
              </button>

              <button
                onClick={() => handleSmoothScroll('services')}
                className="text-left text-white/70 hover:text-white transition"
              >
                {t.services}
              </button>

              <button
                onClick={() => handleSmoothScroll('contact')}
                className="text-left text-white/70 hover:text-white transition"
              >
                {t.contactLink}
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              {t.contact}
            </h3>

            <div className="space-y-3 text-white/70">
              <a
                href="tel:+905330169848"
                className="block hover:text-white transition"
              >
                +90 533 016 98 48
              </a>

              <a
                href="mailto:infobesainsaat@gmail.com"
                className="block hover:text-white transition break-all"
              >
                infobesainsaat@gmail.com
              </a>

              <p>
                Atatürk Mahallesi, Ertuğrul Gazi Sokağı
              </p>

              <p>
                Metropol İstanbul Sitesi, Ataşehir/İstanbul
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              {t.social}
            </h3>

            <div className="flex items-center gap-3">
              <button
                onClick={handleScrollToTop}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>

              <button
                onClick={handleScrollToTop}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>

              <a
                href="https://www.instagram.com/besamimarlikinsaat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <button
                onClick={handleScrollToTop}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>

              <button
                onClick={handleScrollToTop}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} BESA Mimarlık İnşaat. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
