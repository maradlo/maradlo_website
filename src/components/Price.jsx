import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-scroll';
import { Check, ArrowRight, Calculator, Handshake, FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Price = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
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
        "30 dní bezplatnej podpory"
      ],
      priceRange: "2 000 - 5 000",
      timeframe: "2-4 týždne"
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
        "Školenie používateľov"
      ],
      priceRange: "5 000 - 15 000",
      timeframe: "4-8 týždňov",
      popular: true
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
        "Dedikovaný project manager"
      ],
      priceRange: "15 000+",
      timeframe: "8-16 týždňov"
    }
  ];

  const process = [
    {
      icon: Calculator,
      title: "Bezplatná konzultácia",
      description: "Analyzujeme vaše potreby a navrhneme optimálne riešenie"
    },
    {
      icon: FileText,
      title: "Detailná ponuka",
      description: "Pripravíme transparentnú cenovú ponuku s presným rozpočtom"
    },
    {
      icon: Handshake,
      title: "Začiatok spolupráce",
      description: "Po odsúhlasení ponuky začneme s realizáciou projektu"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cenníky služieb
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transparentné cenové balíky prispôsobené rôznym typom projektov.
            Všetky ceny sú orientačné a finálna cena závisí od konkrétnych požiadaviek.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                pkg.popular
                  ? 'border-primary shadow-professional'
                  : 'border-gray-200 shadow-elegant hover:border-gray-300'
              } transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Najpopulárnejší
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{pkg.priceRange}</span>
                  <span className="text-gray-600 ml-2">€</span>
                </div>
                <div className="text-sm text-gray-500">Doba realizácie: {pkg.timeframe}</div>
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
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } font-semibold py-3`}
                >
                  Získať ponuku
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako postupujeme
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš proces je navrhnutý tak, aby ste mali plnú kontrolu nad rozpočtom a harmonogramom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                "Základná podpora po spustení"
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
            Každý projekt je jedinečný. Kontaktujte nás pre bezplatnú konzultáciu a personalizovanú ponuku.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={700}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg group">
              Bezplatná konzultácia
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Price;