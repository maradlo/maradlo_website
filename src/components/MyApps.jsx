import React, { useEffect } from "react";
import {
  Smartphone,
  ExternalLink,
  Activity,
  Search,
  Zap,
  LayoutGrid,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppleLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AppStoreBadge = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 bg-black text-white rounded-xl px-5 py-3 hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg"
  >
    <AppleLogo className="w-6 h-6" />
    <div className="text-left">
      <div className="text-[10px] leading-tight opacity-80">Stiahnuť na</div>
      <div className="text-base font-semibold leading-tight">App Store</div>
    </div>
  </a>
);

const MyApps = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const featuredApp = {
    name: "Flexor",
    subtitle: "Fitness Companion",
    description:
      "Váš komplexný fitness partner — poháňaný umelou inteligenciou, vytvorený pre výsledky. Kombinuje sledovanie tréningov s manažmentom výživy, AI koučingom a funkciami pre mentálne zdravie.",
    features: [
      "AI generované tréningy a jedálničky",
      "Food Vision AI skener jedál",
      "400+ databáza cvikov",
      "Apple Watch integrácia",
      "Sledovanie pokroku a fotografie",
      "Platforma pre trénerov a klientov",
    ],
    category: "Zdravie a Fitness",
    appStoreUrl:
      "https://apps.apple.com/ca/app/flexor-fitness-companion/id6758482608",
  };

  const otherApps = [
    {
      name: "Detectify",
      subtitle: "Food & Beauty",
      description:
        "Skenujte čiarové kódy a ingrediencie pre odhalenie alergénov, aditív a kľúčovej výživy. Nakupujte s istotou.",
      category: "Zdravie a Fitness",
      icon: Search,
      gradient: "from-emerald-500 to-teal-600",
      appStoreUrl:
        "https://apps.apple.com/ca/app/detectify-food-beauty/id6754537579",
    },
    {
      name: "Fearless Racer",
      subtitle: "Endless Driver",
      description:
        "Preteky, driftovanie a vyhýbanie sa prekážkam na nekonečných tratiach. Zbierajte mince a odomykajte autá.",
      category: "Hry",
      icon: Zap,
      gradient: "from-blue-500 to-indigo-600",
      appStoreUrl:
        "https://apps.apple.com/ca/app/fearless-racer-endless-driver/id6754826016",
    },
    {
      name: "Grid Genius",
      subtitle: "Strategická hra",
      description:
        "Ultimátna mriežková strategická hra. Súťažte proti AI na štyroch úrovniach obtiažnosti.",
      category: "Puzzle",
      icon: LayoutGrid,
      gradient: "from-sky-500 to-blue-600",
      appStoreUrl:
        "https://apps.apple.com/ca/app/grid-genius/id6736571131",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-orange-50/20 to-rose-50/20"></div>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-orange-400/5 to-rose-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-sky-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-orange-50 to-rose-50 border border-orange-200/50 text-orange-700 text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4 mr-2" />
            Naše portfólio
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.3]">
            Aplikácie, ktoré sme
            <span className="block bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 bg-clip-text text-transparent leading-[1.3]">
              vytvorili
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-[1.3]">
            Od fitness po hry — naše aplikácie pomáhajú používateľom každý deň.
            Pozrite sa na naše najnovšie projekty.
          </p>
        </div>

        {/* Featured App - Flexor */}
        <div className="mb-16" data-aos="fade-up">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-16">
              {/* Phone Mockup */}
              <div className="flex justify-center items-center order-2 lg:order-1">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-rose-500/30 rounded-[3rem] blur-2xl scale-110"></div>

                  {/* Phone frame */}
                  <div className="relative bg-gray-950 rounded-[2.5rem] p-2 shadow-2xl border border-gray-700/50">
                    {/* Screen */}
                    <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-[2rem] overflow-hidden w-[260px]">
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 pt-3 pb-1">
                        <span className="text-white text-xs font-medium">
                          9:41
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-white/40 rounded-sm">
                            <div className="w-3/4 h-full bg-green-400 rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* App content */}
                      <div className="px-4 pb-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-white text-lg font-bold">
                            Flexor
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 flex items-center justify-center">
                            <Activity className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Today's workout card */}
                        <div className="bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl p-4">
                          <div className="text-white/80 text-xs font-medium">
                            Dnešný tréning
                          </div>
                          <div className="text-white text-xl font-bold mt-1">
                            Nohy & Ramená
                          </div>
                          <div className="flex gap-2 mt-3">
                            <div className="bg-white/20 rounded-lg px-2.5 py-1 text-white text-xs font-medium">
                              45 min
                            </div>
                            <div className="bg-white/20 rounded-lg px-2.5 py-1 text-white text-xs font-medium">
                              12 cvikov
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                            <div className="text-gray-400 text-xs">
                              Kalórie
                            </div>
                            <div className="text-white text-lg font-bold">
                              2,450
                            </div>
                            <div className="text-green-400 text-xs mt-0.5">
                              +12%
                            </div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                            <div className="text-gray-400 text-xs">
                              Tréningy
                            </div>
                            <div className="text-white text-lg font-bold">
                              156
                            </div>
                            <div className="text-orange-400 text-xs mt-0.5">
                              tento mesiac
                            </div>
                          </div>
                        </div>

                        {/* Exercise list */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-2.5">
                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                              <Activity className="w-4 h-4 text-orange-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-xs font-medium">
                                Bench Press
                              </div>
                              <div className="text-gray-500 text-xs">
                                4 x 12
                              </div>
                            </div>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-2.5">
                            <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
                              <Activity className="w-4 h-4 text-rose-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-xs font-medium">
                                Squats
                              </div>
                              <div className="text-gray-500 text-xs">
                                3 x 15
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-2.5">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                              <Activity className="w-4 h-4 text-amber-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-xs font-medium">
                                Shoulder Press
                              </div>
                              <div className="text-gray-500 text-xs">
                                3 x 10
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Details */}
              <div className="flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Odporúčané
                  </span>
                  <span className="text-gray-400 text-sm">
                    {featuredApp.category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {featuredApp.name}
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                  {featuredApp.subtitle}
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {featuredApp.description}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {featuredApp.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* App Store button */}
                <div className="flex flex-wrap items-center gap-4">
                  <AppStoreBadge href={featuredApp.appStoreUrl} />
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span>Poháňané AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherApps.map((app, index) => (
            <a
              key={index}
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon area */}
              <div
                className={`relative h-40 bg-gradient-to-br ${app.gradient} p-6 flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <app.icon className="relative w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {app.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {app.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{app.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {app.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                  <AppleLogo className="w-4 h-4" />
                  <span>Zobraziť v App Store</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApps;
