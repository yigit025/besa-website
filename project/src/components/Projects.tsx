import React from 'react';
import { MapPin, Home, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "BESA Yıldız Evleri",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/vx57yFzC/yildiz-evleri.png?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    units: "24 Daire",
	completion: "2022",	
    description: "Panoramik orman manzaralı ve premium olanaklara sahip modern konut kompleksi."
  },
  {
    id: 2,
    title: "BESA Masal Bahçe Evleri",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/99k1yXxN/masal-bahce-evleri.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    units: "4 Villa",
	completion: "2024",
    description: "Şehrin kalbinde sofistike şehir yaşamı sunan lüks villalar."
  },
  {
    id: 3,
    title: "BESA KentVadi Evleri ",
    location: "Ümraniye, İstanbul",
    image: "https://i.ibb.co/qMkwQQCc/besa-kentevleri.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    units: "32 Daire",
    completion: "2020",
    description: "Aile yaşamına uygun, sosyal alanlarla çevrili butik bir apartman projesi. Metroya 5 dakika, huzura bir adım."
  },
  {
    id: 4,
    title: "BESA Residence Olea",
    location: "Dalaman, Muğla",
    image: "https://i.ibb.co/sJp6xdCs/besa-residence-olea.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    units: "18 Daire",
    completion: "Devam ediyor.",
    description: "BESA Residence Olea, çocuklar için güvenli, aileler için huzurlu, herkes için sürdürülebilir bir yaşam vaadiyle tasarlandı."
  }
];

export const Projects: React.FC = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
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
          ))}
        </div>
      </div>
    </section>
  );
};
