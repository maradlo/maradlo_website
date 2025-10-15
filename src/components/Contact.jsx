import React, { useEffect } from "react";
import { Button } from "./ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Calendar,
  Zap,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefón",
      value: "+421 904 237 003",
      href: "tel:+421904237003",
      description: "Pondelok - Piatok, 9:00 - 17:00",
    },
    {
      icon: Mail,
      title: "Email",
      value: "marek.zacik@maradlo.sk",
      href: "mailto:marek.zacik@maradlo.sk",
      description: "Odpovieme do 24 hodín",
    },
    {
      icon: MapPin,
      title: "Adresa",
      value: "Tvrdomestice 96",
      href: "#",
      description: "Stretnutie po dohode",
    },
    {
      icon: Clock,
      title: "Pracovný čas",
      value: "Po - Pi: 9:00 - 17:00",
      href: "#",
      description: "Urgentné veci aj mimo pracovného času",
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

  const ContactStatus = () => (
    <div className="p-4 w-64">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="font-semibold text-gray-800">Online Now</span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Response Time</span>
          <span className="text-sm font-bold text-green-600">&lt; 2h</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Availability</span>
          <span className="text-sm font-bold text-blue-600">Mo-Fr</span>
        </div>
        <div className="border-t pt-2">
          <div className="text-xs text-gray-500">Last active: Just now</div>
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
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 text-[#4c2844] text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Spojte sa s nami
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.3]">
            Začnime
            <span className="block bg-gradient-to-r from-[#4c2844] via-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.3]">
              spoluprácu
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-[1.3]">
            Máte nápad na projekt? Potrebujete konzultáciu? Neváhajte sa na nás
            obrátiť. Prvá konzultácia je zadarmo.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Spojte sa s nami
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Sme tu, aby sme vám pomohli transformovať vaše nápady na úspešné
                digitálne riešenia.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4c2844] to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {contact.title}
                      </h4>
                      {contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          className="text-lg font-medium text-primary hover:text-primary/80 transition-colors block mb-1 break-all"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-gray-900 mb-1 break-words">
                          {contact.value}
                        </div>
                      )}
                      <p className="text-sm text-gray-600">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#4c2844] to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Rýchly kontakt
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Potrebujete rýchlu odpoveď na vašu otázku? Využite jeden z
                nasledujúcich spôsobov:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-[#4c2844] to-purple-600 hover:from-[#3d1f36] hover:to-purple-700 px-6 py-4 text-base"
                >
                  <a
                    href="tel:+421904237003"
                    className="flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Zavolať teraz</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="flex-1 border-2 border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-6 py-4 text-base"
                >
                  <a
                    href="mailto:marek.zacik@maradlo.sk"
                    className="flex items-center justify-center gap-3"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Napísať email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-900 via-[#4c2844] to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Začnime{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  spoluprácu
                </span>
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Popíšte nám váš projekt a my vám do 24 hodín pošleme detailnú
                ponuku s cenovou kalkuláciou a harmonogramom.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">
                    Bezplatná konzultácia a analýza
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">
                    Transparentná cenová ponuka
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Žiadne skryté poplatky</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 group shadow-lg"
                asChild
              >
                <a
                  href="mailto:marek.zacik@maradlo.sk"
                  className="flex items-center justify-center gap-3"
                >
                  <span>Začať projekt</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-[#4c2844]/30 to-purple-400/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full"></div>
          </div>

          {/* Floating element - positioned in right margin area */}
          <FloatingCard
            className="top-1/3 -right-28 hidden 2xl:block z-10"
            delay="1s"
          >
            <ContactStatus />
          </FloatingCard>
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

export default Contact;
