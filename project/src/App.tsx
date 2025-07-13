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
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>

      {/* Sabit Arama ve WhatsApp Butonları */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+905330169848"
          className="bg-besa-blue text-white px-5 py-3 rounded-full shadow-lg hover:bg-besa-dark transition-all duration-300 text-sm font-semibold whitespace-nowrap"
        >
          📞 Bizi Arayın
        </a>

        <a
          href="https://wa.me/905330169848"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 text-sm font-semibold whitespace-nowrap"
        >
          💬 WhatsApp'tan Yaz
        </a>
      </div>
    </>
  );
}

export default App;
