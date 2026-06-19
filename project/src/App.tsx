import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './context/LanguageContext';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useTheme();

  const { language } = useLanguage();

  const text = {
    tr: {
      call: 'Bizi Arayın',
      whatsapp: 'WhatsApp’tan Ulaşın',
      whatsappMessage: 'Merhaba, BESA Mimarlık İnşaat projeleri hakkında bilgi almak istiyorum.'
    },
    en: {
      call: 'Call Us',
      whatsapp: 'Contact via WhatsApp',
      whatsappMessage: 'Hello, I would like to get information about BESA Mimarlık İnşaat projects.'
    }
  };

  const t = text[language];

  const phoneHref = 'tel:+905330169848';
  const whatsappHref = `https://wa.me/905330169848?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />

      {/* Sabit Butonlar – Responsive */}
      <div className="fixed z-50">

        {/* Masaüstü görünüm – sağda dikey */}
        <div className="hidden md:flex fixed right-0 top-1/3 flex-col gap-px pr-2">

          <a
            href={phoneHref}
            className="flex items-center gap-2 px-4 py-2 rounded-l-lg shadow-md transition-all hover:scale-105"
            style={{ backgroundColor: '#D2C1B6', color: '#1B3C53' }}
            aria-label={t.call}
          >
            <Phone size={18} color="#1B3C53" />
            <span className="text-sm font-semibold">{t.call}</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-l-lg shadow-md transition-all hover:scale-105"
            style={{ backgroundColor: '#F9F3EF', color: '#1B3C53' }}
            aria-label={t.whatsapp}
          >
            <MessageCircle size={18} color="#1B3C53" />
            <span className="text-sm font-semibold">{t.whatsapp}</span>
          </a>

        </div>

        {/* Mobil görünüm – altta yatay */}
        <div
          className="flex md:hidden fixed bottom-0 left-0 w-full border-t border-gray-200 justify-between items-center z-50"
          style={{ backgroundColor: '#ffffff' }}
        >

          <a
            href={phoneHref}
            className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-sm transition-all border-r border-gray-300"
            style={{ backgroundColor: '#D2C1B6', color: '#1B3C53' }}
            aria-label={t.call}
          >
            <Phone size={18} color="#1B3C53" />
            <span>{t.call}</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-sm transition-all"
            style={{ backgroundColor: '#F9F3EF', color: '#1B3C53' }}
            aria-label={t.whatsapp}
          >
            <MessageCircle size={18} color="#1B3C53" />
            <span>{t.whatsapp}</span>
          </a>

        </div>

      </div>

      <ScrollToTop />
    </>
  );
}

export default App;
