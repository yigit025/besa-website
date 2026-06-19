import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      description:
        'Her ayrıntısı özenle düşünülmüş, zamansız bir yaşam deneyimi sunan projeler geliştiriyoruz. BESA İnşaat, lüks ve konforu bir araya getirerek sizi sadece bir eve değil, hayalini kurduğunuz yaşama davet ediyor.',
      quickLinks: 'Hızlı Bağlantılar',
      services: 'Hizmetler',
      home: 'Ana Sayfa',
      projects: 'Projeler',
      about: 'Hakkımızda',
      servicesMenu: 'Hizmetler',
      contact: 'İletişim',
      construction: 'Yapı ve İnşaat',
      design: 'Proje Tasarımı',
      renovation: 'Uygulama & Tadilat',
      afterDelivery: 'Teslim Sonrası Hizmet',
      commitment: 'Taahhüt',
      copyright: '© 2025 BESA İnşaat. Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Hizmet Şartları',
      cookies: 'Çerez Politikası'
    },
    en: {
      description:
        'We develop projects that offer a timeless living experience, thoughtfully designed in every detail. BESA Construction brings luxury and comfort together, inviting you not only to a home but to the life you dream of.',
      quickLinks: 'Quick Links',
      services: 'Services',
      home: 'Home',
      projects: 'Projects',
      about: 'About Us',
      servicesMenu: 'Services',
      contact: 'Contact',
      construction: 'Construction & Building',
      design: 'Project Design',
      renovation: 'Implementation & Renovation',
      afterDelivery: 'After-Delivery Support',
      commitment: 'Contracting',
      copyright: '© 2025 BESA Construction. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy'
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-4xl font-black mb-8 text-white">
              BESA
            </h3>

            <p className="text-white/80 leading-relaxed text-lg mb-8 max-w-md">
              {t.description}
            </p>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleScrollToTop}
                className="w-12 h-12 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>

              <button
                onClick={handleScrollToTop}
                className="w-12 h-12 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>

              <a
                href="https://www.instagram.com/besamimarlikinsaat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <button
                onClick={handleScrollToTop}
                className="w-12 h-12 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>

              <button
                onClick={handleScrollToTop}
                className="w-12 h-12 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-white">
              {t.quickLinks}
            </h4>

            <ul className="space-y-4 text-lg">
              <li>
                <button
                  onClick={() => handleSmoothScroll('home')}
                  className="text-white/80 hover:text-white transition"
                >
                  {t.home}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleSmoothScroll('projects')}
                  className="text-white/80 hover:text-white transition"
                >
                  {t.projects}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleSmoothScroll('about')}
                  className="text-white/80 hover:text-white transition"
                >
                  {t.about}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleSmoothScroll('services')}
                  className="text-white/80 hover:text-white transition"
                >
                  {t.servicesMenu}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleSmoothScroll('contact')}
                  className="text-white/80 hover:text-white transition"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-white">
              {t.services}
            </h4>

            <ul className="space-y-4 text-lg text-white/80">
              <li>{t.construction}</li>
              <li>{t.design}</li>
              <li>{t.renovation}</li>
              <li>{t.afterDelivery}</li>
              <li>{t.commitment}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70">
            {t.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
            <button
              onClick={handleScrollToTop}
              className="hover:text-white transition"
            >
              {t.privacy}
            </button>

            <button
              onClick={handleScrollToTop}
              className="hover:text-white transition"
            >
              {t.terms}
            </button>

            <button
              onClick={handleScrollToTop}
              className="hover:text-white transition"
            >
              {t.cookies}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
