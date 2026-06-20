import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      title: 'Bizimle İletişime Geçin',
      subtitle:
        'Projelerimiz hakkında detaylı bilgi almak veya bizimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.',
      phoneTitle: 'Telefon',
      emailTitle: 'E-posta',
      addressTitle: 'Adres',
      hoursTitle: 'Çalışma Saatleri',
      addressLines: [
        'Atatürk Mahallesi, Ertuğrul Gazi Sokağı',
        'Metropol İstanbul Sitesi, Ataşehir/İstanbul'
      ],
      workingHours: [
        'Pazartesi - Cuma: 09:00 - 18:00',
        'Cumartesi - Pazar: 10:00 - 17:00'
      ]
    },
    en: {
      title: 'Contact Us',
      subtitle:
        'You can use the contact channels below to get detailed information about our projects or to reach us directly.',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      addressTitle: 'Address',
      hoursTitle: 'Working Hours',
      addressLines: [
        'Atatürk Neighborhood, Ertuğrul Gazi Street',
        'Metropol İstanbul Residence, Ataşehir / Istanbul'
      ],
      workingHours: [
        'Monday - Friday: 09:00 - 18:00',
        'Saturday - Sunday: 10:00 - 17:00'
      ]
    },
    ru: {
      title: 'Свяжитесь с нами',
      subtitle:
        'Чтобы получить подробную информацию о наших проектах или связаться с нами напрямую, используйте контактные данные ниже.',
      phoneTitle: 'Телефон',
      emailTitle: 'Электронная почта',
      addressTitle: 'Адрес',
      hoursTitle: 'Часы работы',
      addressLines: [
        'Район Ататюрк, улица Эртугрул Гази',
        'Metropol İstanbul Sitesi, Аташехир / Стамбул'
      ],
      workingHours: [
        'Понедельник - Пятница: 09:00 - 18:00',
        'Суббота - Воскресенье: 10:00 - 17:00'
      ]
    }
  };

  const t = text[language];

  const contactItems = [
    {
      icon: Phone,
      title: t.phoneTitle,
      content: '+90 533 016 98 48',
      href: 'tel:+905330169848'
    },
    {
      icon: Mail,
      title: t.emailTitle,
      content: 'infobesainsaat@gmail.com',
      href: 'mailto:infobesainsaat@gmail.com'
    },
    {
      icon: MapPin,
      title: t.addressTitle,
      content: t.addressLines,
      href: null
    },
    {
      icon: Clock,
      title: t.hoursTitle,
      content: t.workingHours,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            {t.title}
          </h2>

          <p className="text-lg sm:text-xl text-besa-dark/70 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-besa-cream rounded-2xl px-6 pt-8 pb-7 shadow-md hover:shadow-xl transition-all duration-300 h-full min-h-[285px] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-7 shrink-0">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black text-besa-dark mb-5 min-h-[32px] flex items-center justify-center">
                  {item.title}
                </h3>

                <div className="flex-1 flex items-start justify-center w-full">
                  {Array.isArray(item.content) ? (
                    <div className="space-y-2">
                      {item.content.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-base font-medium text-besa-dark leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      className="text-base font-semibold text-besa-dark hover:text-black transition break-all"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-besa-dark leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
