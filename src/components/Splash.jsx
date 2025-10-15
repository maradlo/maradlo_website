import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";

const Splash = () => {
  const keyPoints = [
    "Profesionálne webové aplikácie",
    "Mobilné riešenia na mieru",
    "Technická podpora a údržba",
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

  const CodeSnippet = () => (
    <div className="p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-600 ml-2 font-sans text-xs">app.js</span>
      </div>
      <div className="space-y-1 text-gray-800">
        <div>
          <span className="text-blue-600">const</span>{" "}
          <span className="text-purple-600">app</span> ={" "}
          <span className="text-green-600">express</span>();
        </div>
        <div>
          <span className="text-blue-600">app</span>.
          <span className="text-yellow-600">get</span>(
          <span className="text-green-600">'/api'</span>,{" "}
          <span className="text-purple-600">handler</span>);
        </div>
        <div>
          <span className="text-blue-600">app</span>.
          <span className="text-yellow-600">listen</span>(
          <span className="text-orange-600">3000</span>);
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="p-4 w-72">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded bg-primary"></div>
        <span className="font-semibold text-gray-800">Analytics</span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Aktívni používatelia</span>
          <span className="font-bold text-green-600">+12.5%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full w-3/4"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="bg-blue-50 p-2 rounded text-center">
            <div className="text-lg font-bold text-blue-600">2.4k</div>
            <div className="text-xs text-gray-600">Návštevy</div>
          </div>
          <div className="bg-green-50 p-2 rounded text-center">
            <div className="text-lg font-bold text-green-600">89%</div>
            <div className="text-xs text-gray-600">Konverzia</div>
          </div>
          <div className="bg-purple-50 p-2 rounded text-center">
            <div className="text-lg font-bold text-purple-600">4.2</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );

  const MobileApp = () => (
    <div className="w-48 bg-gray-900 rounded-2xl p-1">
      <div className="bg-white rounded-xl p-4 h-80">
        <div className="flex items-center justify-between mb-4">
          <div className="w-8 h-8 rounded-full bg-primary"></div>
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        </div>
        <div className="space-y-3">
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="grid grid-cols-2 gap-2 mt-6">
            <div className="h-20 bg-blue-50 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <div className="h-20 bg-green-50 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40"></div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
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

      <div className="relative w-full z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 text-[#4c2844] text-sm font-medium">
                  <Code2 className="w-4 h-4 mr-2" />
                  Moderné softvérové riešenia
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.3] text-balance mb-8">
                  Transformujeme
                  <span className="block bg-gradient-to-r from-[#4c2844] via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3]">
                    digitálne nápady
                  </span>
                  na skutočnosť
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-[1.3] max-w-2xl">
                  Vytvárame{" "}
                  <strong className="text-gray-900">
                    výkonné webové aplikácie
                  </strong>{" "}
                  a <strong className="text-gray-900">mobilné riešenia</strong>,
                  ktoré poháňajú moderné podnikanie a prinášajú skutočnú
                  hodnotu.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 gap-3">
                {keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="contact" spy={true} smooth={true} duration={700}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#4c2844] to-purple-600 hover:from-[#3d1f36] hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                  >
                    Začať spoluprácu
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="company-info" spy={true} smooth={true} duration={700}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-8 py-4 text-lg transition-colors bg-white/80 backdrop-blur-sm"
                  >
                    Naše portfólio
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>5+ rokov skúseností</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>20+ úspešných projektov</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>100% spokojnosť</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Elements */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Code Editor */}
              <FloatingCard className="top-8 left-4 w-64 lg:w-72" delay="0s">
                <CodeSnippet />
              </FloatingCard>

              {/* Dashboard */}
              <FloatingCard className="top-32 right-4" delay="2s">
                <Dashboard />
              </FloatingCard>

              {/* Mobile App */}
              <FloatingCard className="bottom-16 left-8" delay="4s">
                <MobileApp />
              </FloatingCard>

              {/* Tech Icons */}
              <FloatingCard className="bottom-32 right-16 p-4" delay="1s">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      React
                    </div>
                    <div className="text-xs text-gray-600">Frontend</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="top-48 left-16 p-4" delay="3s">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Database className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Node.js
                    </div>
                    <div className="text-xs text-gray-600">Backend</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard className="bottom-8 right-4 p-4" delay="5s">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Mobile
                    </div>
                    <div className="text-xs text-gray-600">Apps</div>
                  </div>
                </div>
              </FloatingCard>
            </div>
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

export default Splash;
