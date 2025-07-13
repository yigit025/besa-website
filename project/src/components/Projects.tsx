// 1. Projects.tsx
import React, { useState } from 'react';
import { MapPin, Home, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "BESA Yıldız Evleri",
    location: "Dalaman, Muğla",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    units: "24 Daire",
    completion: "2022",
    description: "Panoramik orman manzaralı ve premium olanaklara sahip modern konut kompleksi."
  },
  {
    id: 2,
    title: "BESA Masal Bahçe Evleri",
    location: "Dalaman, Muğla",
    image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg",
    units: "4 Villa",
    completion: "2024",
    description: "Şehrin kalbinde sofistike şehir yaşamı sunan lüks villalar."
  },
  // Diğer projeler...
];

export const Projects: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="py-20 bg-besa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-besa-dark mb-4">Projelerimiz</h2>

          {/* Arama kutusu */}
          <input
            type="text"
            placeholder="Proje ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-4 px-4 py-2 w-full max-w-md border border-besa-dark/20 rounded-lg text-besa-dark focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-besa-dark mb-2">{project.title}</h3>
                <p className="text-besa-dark/70 mb-4">{project.description}</p>

                <div className="flex justify-between text-sm text-besa-dark/60">
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4" />
                    <span>{project.units}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.completion}</span>
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
