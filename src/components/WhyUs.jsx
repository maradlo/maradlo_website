import React, { useEffect } from "react";
import {
  Globe,
  Smartphone,
  Code,
  Database,
  Cloud,
  Zap,
  ArrowRight,
  Code2,
  Layers,
  Cpu,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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

  const services = [
    {
      icon: Globe,
      title: "Webové aplikácie",
      description:
        "Moderné, responzívne webové aplikácie postavené na najnovších technológiách.",
      technologies: ["React", "Vue", "Tailwind", "Shadcn"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Mobilné aplikácie",
      description:
        "Natívne a cross-platform mobilné aplikácie pre platformy iOS a Android.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Database,
      title: "Backend systémy",
      description:
        "Škálovateľné backend riešenia s dôrazom na výkon a bezpečnosť.",
      technologies: ["Node", "Python", "PostgreSQL", "MongoDB"],
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: Cloud,
      title: "Cloud riešenia",
      description:
        "Nasadenie a správa aplikácií v cloudových infraštruktúrach.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Code,
      title: "API integrácie",
      description:
        "Integrácia s externými službami a vytvorenie vlastných API riešení.",
      technologies: ["REST", "GraphQL", "Webhooks", "Microservices"],
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Automatizácia",
      description: "Automatizácia business procesov a workflow optimalizácia.",
      technologies: ["CI/CD", "Automation", "Testing", "Monitoring"],
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  const APIExample = () => (
    <div className="p-4 w-80 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-600 font-sans text-xs">API Response</span>
      </div>
      <div className="bg-gray-900 rounded-lg p-3 text-green-400">
        <div>{"{"}</div>
        <div className="ml-4">"status": "success",</div>
        <div className="ml-4">"data": [...]</div>
        <div>{"}"}</div>
      </div>
    </div>
  );

  const TechMetrics = () => (
    <div className="p-4 w-64">
      <div className="flex items-center gap-2 mb-4">
        <Cpu className="w-5 h-5 text-[#4c2844]" />
        <span className="font-semibold text-gray-800">Performance</span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Load Time</span>
          <span className="text-sm font-bold text-green-600">0.8s</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-[#4c2844] to-purple-600 h-2 rounded-full w-5/6"></div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center">
            <div className="text-lg font-bold text-[#4c2844]">99.9%</div>
            <div className="text-xs text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">A+</div>
            <div className="text-xs text-gray-600">Security</div>
          </div>
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
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 text-[#4c2844] text-sm font-medium mb-6">
            <Layers className="w-4 h-4 mr-2" />
            Naše služby
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.3]">
            Komplexné
            <span className="block bg-gradient-to-r from-[#4c2844] via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3]">
              digitálne riešenia
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-[1.3]">
            Ponúkame komplexné softvérové riešenia od návrhu až po implementáciu
            a údržbu. Využívame moderné technológie a osvedčené postupy.
          </p>
        </div>

        {/* Services Grid with Floating Elements */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100/80 text-gray-700 rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating element - positioned in right margin area, aligned with middle row */}
          <FloatingCard
            className="top-1/2 -translate-y-1/2 -mt-12 -right-32 hidden 2xl:block"
            delay="1s"
          >
            <APIExample />
          </FloatingCard>

          {/* Floating element - positioned in left margin area, same height as right card */}
          <FloatingCard
            className="top-1/2 -translate-y-1/2 -mt-12 left-32 hidden 2xl:block"
            delay="4s"
          >
            <TechMetrics />
          </FloatingCard>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako{" "}
              <span className="bg-gradient-to-r from-[#4c2844] to-purple-600 bg-clip-text text-transparent">
                pracujeme
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš proces je navrhnutý tak, aby zabezpečil maximálnu
              transparentnosť a kvalitu výsledkov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Konzultácia",
                desc: "Analýza požiadaviek a návrh riešenia",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                step: "2",
                title: "Návrh",
                desc: "Vytvorenie prototypu a technickej špecifikácie",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                step: "3",
                title: "Vývoj",
                desc: "Implementácia s pravidelným reportingom pokroku",
                gradient: "from-purple-500 to-violet-500",
              },
              {
                step: "4",
                title: "Nasadenie",
                desc: "Testing, optimalizácia a spustenie do produkcie",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="relative text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${phase.gradient} rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {phase.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-br from-white/90 to-indigo-50/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pripravení začať váš projekt?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontaktujte nás a porozprávajme si o vašich potrebách. Prvá
              konzultácia je zadarmo.
            </p>
            <Link to="contact" spy={true} smooth={true} duration={700}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#4c2844] to-purple-600 hover:from-[#3d1f36] hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg group"
              >
                Začať projekt
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
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

export default WhyUs;
