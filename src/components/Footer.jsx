import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Smartphone,
  Code,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import Logo from "../assets/logo-no-bg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Webové aplikácie", icon: Globe },
    { name: "Mobilné aplikácie", icon: Smartphone },
    { name: "API integrácie", icon: Code },
  ];

  const companyInfo = [
    "Profesionálne softvérové riešenia",
    "5+ rokov skúseností",
    "50+ úspešných projektov",
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="Maradlo Logo" className="h-10 w-auto" />
                <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    Online
                  </span>
                </div>
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                  Maradlo s.r.o.
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Špecializujeme sa na vývoj profesionálnych softvérových
                  riešení. Transformujeme nápady na úspešné digitálne produkty.
                </p>
                <div className="space-y-2">
                  {companyInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                      <span className="text-sm">{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Naše služby
              </h4>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all">
                      <service.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                  </div>
                ))}
                <div className="pt-2">
                  <a
                    href="#why-us"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    Všetky služby
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Kontakt
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:marek.zacik@maradlo.sk"
                  className="group flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm group-hover:translate-x-1 transition-transform">
                    marek.zacik@maradlo.sk
                  </span>
                </a>
                <a
                  href="tel:+421917722223"
                  className="group flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm group-hover:translate-x-1 transition-transform">
                    +421 917 722 223
                  </span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-violet-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Bratislava, Slovensko</span>
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-xs text-gray-500">
                      Pondelok - Piatok: 9:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">
                © {currentYear} Maradlo s.r.o. Všetky práva vyhradené.
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2 text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                Späť hore
              </button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>IČO: 12345678</span>
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>Bratislava, SK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
