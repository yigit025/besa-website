import React from 'react';
import { Home, Building2, Wrench, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Yapı ve İnşaat",
    description: "Temelden çatıya kadar tüm inşaat süreçlerinde kalite, sağlamlık ve güven önceliğimizdir."
  },
  {
    icon: Building2,
    title: "Proje Tasarımı",
    description: "Mimari planlamadan teknik çizimlere kadar, her detay işlevsellik ve estetikle şekillendirilir."
  },
  {
    icon: Wrench,
    title: "Uygulama & Tadilat",
    description: "İç ve dış uygulamalarda modern malzemelerle yenilikçi çözümler sunuyoruz."
  },
  {
    icon: HeadphonesIcon,
    title: "Teslim Sonrası Hizmet",
    description: "Teslim sonrası süreçte bakım, onarım ve destek hizmetlerimizle her zaman yanınızdayız."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-besa-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            Konsept aşamasından teslim sürecine kadar tüm adımlarda yanınızda olan bütüncül çözümler sunuyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="bg-besa-beige/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-besa-blue transition-colors duration-300">
                <service.icon className="w-8 h-8 text-besa-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-besa-dark mb-4">{service.title}</h3>
              <p className="text-besa-dark/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};