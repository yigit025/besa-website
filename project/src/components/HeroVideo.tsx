import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <section
      id="home"
      className="group relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4" // 📌 Videonun yolunu burada ayarla
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          SİZ EN İYİSİNE
          <br />
          <span className="text-besa-beige">LAYIKSINIZ</span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          BESA ile modern mimari çizgilerde tasarlanmış, konforlu ve prestijli yaşam alanlarını keşfedin.
        </p>
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
