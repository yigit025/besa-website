import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Home, Calendar } from 'lucide-react';

const projects = [
  // ... Tüm 10 projen buraya aynı şekilde geliyor
];

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const yeniProjeRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    // Eğer açılıyorsa scroll'u çalıştıracak
    setShowAll((prev) => {
      const newValue = !prev;
      if (!prev) {
        // false → true geçerken scroll yapacak
        setTimeout(() => {
          yeniProjeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
      return newValue;
    });
  };

  return (
    <section id="projects" className="py-20 bg-besa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            Projelerimiz
          </h2>
          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            BESA’nın yaşam alanları sadece binalar değil; modern hayatın yeniden tasarlanmış hâlidir.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500`}>
          {(showAll ? projects : projects.slice(0, 4)).map((project) => {
            const isTarget = project.id === 5;
            return (
              <div
                key={project.id}
                ref={isTarget ? yeniProjeRef : null}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-besa-dark mb-2">{project.title}</h3>
                  <p className="text-besa-dark/70 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-besa-dark/60 mb-4">
                    <div className="flex items-center space-x-2">
                      <Home className="w-4 h-4" />
                      <span>{project.units}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Teslim: {project.completion}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleToggle}
            className="px-6 py-3 bg-besa-dark text-white rounded-full hover:bg-besa-dark/90 transition"
          >
            {showAll ? "Daha Azını Göster" : "Daha Fazlasını Gör"}
          </button>
        </div>
      </div>
    </section>
  );
};
