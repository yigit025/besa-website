import React from 'react';
import { Award, Users, Building, Target } from 'lucide-react';

const stats = [
  { icon: Building, value: "15+", label: "Tamamlanan Proje" },
  { icon: Users, value: "1,000+", label: "Mutlu Aile" },
  { icon: Award, value: "10.000+", label: "İnşa Edilen Alan" },
  { icon: Target, value: "15+", label: "Yıl Deneyim" }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-besa-dark mb-6">
              Değeri
              <span className="text-4xl sm:text-5xl font-bold text-besa-dark mb-6"> sadece metrekaresinde değil, yarattığı yaşamda gizli.</span>
            </h2>
            
            <p className="text-lg text-besa-dark/70 mb-6 leading-relaxed">
              BESA, 15 yılı aşkın tecrübesiyle sadece projeler değil, şehir hayatına yön veren yaşam alanları inşa ediyor.
            </p>
            
            <p className="text-lg text-besa-dark/70 mb-8 leading-relaxed">
              Yenilikçi tasarım anlayışımız ve sürdürülebilir projelere olan bağlılığımız, bizi Muğla'nın prestijli bölgelerinde tercih edilen bir gayrimenkul geliştiricisi konumuna taşıdı.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-besa-beige/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-besa-blue" />
                  </div>
                  <div className="text-3xl font-bold text-besa-dark mb-1">{stat.value}</div>
                  <div className="text-sm text-besa-dark/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://i.ibb.co/Fj8TGKc/besa-mukemmel.jpg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Modern building"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-besa-blue mb-1">Mükemmellik</div>
              <div className="text-sm text-besa-dark/70">her detayda</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};