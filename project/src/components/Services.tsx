import React from 'react';
import { Home, Building2, Wrench, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      title: 'Hizmetlerimiz',
      subtitle:
        'Konsept aşamasından teslim sürecine kadar tüm adımlarda yanınızda olan bütüncül çözümler sunuyoruz.',
      services: [
        {
          icon: Home,
          title: 'Yapı ve İnşaat',
          description:
            'Temelden çatıya kadar tüm inşaat süreçlerinde kalite, sağlamlık ve güven önceliğimizdir.'
        },
        {
          icon: Building2,
          title: 'Proje Tasarımı',
          description:
            'Mimari planlamadan teknik çizimlere kadar, her detay işlevsellik ve estetikle şekillendirilir.'
        },
        {
          icon: Wrench,
          title: 'Uygulama & Tadilat',
          description:
            'İç ve dış uygulamalarda modern malzemelerle yenilikçi çözümler sunuyoruz.'
        },
        {
          icon: HeadphonesIcon,
          title: 'Teslim Sonrası Hizmet',
          description:
            'Teslim sonrası süreçte bakım, onarım ve destek hizmetlerimizle her zaman yanınızdayız.'
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle:
        'We provide comprehensive solutions at every stage, from concept development to project delivery.',
      services: [
        {
          icon: Home,
          title: 'Construction & Building',
          description:
            'From foundation to completion, quality, durability, and trust are our priorities throughout every construction process.'
        },
        {
          icon: Building2,
          title: 'Project Design',
          description:
            'From architectural planning to technical drawings, every detail is shaped with functionality and aesthetics in mind.'
        },
        {
          icon: Wrench,
          title: 'Implementation & Renovation',
          description:
            'We deliver innovative solutions for interior and exterior applications using modern materials and refined workmanship.'
        },
        {
          icon: HeadphonesIcon,
          title: 'After-Delivery Support',
          description:
            'We remain by your side after delivery with maintenance, repair, and support services whenever needed.'
        }
      ]
    }
  };

  const t = text[language];

  return (
    <section id="services" className="py-20 bg-besa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            {t.title}
          </h2>

          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] text-center"
            >
              <div className="bg-besa-beige/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-besa-blue" />
              </div>

              <h3 className="text-xl font-bold text-besa-dark mb-4">
                {service.title}
              </h3>

              <p className="text-besa-dark/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
