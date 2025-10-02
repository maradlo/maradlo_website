import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefón",
      value: "+421 917 722 223",
      href: "tel:+421917722223",
      description: "Pondelok - Piatok, 9:00 - 17:00"
    },
    {
      icon: Mail,
      title: "Email",
      value: "marek.zacik@maradlo.sk",
      href: "mailto:marek.zacik@maradlo.sk",
      description: "Odpovieme do 24 hodín"
    },
    {
      icon: MapPin,
      title: "Adresa",
      value: "Bratislava, Slovensko",
      href: "#",
      description: "Stretnutie po dohode"
    },
    {
      icon: Clock,
      title: "Pracovný čas",
      value: "Po - Pi: 9:00 - 17:00",
      href: "#",
      description: "Urgentné veci aj mimo pracovného času"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Kontaktujte nás
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Máte nápad na projekt? Potrebujete konzultáciu? Neváhajte sa na nás obrátiť.
            Prvá konzultácia je zadarmo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Spojte sa s nami
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Sme tu, aby sme vám pomohli transformovať vaše nápady na úspešné digitálne riešenia.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-professional transition-all duration-300 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                      {contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          className="text-lg font-medium text-primary hover:text-primary/80 transition-colors block mb-1"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-gray-900 mb-1">{contact.value}</div>
                      )}
                      <p className="text-sm text-gray-600">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Rýchly kontakt</h4>
              <p className="text-gray-600 mb-6">
                Potrebujete rýchlu odpoveď na vašu otázku? Využite jeden z nasledujúcich spôsobov:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                  <a href="tel:+421917722223">
                    <Phone className="w-4 h-4 mr-2" />
                    Zavolať teraz
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 border-2">
                  <a href="mailto:marek.zacik@maradlo.sk">
                    <Mail className="w-4 h-4 mr-2" />
                    Napísať email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-professional rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Začnime spoluprácu
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Popíšte nám váš projekt a my vám do 24 hodín pošleme detailnú ponuku
                s cenovou kalkuláciou a harmonogramom.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Bezplatná konzultácia a analýza</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Transparentná cenová ponuka</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Žiadne skryté poplatky</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 group"
                asChild
              >
                <a href="mailto:marek.zacik@maradlo.sk">
                  Začať projekt
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;