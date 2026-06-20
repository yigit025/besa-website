import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Phone, MessageCircle } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './context/LanguageContext';
import { SEO } from './components/SEO';
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
  const [compactContactButtons, setCompactContactButtons] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

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
    },
    ru: {
      callButton: 'Позвонить',
      whatsappButton: 'Связаться в WhatsApp',
      whatsappMessage:
        'Здравствуйте, я хотел(а) бы получить информацию о проектах BESA Mimarlık İnşaat.'
    }
  };

  const t = text[language];

  const phoneHref = 'tel:+905330169848';
  const whatsappHref = `https://wa.me/905330169848?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      if (!projectsSection || !contactSection) {
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      const projectsTop = projectsSection.offsetTop;
      const contactTop = contactSection.offsetTop;

      if (scrollPosition >= projectsTop && scrollPosition < contactTop) {
        setCompactContactButtons(true);
      } else {
        setCompactContactButtons(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const shouldCollapseContactButtons = compactContactButtons && !isContactHovered;

  return (
    <div className="min-h-screen bg-white">
      <SEO />

      <Header />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Analytics />

      {/* Fixed Contact Buttons - Desktop */}
      <div
        onMouseEnter={() => setIsContactHovered(true)}
        onMouseLeave={() => setIsContactHovered(false)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col w-64 shadow-xl rounded-l-xl overflow-hidden transition-transform duration-500 ease-in-out ${
          shouldCollapseContactButtons
            ? 'translate-x-[calc(100%-3.5rem)]'
            : 'translate-x-0'
        }`}
      >
        <a
          href={phoneHref}
          className="h-14 flex items-center gap-3 bg-black text-white font-semibold hover:bg-neutral-800 transition"
        >
          <span className="w-14 h-14 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-white" />
          </span>

          <span className="whitespace-nowrap">
            {t.callButton}
          </span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 flex items-center gap-3 bg-white text-black font-semibold hover:bg-neutral-100 transition border-t border-black/10"
        >
          <span className="w-14 h-14 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-black" />
          </span>

          <span className="whitespace-nowrap">
            {t.whatsappButton}
          </span>
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
