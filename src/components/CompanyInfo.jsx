import React, { useEffect } from "react";
import {
  Users,
  Target,
  Shield,
  Clock,
  HeartHandshake,
  Award,
  Code2,
  Zap,
  Cpu,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const CompanyInfo = () => {
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

  const stats = [
    {
      number: "5+",
      label: "Rokov skúseností",
      icon: Award,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      number: "50+",
      label: "Dokončených projektov",
      icon: Target,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      number: "24/7",
      label: "Technická podpora",
      icon: Shield,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      number: "100%",
      label: "Spokojnosť klientov",
      icon: HeartHandshake,
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Klientsky prístup",
      description:
        "Každý projekt pristupujeme individuálne s dôrazom na potreby a ciele našich klientov.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Kvalita a bezpečnosť",
      description:
        "Dodržujeme najvyššie štandardy kvality kódu, bezpečnosti a testovanie každého riešenia.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Termíny a spoľahlivosť",
      description:
        "Rešpektujeme dohodnuté termíny a zabezpečujeme transparentnú komunikáciu počas celého procesu.",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: HeartHandshake,
      title: "Dlhodobé partnerstvo",
      description:
        "Poskytujeme kompletnú podporu aj po dokončení projektu, budujeme dlhodobé partnerstvá.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const TechStack = () => (
    <div className="p-4 w-64">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded bg-gradient-to-r from-[#4c2844] to-purple-600"></div>
        <span className="font-semibold text-gray-800">Tech Stack</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {["React", "Node.js", "Python", "AWS"].map((tech, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-xs font-medium text-gray-700">{tech}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectTimeline = () => (
    <div className="p-4 w-72">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-[#4c2844]" />
        <span className="font-semibold text-gray-800">Project Timeline</span>
      </div>
      <div className="space-y-3">
        {["Discovery", "Design", "Development", "Launch"].map(
          (phase, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4c2844] to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                {index + 1}
              </div>
              <span className="text-sm text-gray-700">{phase}</span>
            </div>
          )
        )}
      </div>
    </div>
  );

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40"></div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4 mr-2" />O spoločnosti Maradlo
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Kto sme a čo
            <span className="block bg-gradient-to-r from-[#4c2844] via-purple-600 to-pink-600 bg-clip-text text-transparent">
              robíme
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sme špecialisti na vývoj profesionálnych softvérových riešení.
            Kombinujeme technické know-how s hlbokým porozumením biznisu našich
            klientov.
          </p>
        </div>

        {/* Stats with modern design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement with floating elements */}
        <div className="relative mb-24">
          <div
            className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl"
            data-aos="fade-up"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Naša misia
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Transformujeme nápady našich klientov na úspešné digitálne
                riešenia, ktoré prinášajú skutočnú hodnotu ich businessu a
                používateľom.
              </p>
              <div className="inline-flex items-center justify-center w-20 h-1 bg-gradient-to-r from-[#4c2844] to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Floating element - positioned in right margin area */}
          <FloatingCard className="-top-16 -right-24 hidden 2xl:block" delay="0s">
            <TechStack />
          </FloatingCard>

          {/* Floating element - positioned in left margin area */}
          <FloatingCard className="-bottom-16 -left-32 hidden 2xl:block" delay="3s">
            <ProjectTimeline />
          </FloatingCard>
        </div>

        {/* Values with gradient cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${value.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process with modern design */}
        <div className="text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Náš{" "}
            <span className="bg-gradient-to-r from-[#4c2844] to-purple-600 bg-clip-text text-transparent">
              proces
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Analýza",
                desc: "Pochopenie vašich potrieb a cieľov",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Vývoj",
                desc: "Implementácia pomocou najnovších technológií",
                gradient: "from-purple-500 to-violet-500",
              },
              {
                step: "03",
                title: "Podpora",
                desc: "Kontinuálna starostlivosť a údržba",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${phase.gradient} rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
                </div>

              </div>
            ))}
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

export default CompanyInfo;
