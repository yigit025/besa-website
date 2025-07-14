import React, { useState, useRef } from 'react';
import { MapPin, Home, Calendar } from 'lucide-react';

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-64 bg-gray-100 overflow-hidden">
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-64 object-cover transition-all duration-300 ease-in-out"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: 'BESA Yıldız Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/vx57yFzC/yildiz-evleri.png',
      'https://i.ibb.co/Ng1GSmhF/De-Watermark-ai-1752487181431.jpg',
      'https://i.ibb.co/rGL7dDvr/De-Watermark-ai-1752487314135.jpg',
      'https://i.ibb.co/Q3B4T4VY/De-Watermark-ai-1752487404795.jpg'
    ],
    units: '24 Daire',
    completion: '2022',
    description: 'Panoramik orman manzaralı ve premium olanaklara sahip modern konut kompleksi.'
  },
  {
    id: 2,
    title: 'BESA Masal Bahçe Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/99k1yXxN/masal-bahce-evleri.jpg',
      'https://i.ibb.co/svjFLqZP/IMG-6633.jpg',
      'https://i.ibb.co/Gfjpcf99/IMG-6644.jpg',
      'https://i.ibb.co/XZKCGkX9/IMG-6632.jpg'
    ],
    units: '4 Villa',
    completion: '2024',
    description: 'Şehrin kalbinde sofistike şehir yaşamı sunan lüks villalar.'
  },
  {
    id: 3,
    title: 'BESA KentVadi Evleri',
    location: 'Ümraniye, İstanbul',
    images: [
      'https://i.ibb.co/qMkwQQCc/besa-kentevleri.jpg',
      'https://i.ibb.co/Kj49MT0n/Whisk-16fa306fcf.jpg',
      'https://i.ibb.co/Q36CDGxQ/Whisk-1aeb275275.jpg',
      'https://i.ibb.co/fYYW81FV/Whisk-df347d0863.jpg'
            ],
    units: '32 Daire',
    completion: '2020',
    description: 'Aile yaşamına uygun, sosyal alanlarla çevrili butik bir apartman projesi. Metroya 5 dakika, huzura bir adım.'
  },
  {
    id: 4,
    title: 'BESA Residence Olea',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/sJp6xdCs/besa-residence-olea.jpg',
      'https://i.ibb.co/RkJmHz2t/Whisk-efd14a1347.jpg',
      'https://i.ibb.co/FbytYXG2/Whisk-9b25a3f87e.jpg',
      'https://i.ibb.co/tPnkxqKx/Whisk-282cf664fd.jpg'
    ],
    units: '18 Daire',
    completion: 'Devam ediyor.',
    description: 'BESA Residence Olea, çocuklar için güvenli, aileler için huzurlu, herkes için sürdürülebilir bir yaşam vaadiyle tasarlandı.'
  },
  {
    id: 5,
    title: 'BESA Yasemin Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/LhhbvJ3M/IMG-2550.jpg',
      'https://i.ibb.co/1t7Cbv2S/Whisk-b0502debd1.jpg',
      'https://i.ibb.co/8LDDMDWy/Whisk-ccef90cccb.jpg',
      'https://i.ibb.co/LhbVnTrz/Whisk-399d4b76a6.jpg'
    ],
    units: '12 Daire',
    completion: '2023',
    description: 'Doğa ile iç içe, müstakil hayat sunan modern yaşam alanı.'
  },
  {
    id: 6,
    title: 'BESA Dinçer Apartmanı',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/B2mP4trv/IMG-6490.jpg',
      'https://i.ibb.co/GvCmMgMD/IMG-6494.jpg',
      'https://i.ibb.co/ynXpWt06/IMG-6498.jpg',
      'https://i.ibb.co/3YCTk8Dw/IMG-6493.jpg'
    ],
    units: '9 Daire',
    completion: '2024',
    description: 'Ege esintili mimarisiyle dikkat çeken özel apartman projesi.'
  },
  {
    id: 7,
    title: 'BESA Sayan Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/QF2kNfnf/66695631-a973-43fb-81c1-4e7ad3b2.jpg',
      'https://i.ibb.co/XxGG8TT0/ba96aa04-0896-4ad3-91c9-57cc317b.jpg',
      'https://i.ibb.co/v4wCN2QQ/e51ad1e9-fa2d-44fb-b7fd-4fa79072.jpg',
      'https://i.ibb.co/WWds9BQX/545a7e7e-64c1-4c54-881a-2a2c75f1.jpg',
      'https://i.ibb.co/8LRWjrF4/7cabf5b9-f51a-443d-a10c-9da349c2.jpg'
    ],
    units: '2 Villa',
    completion: '2024',
    description: 'Sadece iki villadan oluşan butik proje; huzur, mahremiyet ve doğayla iç içe bir hayat sunar.'
  },
  {
    id: 8,
    title: 'BESA Design House',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/M3rXwnD/IMG-7676.jpg',
      'https://i.ibb.co/YFP1wwtT/IMG-1233.jpg',
      'https://i.ibb.co/Tx4q5Xfy/IMG-1234.jpg'
    ],
    units: 'Tek Villa',
    completion: '2025',
    description: 'Ege’nin doğal ruhunu yansıtan bu özel proje; havuzlu bir villa, zengin peyzaj düzenlemesi ve maksimum mahremiyet sunan yaşam alanlarıyla tasarlandı.'
  },
  {
    id: 9,
    title: 'BESA Nova Konutları',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/yctcd18x/Whisk-82adc3c0dc.jpg',
      'https://i.ibb.co/LzvzZqYR/Whisk-54c5ac9b5f.jpg',
      'https://i.ibb.co/wFBwwgQH/Whisk-9c92c50bc1.jpg'
    ],
    units: '36 Daire',
    completion: 'Projede',
    description: 'Modern mimarisi ve peyzajlı ortak alanlarıyla BESA Nova, konforlu yaşamın yeni adresi. Şehirle iç içe ama doğadan kopmayan özel bir site deneyimi sunar.'
  },
  {
    id: 10,
    title: 'BESA Valora Apartmanı',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/1Y03ps3m/Whisk-da02858bca.jpg',
      'https://i.ibb.co/xt94Hyqm/Whisk-4c4078ea15.jpg'
    ],
    units: '16 Daire',
    completion: 'Projede',
    description: 'Geniş cam cepheler ve şık balkon detaylarıyla modern şehir mimarisinin güçlü bir temsilcisi. BESA farkıyla yükseliyor.'
  }
];

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const yeniProjeRef = useRef<HTMLDivElement>(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const handleToggle = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (!prev) {
        setTimeout(() => {
          yeniProjeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
      return next;
    });
  };

  return (
    <section id="projects" className="py-20 bg-besa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">Projelerimiz</h2>
          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            BESA’nın yaşam alanları sadece binalar değil; modern hayatın yeniden tasarlanmış hâlidir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
          {visibleProjects.map((project) => {
            const isYeniProje = project.id === 5;
            return (
              <div
                key={project.id}
                ref={isYeniProje ? yeniProjeRef : null}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <Slider images={project.images} />
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
            {showAll ? 'Daha Azını Göster' : 'Daha Fazlasını Gör'}
          </button>
        </div>
      </div>
    </section>
  );
};
