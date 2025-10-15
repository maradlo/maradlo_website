import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import {
  Check,
  ArrowRight,
  Calculator,
  Handshake,
  FileText,
  CreditCard,
  Star,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Price = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const packages = [
    {
      name: "Základný balík",
      description: "Ideálny pre menšie projekty a startupy",
      features: [
        "Webová aplikácia (do 10 stránok)",
        "Responzívny dizajn",
        "Základná SEO optimalizácia",
        "Kontaktný formulár",
        "30 dní bezplatnej podpory",
      ],
      priceRange: "2 000 - 5 000",
      timeframe: "2-4 týždne",
    },
    {
      name: "Profesionálny balík",
      description: "Pre stredné firmy s komplexnejšími potrebami",
      features: [
        "Komplexná webová aplikácia",
        "Administračný panel",
        "Databázové riešenia",
        "API integrácie",
        "90 dní bezplatnej podpory",
        "Školenie používateľov",
      ],
      priceRange: "5 000 - 15 000",
      timeframe: "4-8 týždňov",
      popular: true,
    },
    {
      name: "Enterprise balík",
      description: "Komplexné riešenia pre veľké organizácie",
      features: [
        "Škálovateľná platforma",
        "Pokročilé bezpečnostné funkcie",
        "Vlastné API a integrácie",
        "Cloud infraštruktúra",
        "6 mesiacov bezplatnej podpory",
        "Dedikovaný project manager",
      ],
      priceRange: "15 000+",
      timeframe: "8-16 týždňov",
    },
  ];

  const process = [
    {
      icon: Calculator,
      title: "Bezplatná konzultácia",
      description: "Analyzujeme vaše potreby a navrhneme optimálne riešenie",
    },
    {
      icon: FileText,
      title: "Detailná ponuka",
      description: "Pripravíme transparentnú cenovú ponuku s presným rozpočtom",
    },
    {
      icon: Handshake,
      title: "Začiatok spolupráce",
      description: "Po odsúhlasení ponuky začneme s realizáciou projektu",
    },
  ];

  const FloatingCard = ({ children, className = "", delay = "0s" }) => (
    <div
      className={`absolute bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );

  const PricingCalculator = () => (
    <div className="p-4 w-72">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-blue-500" />
        <span className="font-semibold text-gray-800">Price Calculator</span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Development</span>
          <span className="text-sm font-bold">€8,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Design</span>
          <span className="text-sm font-bold">€2,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Testing</span>
          <span className="text-sm font-bold">€1,500</span>
        </div>
        <div className="border-t pt-2 flex justify-between">
          <span className="font-bold text-gray-800">Total</span>
          <span className="font-bold text-blue-600">€11,500</span>
        </div>
      </div>
    </div>
  );

  const TestimonialCard = () => (
    <div className="p-4 w-80">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-3">
        "Maradlo vytvorilo pre nás fantastickú aplikáciu. Profesionálny prístup
        a kvalita."
      </p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        <div>
          <div className="text-sm font-bold text-gray-800">Ján Novák</div>
          <div className="text-xs text-gray-600">CEO, TechCorp</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40"></div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 text-sm font-medium mb-6">
            <CreditCard className="w-4 h-4 mr-2" />
            Cenníky služieb
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.3]">
            Transparentné
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-[1.3]">
              ceny na mieru
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-[1.3]">
            Transparentné cenové balíky prispôsobené rôznym typom projektov.
            Všetky ceny sú orientačné a finálna cena závisí od konkrétnych
            požiadaviek.
          </p>
        </div>

        {/* Pricing Cards with Floating Elements */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl border-2 p-8 ${
                  pkg.popular
                    ? "border-primary shadow-xl scale-105"
                    : "border-white/20 shadow-lg hover:shadow-xl"
                } transition-all duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Najpopulárnejší
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {pkg.priceRange}
                    </span>
                    <span className="text-gray-600 ml-2">€</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Doba realizácie: {pkg.timeframe}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="contact" spy={true} smooth={true} duration={700}>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    } font-semibold py-3`}
                  >
                    Získať ponuku
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                postupujeme
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš proces je navrhnutý tak, aby ste mali plnú kontrolu nad
              rozpočtom a harmonogramom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included Services */}
        <div className="bg-gradient-subtle rounded-3xl p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Čo je vždy zahrnuté v cene
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Detailná analýza požiadaviek",
                "Profesionálny dizajn UI/UX",
                "Kvalitný, testovaný kód",
                "Responzívne riešenie",
                "SEO optimalizácia",
                "Bezpečnostné opatrenia",
                "Dokumentácia projektu",
                "Základná podpora po spustení",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Potrebujete individuálnu ponuku?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Každý projekt je jedinečný. Kontaktujte nás pre bezplatnú
            konzultáciu a personalizovanú ponuku.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={700}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg group"
            >
              Bezplatná konzultácia
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Price;
