import React from 'react';

const partners = [
  {
    logo: "/images/partner-vercel.png",
    name: "Vercel",
    description: "Modern frontend dağıtımı ve performans odaklı çözümler sunan lider platform."
  },
  {
    logo: "/images/partner-stripe.png",
    name: "Stripe",
    description: "Küresel ödeme çözümleriyle dijital ticaretin altyapısını sağlayan teknoloji firması."
  },
  {
    logo: "/images/partner-notion.png",
    name: "Notion",
    description: "Ekipler için modern ve çok yönlü çalışma alanı araçları sunar."
  },
  {
    logo: "/images/partner-linear.png",
    name: "Linear",
    description: "Yüksek performanslı yazılım ekipleri için tasarlanmış proje yönetim aracı."
  }
];

export const Partners: React.FC = () => {
  return (
    <section id="Partners" className="py-20 bg-besa-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-4">
            İş Birliklerimiz
          </h2>
          <p className="text-xl text-besa-dark/70 max-w-2xl mx-auto">
            Güvenilir ve alanında lider firmalarla olan güçlü iş birliklerimizle her projeye değer katıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden bg-besa-beige/50 mx-auto mb-6 flex items-center justify-center group-hover:bg-besa-blue transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-besa-dark mb-4">{partner.name}</h3>
              <p className="text-besa-dark/70 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
