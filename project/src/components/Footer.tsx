import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-besa-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-besa-beige">BESA</span>
            </div>
            <p className="text-besa-beige/70 mb-6 max-w-md">
              Her ayrıntısı özenle düşünülmüş, zamansız bir yaşam deneyimi sunan projeler geliştiriyoruz. 
			  BESA İnşaat, lüks ve konforu bir araya getirerek, sizi sadece bir eve değil, hayalini kurduğunuz yaşama davet ediyor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-besa-blue/20 p-2 rounded-lg hover:bg-besa-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-besa-blue/20 p-2 rounded-lg hover:bg-besa-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/besainsaatt/" className="bg-besa-blue/20 p-2 rounded-lg hover:bg-besa-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-besa-blue/20 p-2 rounded-lg hover:bg-besa-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-besa-blue/20 p-2 rounded-lg hover:bg-besa-blue transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-besa-beige/70">
              <li><a href="#home" className="hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projeler</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-besa-beige/70">
              <li><a href="#" className="hover:text-white transition-colors">Yapı ve İnşaat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Proje Tasarımı</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Uygulama & Tadilat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Teslim Sonrası Hizmet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Taahhüt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-besa-blue/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-besa-beige/70">© 2025 BESA İnşaat. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-besa-beige/70 hover:text-white transition-colors text-sm">Gizlilik Politikası</a>
            <a href="#" className="text-besa-beige/70 hover:text-white transition-colors text-sm">Hizmet Şartları</a>
            <a href="#" className="text-besa-beige/70 hover:text-white transition-colors text-sm">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};