import React, { useEffect } from 'react';
import { Globe, Smartphone, Code, Database, Cloud, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Webové aplikácie",
      description: "Moderné, responzívne webové aplikácie postavené na najnovších technológiách.",
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobilné aplikácie",
      description: "Natívne a cross-platform mobilné aplikácie pre iOS a Android platformy.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Backend systémy",
      description: "Škálovateľné backend riešenia s dôrazom na výkon a bezpečnosť.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud riešenia",
      description: "Nasadenie a správa aplikácií v cloudových infraštruktúrach.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Code,
      title: "API integrácie",
      description: "Integrácia s externými službami a vytvorenie vlastných API riešení.",
      technologies: ["REST", "GraphQL", "Webhooks", "Microservices"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Automatizácia",
      description: "Automatizácia business procesov a workflow optimalizácia.",
      technologies: ["CI/CD", "Automation", "Testing", "Monitoring"],
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Naše služby
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ponúkame komplexné softvérové riešenia od návrhu až po implementáciu a údržbu.
            Využívame moderné technológie a osvedčené postupy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-elegant hover:shadow-professional transition-all duration-300 border border-gray-100 hover:border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl p-12 shadow-elegant">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako pracujeme
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš proces je navrhnutý tak, aby zabezpečil maximálnu transparentnosť a kvalitu výsledkov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Konzultácia", desc: "Analýza požiadaviek a návrh riešenia" },
              { step: "2", title: "Návrh", desc: "Vytvorenie prototypu a technickej špecifikácie" },
              { step: "3", title: "Vývoj", desc: "Implementácia s pravidelným reportingom pokroku" },
              { step: "4", title: "Nasadenie", desc: "Testing, optimalizácia a spustenie do produkcie" }
            ].map((phase, index) => (
              <div key={index} className="relative text-center" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pripravení začať váš projekt?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontaktujte nás a porozprávajme si o vašich potrebách. Prvá konzultácia je zadarmo.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={700}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg">
              Začať projekt
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;