import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Home, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "BESA Yıldız Evleri",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/vx57yFzC/yildiz-evleri.png",
    units: "24 Daire",
    completion: "2022",  
    description: "Panoramik orman manzaralı ve premium olanaklara sahip modern konut kompleksi."
  },
  {
    id: 2,
    title: "BESA Masal Bahçe Evleri",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/99k1yXxN/masal-bahce-evleri.jpg",
    units: "4 Villa",
    completion: "2024",
    description: "Şehrin kalbinde sofistike şehir yaşamı sunan lüks villalar."
  },
  {
    id: 3,
    title: "BESA KentVadi Evleri",
    location: "Ümraniye, İstanbul",
    image: "https://i.ibb.co/qMkwQQCc/besa-kentevleri.jpg",
    units: "32 Daire",
    completion: "2020",
    description: "Aile yaşamına uygun, sosyal alanlarla çevrili butik bir apartman projesi. Metroya 5 dakika, huzura bir adım."
  },
  {
    id: 4,
    title: "BESA Residence Olea",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/sJp6xdCs/besa-residence-olea.jpg",
    units: "18 Daire",
    completion: "Devam ediyor.",
    description: "BESA Residence Olea, çocuklar için güvenli, aileler için huzurlu, herkes için sürdürülebilir bir yaşam vaadiyle tasarlandı."
  },
  {
    id: 5,
    title: "BESA Yasemin Evleri",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/LhhbvJ3M/IMG-2550.jpg",
    units: "12 Daire",
    completion: "2023",
    description: "Doğa ile iç içe, müstakil hayat sunan modern yaşam alanı."
  },
  {
    id: 6,
    title: "BESA Dinçer Apartmanı",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/B2mP4trv/IMG-6490.jpg",
    units: "9 Daire",
    completion: "2024",
    description: "Ege esintili mimarisiyle dikkat çeken özel apartman projesi."
  },
  {
    id: 7,
    title: "BESA Sayan Evleri",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/k2XscVT2/IMG-6515.jpg",
    units: "2 Villa",
    completion: "2024",
    description: "Sadece iki villadan oluşan butik proje; huzur, mahremiyet ve doğayla iç içe bir hayat sunar."
  },
  {
    id: 8,
    title: "BESA Design House",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/M3rXwnD/IMG-7676.jpg",
    units: "Tek Villa",
    completion: "2025",
    description: "Ege’nin doğal ruhunu yansıtan bu özel proje; havuzlu bir villa, zengin peyzaj düzenlemesi ve maksimum mahremiyet sunan yaşam alanlarıyla tasarlandı."
  },
  {
    id: 9,
    title: "BESA Nova Konutları",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/yctcd18x/Whisk-82adc3c0dc.jpg",
    units: "36 Daire",
    completion: "Projede",
    description: "Modern mimarisi ve peyzajlı ortak alanlarıyla BESA Nova, konforlu yaşamın yeni adresi. Şehirle iç içe ama doğadan kopmayan özel bir site deneyimi sunar."
  },
  {
    id: 10,
    title: "BESA Valora Apartmanı",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/1Y03ps3m/Whisk-da02858bca.jpg",
    units: "16 Daire",
    completion: "Projede",
    description: Geniş cam cepheler ve şık balkon detaylarıyla modern şehir mimarisinin güçlü bir temsilcisi. BESA farkıyla yükseliyor."
  },
];

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const yeniProjeRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    if (showAll && yeniProjeRef.current) {
      setTimeout(() => {
        yeniProjeRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [showAll]);

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
          {visibleProjects.map((project) => {
            const isYeniProje = project.id === 5;
            return (
              <div
                key={project.id}
                ref={isYeniProje ? yeniProjeRef : null}
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
