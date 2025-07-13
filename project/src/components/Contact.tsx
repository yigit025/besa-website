import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            İster yeni bir yuva, ister sağlam bir yatırım arıyor olun — uzman ekibimiz sizi doğru çözümlerle buluşturmak için burada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-besa-dark mb-8">İletişim Bilgileri</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-besa-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">Adres</h4>
                  <p className="text-besa-dark/70">
                    Atatürk Mahallesi, Ertuğrul Gazi Sokağı<br />
                    Metropol İstanbul Sitesi, Ataşehir/İstanbul
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-besa-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">Telefon</h4>
                  <p className="text-besa-dark/70">+90 533 016 98 48</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-besa-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">E-posta</h4>
                  <p className="text-besa-dark/70">info@besainsaat.net</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-besa-beige/50 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-besa-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-besa-dark mb-1">Çalışma Saatleri</h4>
                  <p className="text-besa-dark/70">
                    Pazartesi - Cuma: 09:00 - 18:00<br />
                    Cumartesi - Pazar: 10:00 - 17:00
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