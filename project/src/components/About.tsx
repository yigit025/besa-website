import React from 'react';
import { Award, Users, Building, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      titleFirst: 'Değeri',
      titleSecond: 'sadece metrekaresinde değil, yarattığı yaşamda gizli.',
      paragraphOne:
        'BESA, 15 yılı aşkın tecrübesiyle sadece projeler değil, şehir hayatına yön veren yaşam alanları inşa ediyor.',
      paragraphTwo:
        'Yenilikçi tasarım anlayışımız ve sürdürülebilir projelere olan bağlılığımız, bizi Muğla’nın prestijli bölgelerinde tercih edilen bir gayrimenkul geliştiricisi konumuna taşıdı.',
      imageAlt: 'Modern yapı',
      excellence: 'Mükemmellik',
      excellenceSub: 'her detayda',
      stats: [
        {
          icon: Building,
          value: '15+',
          label: 'Tamamlanan Proje'
        },
        {
          icon: Users,
          value: '1,000+',
          label: 'Mutlu Aile'
        },
        {
          icon: Award,
          value: '10.000+',
          label: 'İnşa Edilen Alan'
        },
        {
          icon: Target,
          value: '15+',
          label: 'Yıl Deneyim'
        }
      ]
    },
    en: {
      titleFirst: 'Value',
      titleSecond: 'is found not only in square meters, but in the life it creates.',
      paragraphOne:
        'With more than 15 years of experience, BESA builds not only projects, but living spaces that shape modern urban life.',
      paragraphTwo:
        'Our innovative design approach and commitment to sustainable development have positioned us as a preferred real estate developer in Muğla’s prestigious regions.',
      imageAlt: 'Modern building',
      excellence: 'Excellence',
      excellenceSub: 'in every detail',
      stats: [
        {
          icon: Building,
          value: '15+',
          label: 'Completed Projects'
        },
        {
          icon: Users,
          value: '1,000+',
          label: 'Happy Families'
        },
        {
          icon: Award,
          value: '10,000+',
          label: 'Built Area'
        },
        {
          icon: Target,
          value: '15+',
          label: 'Years of Experience'
        }
      ]
    }
  };

  const t = text[language];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-6">
              {t.titleFirst}
              <span className="text-4xl sm:text-5xl font-bold text-besa-dark mb-6">
                {' '}
                {t.titleSecond}
              </span>
            </h2>

            <p className="text-lg text-besa-dark/70 mb-6 leading-relaxed">
              {t.paragraphOne}
            </p>

            <p className="text-lg text-besa-dark/70 mb-8 leading-relaxed">
              {t.paragraphTwo}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-besa-beige/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-besa-blue" />
                  </div>

                  <div className="text-3xl font-bold text-besa-dark mb-1">
                    {stat.value}
                  </div>

                  <div className="text-sm text-besa-dark/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://i.ibb.co/Fj8TGKc/besa-mukemmel.jpg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt={t.imageAlt}
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-besa-blue mb-1">
                {t.excellence}
              </div>

              <div className="text-sm text-besa-dark/70">
                {t.excellenceSub}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
