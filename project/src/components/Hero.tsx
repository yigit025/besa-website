import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      titleFirst: 'SİZ EN İYİSİNE',
      titleSecond: 'LAYIKSINIZ',
      description:
        'BESA ile modern mimari çizgilerde tasarlanmış, konforlu ve prestijli yaşam alanlarını keşfedin.',
      button: 'Projelerimiz'
    },
    en: {
      titleFirst: 'YOU DESERVE',
      titleSecond: 'THE BEST',
      description:
        'Discover comfortable and prestigious living spaces designed with modern architectural lines by BESA.',
      button: 'Our Projects'
    }
  };

  const t = text[language];

  return (
    <section
      id="home"
      className="group relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {t.titleFirst}
          <br />
          <span className="text-besa-beige">{t.titleSecond}</span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          {t.description}
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => {
              const section = document.getElementById('projects');

              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group bg-besa-blue hover:bg-besa-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span>{t.button}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
