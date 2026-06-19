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

const App: React.FC = () => {
  useTheme();

  const { language } = useLanguage();

  const text = {
    tr: {
      callButton: 'Bizi Arayın',
      whatsappButton: 'WhatsApp’tan Ulaşın',
      whatsappMessage:
        'Merhaba, BESA Mimarlık İnşaat projeleri hakkında bilgi almak istiyorum.'
    },
    en: {
      callButton: 'Call Us',
      whatsappButton: 'Contact via WhatsApp',
      whatsappMessage:
        'Hello, I would like to get information about BESA Mimarlık İnşaat projects.'
    }
  };

  const t = text[language];

  const phoneHref = 'tel:+905330169848';
  const whatsappHref = `https://wa.me/905330169848?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />

      {/* Fixed Contact Buttons - Desktop */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col shadow-xl rounded-l-xl overflow-hidden">
        <a
          href={phoneHref}
          className="flex items-center gap-3 px-5 py-3 bg-black text-white font-semibold hover:bg-neutral-800 transition"
        >
          <Phone className="w-5 h-5 text-white" />
          <span>{t.callButton}</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-white text-black font-semibold hover:bg-neutral-100 transition border-t border-black/10"
        >
          <MessageCircle className="w-5 h-5 text-black" />
          <span>{t.whatsappButton}</span>
        </a>
      </div>

      {/* Fixed Contact Buttons - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-2xl">
        <a
          href={phoneHref}
          className="w-1/2 h-14 flex items-center justify-center gap-2 bg-black text-white font-semibold hover:bg-neutral-800 transition"
        >
          <Phone className="w-5 h-5 text-white" />
          <span>{t.callButton}</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 h-14 flex items-center justify-center gap-2 bg-white text-black font-semibold hover:bg-neutral-100 transition border-l border-black/10"
        >
          <MessageCircle className="w-5 h-5 text-black" />
          <span>{t.whatsappButton}</span>
        </a>
      </div>
    </div>
  );
};

export default App;
