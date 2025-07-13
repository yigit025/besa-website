import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
  id="home"
  className="group relative min-h-screen flex items-center justify-center overflow-hidden"
>
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out group-hover:scale-105"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
    }}
  >
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          SİZ EN İYİSİNE
          <br />
          <span className="text-besa-beige">LAYIKSINIZ</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          BESA ile modern mimari çizgilerde tasarlanmış, konforlu ve prestijli yaşam alanlarını keşfedin.
        </p>
        
        <div className="flex justify-center">
  <button
    onClick={() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="group bg-besa-blue hover:bg-besa-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
  >
    <span>Projelerimiz</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</div>


      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
