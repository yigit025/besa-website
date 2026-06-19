import React from 'react';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      description:
        'Her ayrıntısı özenle düşünülmüş, zamansız bir yaşam deneyimi sunan projeler geliştiriyoruz. BESA İnşaat, lüks ve konforu bir araya getirerek sizi sadece bir eve değil, hayalini kurduğunuz yaşama davet ediyor.',
      quickLinksTitle: 'Hızlı Bağlantılar',
      servicesTitle: 'Hizmetler',
      links: {
        home: 'Ana Sayfa',
        projects: 'Projeler',
        about: 'Hakkımızda',
        services: 'Hizmetler',
        contact: 'İletişim'
      },
      services: [
        'Yapı ve İnşaat',
        'Proje Tasarımı',
        'Uygulama & Tadilat',
        'Teslim Sonrası Hizmet',
        'Taahhüt'
      ],
      copyright: '© 2025 BESA İnşaat. Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Hizmet Şartları',
      cookies: 'Çerez Politikası'
    },
    en: {
      description:
        'We develop thoughtfully designed projects that offer a timeless living experience. BESA İnşaat brings luxury and comfort together, inviting you not only to a home, but to the lifestyle you have envisioned.',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Services',
      links: {
        home: 'Home',
        projects: 'Projects',
        about: 'About Us',
        services: 'Services',
        contact: 'Contact'
      },
      services: [
        'Construction & Building',
        'Project Design',
        'Implementation & Renovation',
        'After-Delivery Support',
        'Contracting'
      ],
      copyright: '© 2025 BESA İnşaat. All rights reserved.',
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

  return (
    <footer className="bg-besa-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-3xl font-bold mb-6">
              BESA
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              {t.description}
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/besa_insaat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">
              {t.quickLinksTitle}
            </h4>

            <ul className="space-y-3 text-white/70">
              <li>
                <button onClick={() => handleSmoothScroll('home')} className="hover:text-white transition">
                  {t.links.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleSmoothScroll('projects')} className="hover:text-white transition">
                  {t.links.projects}
                </button>
              </li>
              <li>
                <button onClick={() => handleSmoothScroll('about')} className="hover:text-white transition">
                  {t.links.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleSmoothScroll('services')} className="hover:text-white transition">
                  {t.links.services}
                </button>
              </li>
              <li>
                <button onClick={() => handleSmoothScroll('contact')} className="hover:text-white transition">
                  {t.links.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">
              {t.servicesTitle}
            </h4>

            <ul className="space-y-3 text-white/70">
              {t.services.map((service, index) => (
                <li key={index}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/60 text-sm">
            {t.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm">
            <span>{t.privacy}</span>
            <span>{t.terms}</span>
            <span>{t.cookies}</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
