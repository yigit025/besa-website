import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  const text = {
    tr: {
      title: 'Bizimle İletişime Geçin',
      subtitle:
        'İster yeni bir yuva, ister sağlam bir yatırım arıyor olun — uzman ekibimiz sizi doğru çözümlerle buluşturmak için burada.',
      contactInfo: 'İletişim Bilgileri',
      addressTitle: 'Adres',
      addressLineOne: 'Atatürk Mahallesi, Ertuğrul Gazi Sokağı',
      addressLineTwo: 'Metropol İstanbul Sitesi, Ataşehir/İstanbul',
      phoneTitle: 'Telefon',
      emailTitle: 'E-posta',
      workingHoursTitle: 'Çalışma Saatleri',
      weekdayHours: 'Pazartesi - Cuma: 09:00 - 18:00',
      weekendHours: 'Cumartesi - Pazar: 10:00 - 17:00'
    },
    en: {
      title: 'Contact Us',
      subtitle:
        'Whether you are looking for a new home or a solid investment, our expert team is here to guide you toward the right solutions.',
      contactInfo: 'Contact Information',
      addressTitle: 'Address',
      addressLineOne: 'Atatürk Neighborhood, Ertuğrul Gazi Street',
      addressLineTwo: 'Metropol İstanbul Residence, Ataşehir / Istanbul',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      workingHoursTitle: 'Business Hours',
      weekdayHours: 'Monday - Friday: 09:00 - 18:00',
      weekendHours: 'Saturday - Sunday: 10:00 - 17:00'
    }
  };

  const t = text[language];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            {t.title}
          </h2>

          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-besa-dark mb-8">
              {t.contactInfo}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-besa-blue" />
                </div>

                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">
                    {t.addressTitle}
                  </h4>

                  <p className="text-besa-dark/70">
                    {t.addressLineOne}
                    <br />
                    {t.addressLineTwo}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-besa-blue" />
                </div>

                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">
                    {t.phoneTitle}
                  </h4>

                  <p className="text-besa-dark/70">
                    +90 533 016 98 48
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-besa-blue" />
                </div>

                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">
                    {t.emailTitle}
                  </h4>

                  <p className="text-besa-dark/70">
                    info@besamimarlikinsaat.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-besa-blue" />
                </div>

                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">
                    {t.workingHoursTitle}
                  </h4>

                  <p className="text-besa-dark/70">
                    {t.weekdayHours}
                    <br />
                    {t.weekendHours}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
