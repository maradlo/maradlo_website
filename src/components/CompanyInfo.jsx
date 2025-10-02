import React, { useEffect } from 'react';
import { Users, Target, Shield, Clock, HeartHandshake, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const stats = [
    { number: "5+", label: "Rokov skúseností", icon: Award },
    { number: "50+", label: "Dokončených projektov", icon: Target },
    { number: "24/7", label: "Technická podpora", icon: Shield },
    { number: "100%", label: "Spokojnosť klientov", icon: HeartHandshake }
  ];

  const values = [
    {
      icon: Users,
      title: "Klientsky prístup",
      description: "Každý projekt pristupujeme individuálne s dôrazom na potreby a ciele našich klientov.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Shield,
      title: "Kvalita a bezpečnosť",
      description: "Dodržujeme najvyššie štandardy kvality kódu, bezpečnosti a testovanie každého riešenia.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Clock,
      title: "Termíny a spoľahlivosť",
      description: "Rešpektujeme dohodnuté termíny a zabezpečujeme transparentnú komunikáciu počas celého procesu.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: HeartHandshake,
      title: "Dlhodobé partnerstvo",
      description: "Poskytujeme kompletnú podporu aj po dokončení projektu, budujeme dlhodobé partnerstvá.",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            O spoločnosti Maradlo
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sme špecialisti na vývoj profesionálnych softvérových riešení.
            Kombinujeme technické know-how s hlbokým porozumením biznisu našich klientov.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24" data-aos="fade-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-subtle rounded-3xl p-12 mb-24" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Naša misia
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Transformujeme nápady našich klientov na úspešné digitálne riešenia,
              ktoré prinášajú skutočnú hodnotu ich businessu a používateľom.
            </p>
            <div className="inline-flex items-center justify-center w-20 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-elegant transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${value.color}`}>
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Náš proces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Analýza", desc: "Pochopenie vašich potrieb a cieľov" },
              { step: "02", title: "Vývoj", desc: "Implementácia pomocou najnovších technológií" },
              { step: "03", title: "Podpora", desc: "Kontinuálna starostlivosť a údržba" }
            ].map((phase, index) => (
              <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="text-6xl font-bold text-gray-100 mb-4">{phase.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h4>
                <p className="text-gray-600">{phase.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;