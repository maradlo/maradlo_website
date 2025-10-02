import React from 'react';
import { Mail, Phone, MapPin, Globe, Smartphone, Code } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Webové aplikácie", icon: Globe },
    { name: "Mobilné aplikácie", icon: Smartphone },
    { name: "API integrácie", icon: Code }
  ];

  const companyInfo = [
    "Profesionálne softvérové riešenia",
    "5+ rokov skúseností",
    "50+ úspešných projektov"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="Maradlo Logo" className="h-10 w-auto" />
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-white mb-4">Maradlo s.r.o.</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Špecializujeme sa na vývoj profesionálnych softvérových riešení.
                  Transformujeme nápady na úspešné digitálne produkty.
                </p>
                <div className="space-y-2">
                  {companyInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                      <span className="text-sm">{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Naše služby</h4>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <a
                    href="#why-us"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Všetky služby →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Kontakt</h4>
              <div className="space-y-4">
                <a
                  href="mailto:marek.zacik@maradlo.sk"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">marek.zacik@maradlo.sk</span>
                </a>
                <a
                  href="tel:+421917722223"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+421 917 722 223</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Bratislava, Slovensko</span>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-500">
                    Pondelok - Piatok: 9:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Maradlo s.r.o. Všetky práva vyhradené.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>IČO: 12345678</span>
              <span>•</span>
              <span>Bratislava, SK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
