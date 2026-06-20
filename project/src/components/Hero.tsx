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
    },
    ru: {
      titleFirst: 'ВЫ ДОСТОЙНЫ',
      titleSecond: 'ЛУЧШЕГО',
      description:
        'Откройте для себя комфортные и престижные жилые пространства BESA, созданные в современном архитектурном стиле.',
      button: 'Наши проекты'
    }
  };

  const t = text[language];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="block">
            {t.titleFirst}
          </span>

          <span className="block">
            {t.titleSecond}
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.description}
        </p>

        <div className="flex justify-center">
          <button
            onClick={scrollToProjects}
            className="group bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg"
          >
            <span>{t.button}</span>

            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
