import React from 'react';

const services = [
  {
    icon: "/images/service-construction.png",
    title: "Yapı ve İnşaat",
    description: "Temelden çatıya kadar tüm inşaat süreçlerinde kalite, sağlamlık ve güven önceliğimizdir."
  },
  {
    icon: "/images/service-design.png",
    title: "Proje Tasarımı",
    description: "Mimari planlamadan teknik çizimlere kadar, her detay işlevsellik ve estetikle şekillendirilir."
  },
  {
    icon: "/images/service-renovation.png",
    title: "Uygulama & Tadilat",
    description: "İç ve dış uygulamalarda modern malzemelerle yenilikçi çözümler sunuyoruz."
  },
  {
    icon: "/images/service-support.png",
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
              <div className="w-20 h-20 rounded-full overflow-hidden bg-besa-beige/50 mx-auto mb-6 flex items-center justify-center group-hover:bg-besa-blue transition-all duration-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
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
