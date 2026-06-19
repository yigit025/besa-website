import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Home, Calendar, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ProjectStatus = 'ongoing' | 'completed';
type FilterType = 'all' | 'ongoing' | 'completed';

type LanguageText = {
  tr: string;
  en: string;
};

type Project = {
  id: number;
  status: ProjectStatus;
  title: string;
  location: string;
  images: string[];
  units: LanguageText;
  completion: LanguageText;
  description: LanguageText;
  catalogUrl?: string;
};

type LightboxState = {
  images: string[];
  currentIndex: number;
  title: string;
};

type CatalogViewerState = {
  title: string;
  url: string;
};

const Slider: React.FC<{
  images: string[];
  onImageClick: (index: number) => void;
}> = ({ images, onImageClick }) => {
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
        onClick={() => onImageClick(currentIndex)}
        className="w-full h-64 object-cover transition-all duration-300 ease-in-out cursor-zoom-in"
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

const projects: Project[] = [
  {
    id: 11,
    status: 'ongoing',
    title: 'BESA Ritim Akçaova 1',
    location: 'Akçaova, Menteşe, Muğla',
    images: [
      'https://i.ibb.co/DfpFd0st/myarchitectai-6i2y5fj0g-sd.png',
      'https://i.ibb.co/HL5z5LLt/myarchitectai-fs2ttyjae-sd.png',
      'https://i.ibb.co/93ZG8R1R/bah-ekat-proje.png',
      'https://i.ibb.co/VYH4SNR8/kat123.png'
    ],
    catalogUrl: '/catalogs/besa-ritim-akcaova-1.pdf',
    units: {
      tr: '64 Daire',
      en: '64 Apartments'
    },
    completion: {
      tr: 'Projede',
      en: 'Under Construction'
    },
    description: {
      tr: 'Apartman yaşamının konforunu bahçe kullanım ayrıcalığıyla birleştirerek sizlere seçkin bir yaşam sunuyor. Modern mimarisi ve özel yaşam alanlarıyla öne çıkıyor.',
      en: 'Combining the comfort of apartment living with the privilege of garden use, this project offers an exclusive lifestyle with modern architecture and private living spaces.'
    }
  },
  {
    id: 12,
    status: 'ongoing',
    title: 'BESA Ritim Akçaova 2',
    location: 'Akçaova, Menteşe, Muğla',
    images: [
      'https://i.ibb.co/fdM3dpfY/MG-5208.jpg',
      'https://i.ibb.co/sGPb8KB/MG-5210.jpg',
      'https://i.ibb.co/nqSb69jT/bah-ekat.png',
      'https://i.ibb.co/4wZj1FWm/kat123.png'
    ],
    catalogUrl: '/catalogs/besa-ritim-akcaova-2.pdf',
    units: {
      tr: '32 Daire',
      en: '32 Apartments'
    },
    completion: {
      tr: 'Projede',
      en: 'Under Construction'
    },
    description: {
      tr: 'Gün ışığından maksimum verim alacak şekilde tasarlanan Ritim Akçaova 2, yaşamınızın her anında konforu ve ferahlığı hissetmeniz için hayata geçirildi. Modern mimari anlayışıyla yükselen projede; 4 katlı A ve B bloklarda odalarınızı süsleyecek doğa manzarası sizleri karşılıyor.',
      en: 'Designed to make the most of natural daylight, Ritim Akçaova 2 offers comfort and spaciousness throughout daily life. Rising with a modern architectural approach, the project welcomes residents with nature views from the rooms in its four-storey A and B blocks.'
    }
  },
  {
    id: 4,
    status: 'ongoing',
    title: 'BESA Residence Olea',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/Lz70wSgB/myarchitectai-kndpgqkexj-sd.png',
      'https://i.ibb.co/DPGg9zFm/myarchitectai-wxn2lksi5-sd.png',
      'https://i.ibb.co/RkJmHz2t/Whisk-efd14a1347.jpg',
      'https://i.ibb.co/FbytYXG2/Whisk-9b25a3f87e.jpg',
      'https://i.ibb.co/tPnkxqKx/Whisk-282cf664fd.jpg',
      'https://i.ibb.co/rGLTL5hT/1-VE-2-KAT-KULAK-DAI-RE.jpg',
      'https://i.ibb.co/HT7Wcw48/1-VE-2-KAT-ORTA-DAI-RE.jpg'
    ],
    catalogUrl: '/catalogs/besa-residence-olea.pdf',
    units: {
      tr: '18 Daire',
      en: '18 Apartments'
    },
    completion: {
      tr: 'Devam ediyor.',
      en: 'Ongoing'
    },
    description: {
      tr: 'BESA Residence Olea, çocuklar için güvenli, aileler için huzurlu, herkes için sürdürülebilir bir yaşam vaadiyle tasarlandı.',
      en: 'BESA Residence Olea is designed to offer a safe environment for children, a peaceful lifestyle for families, and a sustainable living experience for everyone.'
    }
  },
  {
    id: 2,
    status: 'completed',
    title: 'BESA Masal Bahçe Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/99k1yXxN/masal-bahce-evleri.jpg',
      'https://i.ibb.co/wZM04BSY/95ea4ff6-221b-4898-b431-2ef7bb28e713.jpg',
      'https://i.ibb.co/svjFLqZP/IMG-6633.jpg',
      'https://i.ibb.co/Gfjpcf99/IMG-6644.jpg',
      'https://i.ibb.co/XZKCGkX9/IMG-6632.jpg'
    ],
    units: {
      tr: '4 Villa',
      en: '4 Villas'
    },
    completion: {
      tr: '2024',
      en: '2024'
    },
    description: {
      tr: 'Şehrin kalbinde sofistike şehir yaşamı sunan lüks villalar.',
      en: 'An exclusive villa project offering elegant living spaces and a refined lifestyle in a peaceful setting.'
    }
  },
  {
    id: 3,
    status: 'completed',
    title: 'BESA KentVadi Evleri',
    location: 'Ümraniye, İstanbul',
    images: [
      'https://i.ibb.co/qMkwQQCc/besa-kentevleri.jpg',
      'https://i.ibb.co/Kj49MT0n/Whisk-16fa306fcf.jpg',
      'https://i.ibb.co/Q36CDGxQ/Whisk-1aeb275275.jpg',
      'https://i.ibb.co/fYYW81FV/Whisk-df347d0863.jpg'
    ],
    units: {
      tr: '32 Daire',
      en: '32 Apartments'
    },
    completion: {
      tr: '2020',
      en: '2020'
    },
    description: {
      tr: 'Aile yaşamına uygun, sosyal alanlarla çevrili butik bir apartman projesi. Metroya 5 dakika, huzura bir adım.',
      en: 'A boutique apartment project designed for comfortable family living, surrounded by social areas and located just minutes from the metro.'
    }
  },
  {
    id: 1,
    status: 'completed',
    title: 'BESA Yıldız Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/vx57yFzC/yildiz-evleri.png',
      'https://i.ibb.co/Ng1GSmhF/De-Watermark-ai-1752487181431.jpg',
      'https://i.ibb.co/rGL7dDvr/De-Watermark-ai-1752487314135.jpg',
      'https://i.ibb.co/Q3B4T4VY/De-Watermark-ai-1752487404795.jpg'
    ],
    units: {
      tr: '24 Daire',
      en: '24 Apartments'
    },
    completion: {
      tr: '2022',
      en: '2022'
    },
    description: {
      tr: 'Panoramik orman manzaralı ve premium olanaklara sahip modern konut kompleksi.',
      en: 'A contemporary residential project offering panoramic forest views, refined architectural details, and premium living comfort.'
    }
  },
  {
    id: 5,
    status: 'completed',
    title: 'BESA Yasemin Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/LhhbvJ3M/IMG-2550.jpg',
      'https://i.ibb.co/1t7Cbv2S/Whisk-b0502debd1.jpg',
      'https://i.ibb.co/8LDDMDWy/Whisk-ccef90cccb.jpg',
      'https://i.ibb.co/LhbVnTrz/Whisk-399d4b76a6.jpg'
    ],
    units: {
      tr: '12 Daire',
      en: '12 Apartments'
    },
    completion: {
      tr: '2023',
      en: '2023'
    },
    description: {
      tr: 'Doğa ile iç içe, müstakil hayat sunan modern yaşam alanı.',
      en: 'A modern residential project offering an independent lifestyle in harmony with nature.'
    }
  },
  {
    id: 6,
    status: 'completed',
    title: 'BESA Dinçer Apartmanı',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/B2mP4trv/IMG-6490.jpg',
      'https://i.ibb.co/GvCmMgMD/IMG-6494.jpg',
      'https://i.ibb.co/ynXpWt06/IMG-6498.jpg',
      'https://i.ibb.co/3YCTk8Dw/IMG-6493.jpg'
    ],
    units: {
      tr: '9 Daire',
      en: '9 Apartments'
    },
    completion: {
      tr: '2024',
      en: '2024'
    },
    description: {
      tr: 'Ege esintili mimarisiyle dikkat çeken özel apartman projesi.',
      en: 'A distinctive apartment project that stands out with its Aegean-inspired architectural character.'
    }
  },
  {
    id: 7,
    status: 'completed',
    title: 'BESA Sayan Evleri',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/QF2kNfnf/66695631-a973-43fb-81c1-4e7ad3b2.jpg',
      'https://i.ibb.co/XxGG8TT0/ba96aa04-0896-4ad3-91c9-57cc317b.jpg',
      'https://i.ibb.co/v4wCN2QQ/e51ad1e9-fa2d-44fb-b7fd-4fa79072.jpg',
      'https://i.ibb.co/WWds9BQX/545a7e7e-64c1-4c54-881a-2a2c75f1.jpg',
      'https://i.ibb.co/8LRWjrF4/7cabf5b9-f51a-443d-a10c-9da349c2.jpg'
    ],
    units: {
      tr: '2 Villa',
      en: '2 Villas'
    },
    completion: {
      tr: '2024',
      en: '2024'
    },
    description: {
      tr: 'Sadece iki villadan oluşan butik proje; huzur, mahremiyet ve doğayla iç içe bir hayat sunar.',
      en: 'A boutique project consisting of only two villas, offering privacy, comfort, and a peaceful lifestyle surrounded by nature.'
    }
  },
  {
    id: 8,
    status: 'completed',
    title: 'BESA Design House',
    location: 'Dalaman, Muğla',
    images: [
      'https://i.ibb.co/M3rXwnD/IMG-7676.jpg',
      'https://i.ibb.co/YFP1wwtT/IMG-1233.jpg',
      'https://i.ibb.co/Tx4q5Xfy/IMG-1234.jpg'
    ],
    units: {
      tr: 'Tek Villa',
      en: 'Single Villa'
    },
    completion: {
      tr: '2025',
      en: '2025'
    },
    description: {
      tr: 'Ege’nin doğal ruhunu yansıtan bu özel proje; havuzlu bir villa, zengin peyzaj düzenlemesi ve maksimum mahremiyet sunan yaşam alanlarıyla tasarlandı.',
      en: 'Reflecting the natural spirit of the Aegean, this exclusive villa project features a private pool, rich landscaping, and living spaces designed for maximum privacy.'
    }
  }
];

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [catalogViewer, setCatalogViewer] = useState<CatalogViewerState | null>(null);
  const yeniProjeRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const text = {
    tr: {
      title: 'Projelerimiz',
      subtitle:
        'BESA’nın yaşam alanları sadece binalar değil; modern hayatın yeniden tasarlanmış hâlidir.',
      completion: 'Teslim',
      seeMore: 'Daha Fazlasını Gör',
      seeLess: 'Daha Azını Göster',
      filters: {
        all: 'Hepsi',
        ongoing: 'Devam Eden',
        completed: 'Tamamlanmış'
      }
    },
    en: {
      title: 'Our Projects',
      subtitle:
        'BESA creates more than buildings; it designs refined living spaces for modern life.',
      completion: 'Completion',
      seeMore: 'View More',
      seeLess: 'Show Less',
      filters: {
        all: 'All',
        ongoing: 'Ongoing',
        completed: 'Completed'
      }
    }
  };

  const t = text[language];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.status === activeFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const handleToggle = () => {
    setShowAll((prev) => {
      const next = !prev;

      if (!prev) {
        setTimeout(() => {
          yeniProjeRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }

      return next;
    });
  };

  const openLightbox = (images: string[], currentIndex: number, title: string) => {
    setLightbox({
      images,
      currentIndex,
      title
    });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const openCatalogViewer = (title: string, catalogUrl: string) => {
    const fullPdfUrl = `${window.location.origin}${catalogUrl}`;

    setCatalogViewer({
      title,
      url: `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(fullPdfUrl)}`
    });
  };

  const closeCatalogViewer = () => {
    setCatalogViewer(null);
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();

    setLightbox((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        currentIndex:
          prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
      };
    });
  };

  const showNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();

    setLightbox((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        currentIndex:
          prev.currentIndex === prev.images.length - 1 ? 0 : prev.currentIndex + 1
      };
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
        closeCatalogViewer();
      }

      if (!lightbox) return;

      if (event.key === 'ArrowLeft') {
        showPrevImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  const filterButtonClass = (filter: FilterType) =>
    `px-5 py-2 rounded-full font-semibold transition-all border ${
      activeFilter === filter
        ? 'bg-besa-dark text-white border-besa-dark shadow-md'
        : 'bg-white text-besa-dark border-besa-dark/20 hover:bg-besa-dark/5'
    }`;

  return (
    <section id="projects" className="py-20 bg-besa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            {t.title}
          </h2>

          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => handleFilterChange('all')}
            className={filterButtonClass('all')}
          >
            {t.filters.all}
          </button>

          <button
            onClick={() => handleFilterChange('ongoing')}
            className={filterButtonClass('ongoing')}
          >
            {t.filters.ongoing}
          </button>

          <button
            onClick={() => handleFilterChange('completed')}
            className={filterButtonClass('completed')}
          >
            {t.filters.completed}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
          {visibleProjects.map((project, index) => {
            const isFirstHiddenProject = showAll && index === 4;

            return (
              <div
                key={project.id}
                ref={isFirstHiddenProject ? yeniProjeRef : null}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <Slider
                    images={project.images}
                    onImageClick={(imageIndex) =>
                      openLightbox(project.images, imageIndex, project.title)
                    }
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-besa-dark mb-2">
                    {project.title}
                  </h3>

                  <p className="text-besa-dark/70 mb-4">
                    {project.description[language]}
                  </p>

                  <div className="flex items-center justify-between text-sm text-besa-dark/60 mb-4">
                    <div className="flex items-center space-x-2">
                      <Home className="w-4 h-4" />
                      <span>{project.units[language]}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {t.completion}: {project.completion[language]}
                      </span>
                    </div>
                  </div>

                  {language === 'tr' && project.catalogUrl && (
                    <button
                      onClick={() => openCatalogViewer(project.title, project.catalogUrl!)}
                      className="mt-4 inline-flex w-full items-center justify-center px-5 py-3 bg-besa-blue text-white rounded-full font-semibold hover:bg-besa-dark transition"
                    >
                      Detaylar için kataloğumuzu inceleyin
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={handleToggle}
              className="px-6 py-3 bg-besa-dark text-white rounded-full hover:bg-besa-dark/90 transition"
            >
              {showAll ? t.seeLess : t.seeMore}
            </button>
          </div>
        )}
      </div>

      {lightbox && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center px-4 py-6"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition z-20"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl flex flex-col items-center"
          >
            <div className="text-white text-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                {lightbox.title}
              </h3>

              <p className="text-white/70 text-sm mt-1">
                {lightbox.currentIndex + 1} / {lightbox.images.length}
              </p>
            </div>

            <div className="relative w-full flex items-center justify-center">
              {lightbox.images.length > 1 && (
                <button
                  onClick={showPrevImage}
                  className="absolute left-0 sm:left-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center text-3xl z-10 transition"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              <img
                src={lightbox.images[lightbox.currentIndex]}
                alt={`${lightbox.title}-${lightbox.currentIndex}`}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />

              {lightbox.images.length > 1 && (
                <button
                  onClick={showNextImage}
                  className="absolute right-0 sm:right-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center text-3xl z-10 transition"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {catalogViewer && (
        <div
          onClick={closeCatalogViewer}
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center px-3 py-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-besa-dark text-white">
              <h3 className="text-base sm:text-lg font-bold">
                {catalogViewer.title} Kataloğu
              </h3>

              <button
                onClick={closeCatalogViewer}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
                aria-label="Close catalogue"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <iframe
              src={catalogViewer.url}
              title={`${catalogViewer.title} Kataloğu`}
              className="w-full h-[calc(85vh-52px)]"
            />
          </div>
        </div>
      )}
    </section>
  );
};
