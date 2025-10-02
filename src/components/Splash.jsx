
import React from 'react';
import Code from '../assets/code.svg';
import { Button } from './ui/button';
import { Link } from 'react-scroll';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Splash = () => {
  const keyPoints = [
    "Profesionálne webové aplikácie",
    "Mobilné riešenia na mieru",
    "Technická podpora a údržba"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30,58,138,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full px-4 py-2 bg-primary/10 text-primary text-sm font-medium">
                  🚀 Profesionálne softvérové riešenia
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] text-balance">
                  Vytvárame
                  <span className="text-primary block">digitálne riešenia</span>
                  ktoré fungują
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Spoločnosť <strong className="text-gray-900">Maradlo</strong> špecializuje na vývoj
                  profesionálnych webových aplikácií a mobilných riešení na mieru pre firmy každej veľkosti.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="contact" spy={true} smooth={true} duration={700}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                  >
                    Začať projekt
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="company-info" spy={true} smooth={true} duration={700}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-8 py-4 text-lg transition-colors"
                  >
                    Viac o nás
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>5+ rokov skúseností</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>50+ dokončených projektov</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-professional bg-gradient-to-br from-gray-100 to-gray-200 p-12">
                  <img
                    src={Code}
                    alt="Professional Software Development"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-primary/5 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 rounded-3xl bg-gray-900/5 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splash;