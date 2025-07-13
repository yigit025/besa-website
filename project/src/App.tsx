import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useTheme();

  return (
    <div className="min-h-screen bg-white">
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
        <div className="hidden md:flex fixed right-0 top-1/3 flex-col gap-2 pr-2">
          <a
            href="tel:+905330169848"
            className="bg-[#1e3a8a] text-white px-4 py-2 rounded-l-lg shadow-md text-sm font-semibold hover:bg-[#172c6b] transition-all"
          >
            📞 Bizi Arayın
          </a>
          <a
            href="https://wa.me/905330169848"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-l-lg shadow-md text-sm font-semibold hover:bg-green-600 transition-all"
          >
            💬 WhatsApp’tan Ulaşın
          </a>
        </div>

        {/* Mobil görünüm – altta yatay */}
        <div className="flex md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 justify-around items-center py-2 z-50">
          <a
            href="tel:+905330169848"
            className="flex-1 text-center bg-[#1e3a8a] text-white py-3 font-semibold text-sm hover:bg-[#172c6b] transition-all"
          >
            📞 Bizi Arayın
          </a>
          <a
            href="https://wa.me/905330169848"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-green-500 text-white py-3 font-semibold text-sm hover:bg-green-600 transition-all"
          >
            💬 WhatsApp’tan Ulaşın
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
