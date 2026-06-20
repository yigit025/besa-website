import React from 'react';
import { Building2, PenTool, Hammer, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      title: 'Hizmetlerimiz',
      subtitle:
        'BESA Mimarlık İnşaat olarak, fikir aşamasından teslim sonrasına kadar her adımda güvenilir ve kaliteli çözümler sunuyoruz.',
      services: [
        {
          icon: Building2,
          title: 'Yapı ve İnşaat',
          description:
            'Modern teknikler, kaliteli malzemeler ve güvenilir uygulama süreçleriyle uzun ömürlü yapılar inşa ediyoruz.'
        },
        {
          icon: PenTool,
          title: 'Proje Tasarımı',
          description:
            'İhtiyaca uygun, estetik ve fonksiyonel mimari çözümler geliştirerek yaşam alanlarını doğru şekilde planlıyoruz.'
        },
        {
          icon: Hammer,
          title: 'Uygulama & Tadilat',
          description:
            'Mevcut alanları yeniliyor, modern ve kullanışlı yaşam alanlarına dönüştürüyoruz.'
        },
        {
          icon: Headphones,
          title: 'Teslim Sonrası Hizmet',
          description:
            'Proje tesliminden sonra da müşterilerimizin yanında oluyor, ihtiyaç duyulan süreçlerde destek sağlıyoruz.'
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle:
        'At BESA Mimarlık İnşaat, we provide reliable and high-quality solutions at every stage, from concept to after-delivery support.',
      services: [
        {
          icon: Building2,
          title: 'Construction & Building',
          description:
            'We build long-lasting structures with modern techniques, quality materials, and reliable implementation processes.'
        },
        {
          icon: PenTool,
          title: 'Project Design',
          description:
            'We plan living spaces correctly by developing aesthetic, functional, and need-oriented architectural solutions.'
        },
        {
          icon: Hammer,
          title: 'Implementation & Renovation',
          description:
            'We renovate existing spaces and transform them into modern, practical, and comfortable living areas.'
        },
        {
          icon: Headphones,
          title: 'After-Delivery Support',
          description:
            'We continue to support our clients after project delivery and provide assistance whenever needed.'
        }
      ]
    },
    ru: {
      title: 'Наши услуги',
      subtitle:
        'BESA Mimarlık İnşaat предлагает надежные и качественные решения на каждом этапе — от идеи проекта до поддержки после сдачи.',
      services: [
        {
          icon: Building2,
          title: 'Строительство',
          description:
            'Мы строим долговечные объекты, используя современные технологии, качественные материалы и надежные процессы реализации.'
        },
        {
          icon: PenTool,
          title: 'Проектирование',
          description:
            'Мы разрабатываем эстетичные, функциональные и ориентированные на потребности архитектурные решения.'
        },
        {
          icon: Hammer,
          title: 'Реализация и ремонт',
          description:
            'Мы обновляем существующие пространства и превращаем их в современные, удобные и комфортные жилые зоны.'
        },
        {
          icon: Headphones,
          title: 'Поддержка после сдачи',
          description:
            'Мы остаемся рядом с клиентами после сдачи проекта и оказываем поддержку при необходимости.'
        }
      ]
    }
  };

  const t = text[language];

  return (
    <section id="services" className="py-20 bg-besa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            {t.title}
          </h2>

          <p className="text-xl text-besa-dark/70 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-besa-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-besa-dark/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
