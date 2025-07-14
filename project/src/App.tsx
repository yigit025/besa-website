import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import { DirectoryGrid } from './components/DirectoryGrid'; // ✅ Yeni bileşeni ekledik

function App() {
  useTheme();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Projects />

      {/* ✅ DirectoryGrid entegre edildi */}
      <section id="directory">
        <DirectoryGrid />
      </section>

      <About />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />

      {/* Sabit Butonlar – Responsive */}
      <div className="fixed z-50">
        {/* Masaüstü görünüm – sağda dikey */}
        <div className="hidden md:flex fixed right-0 top-1/3 flex-col gap-px pr-2">
          <a
            href="tel:+905330169848"
            className="flex items-center gap-2 px-4 py-2 rounded-l-lg shadow-md transition-all"
            style={{ backgroundColor: '#D2C1B6', color: '#1B3C53' }}
          >
            <Phone size={18} color="#1B3C53" />
            <span className="text-sm font-semibold">Bizi Arayın</span>
          </a>
          <a
            href="https://wa.me/905330169848"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-l-lg shadow-md transition-all"
            style={{ backgroundColor: '#F9F3EF', color: '#1B3C53' }}
          >
            <MessageCircle size={18} color="#1B3C53" />
            <span className="text-sm font-semibold">WhatsApp’tan Ulaşın</span>
          </a>
        </div>

        {/* Mobil görünüm – altta yatay */}
        <div
          className="flex md:hidden fixed bottom-0 left-0 w-full border-t border-gray-200 justify-between items-center z-50"
          style={{ backgroundColor: '#ffffff' }}
        >
          <a
            href="tel:+905330169848"
            className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-sm transition-all border-r border-gray-300"
            style={{ backgroundColor: '#D2C1B6', color: '#1B3C53' }}
          >
            <Phone size={18} color="#1B3C53" />
            <span>Bizi Arayın</span>
          </a>
          <a
            href="https://wa.me/905330169848"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-sm transition-all"
            style={{ backgroundColor: '#F9F3EF', color: '#1B3C53' }}
          >
            <MessageCircle size={18} color="#1B3C53" />
            <span>WhatsApp’tan Ulaşın</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
