import React from 'react';
import { Award, Building2, Ruler, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      title: 'Değeri sadece metrekaresinde değil, yarattığı yaşamda gizli.',
      description:
        'BESA Mimarlık İnşaat olarak modern mimari anlayışını, kaliteli işçilik ve güvenilir proje yönetimiyle birleştiriyoruz. Her projemizde yalnızca yapı değil; konforlu, estetik ve uzun ömürlü yaşam alanları tasarlıyoruz.',
      secondDescription:
        'Bugüne kadar tamamladığımız projelerde, kullanıcı ihtiyaçlarını doğru analiz ederek fonksiyonel, güvenli ve değer kazanan yaşam alanları üretmeyi ilke edindik.',
      badgeTitle: 'Mükemmellik',
      badgeSubtitle: 'her detayda',
      stats: [
        {
          icon: Building2,
          value: '15+',
          label: 'Tamamlanan Proje'
        },
        {
          icon: Users,
          value: '1,000+',
          label: 'Mutlu Aile'
        },
        {
          icon: Ruler,
          value: '10.000+',
          label: 'İnşa Edilen Alan'
        },
        {
          icon: Award,
          value: '15+',
          label: 'Yıl Deneyim'
        }
      ]
    },
    en: {
      title: 'Value is found not only in square meters, but in the life it creates.',
      description:
        'At BESA Mimarlık İnşaat, we combine modern architectural vision with quality craftsmanship and reliable project management. In every project, we design not only buildings, but comfortable, aesthetic, and long-lasting living spaces.',
      secondDescription:
        'Across the projects we have completed, we have adopted the principle of creating functional, safe, and value-enhancing living spaces by accurately analyzing user needs.',
      badgeTitle: 'Excellence',
      badgeSubtitle: 'in every detail',
      stats: [
        {
          icon: Building2,
          value: '15+',
          label: 'Completed Projects'
        },
        {
          icon: Users,
          value: '1,000+',
          label: 'Happy Families'
        },
        {
          icon: Ruler,
          value: '10,000+',
          label: 'Built Area'
        },
        {
          icon: Award,
          value: '15+',
          label: 'Years of Experience'
        }
      ]
    },
    ru: {
      title: 'Ценность заключается не только в квадратных метрах, но и в жизни, которую они создают.',
      description:
        'BESA Mimarlık İnşaat объединяет современное архитектурное видение, качественное исполнение и надежное управление проектами. В каждом проекте мы создаем не просто здания, а комфортные, эстетичные и долговечные жилые пространства.',
      secondDescription:
        'В реализованных проектах мы придерживаемся принципа создания функциональных, безопасных и ценных жилых пространств, внимательно анализируя потребности пользователей.',
      badgeTitle: 'Совершенство',
      badgeSubtitle: 'в каждой детали',
      stats: [
        {
          icon: Building2,
          value: '15+',
          label: 'Завершенных проектов'
        },
        {
          icon: Users,
          value: '1,000+',
          label: 'Счастливых семей'
        },
        {
          icon: Ruler,
          value: '10.000+',
          label: 'Построенной площади'
        },
        {
          icon: Award,
          value: '15+',
          label: 'Лет опыта'
        }
      ]
    }
  };

  const t = text[language];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark leading-tight mb-6">
              {t.title}
            </h2>

            <p className="text-lg text-besa-dark/70 leading-relaxed mb-6">
              {t.description}
            </p>

            <p className="text-lg text-besa-dark/70 leading-relaxed mb-10">
              {t.secondDescription}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {t.stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="bg-besa-cream rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-3xl font-black text-besa-dark mb-1">
                      {stat.value}
                    </div>

                    <div className="text-sm font-semibold text-besa-dark/60">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/Fj8TGKc/besa-mukemmel.jpg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="BESA Mimarlık İnşaat"
                className="w-full h-[520px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black text-white rounded-2xl px-7 py-5 shadow-2xl">
              <div className="text-2xl font-black">
                {t.badgeTitle}
              </div>

              <div className="text-white/70 text-sm">
                {t.badgeSubtitle}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-28 h-28 bg-besa-beige rounded-full opacity-60 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
