import React, { useState, useEffect } from "react";
import LogoIcon from "../assets/logo_only_no_bg.png";
import LogoText from "../assets/logo_text_no_bg.png";
import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "company-info", label: "O nás" },
    { to: "why-us", label: "Služby" },
    { to: "price", label: "Cena" },
    { to: "contact", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed-top transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-elegant border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              to="top"
              spy={true}
              smooth={true}
              duration={700}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <img
                src={LogoIcon}
                alt="Maradlo Icon"
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
              <img
                src={LogoText}
                alt="Maradlo"
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={700}
                className="relative text-gray-700 hover:text-gray-900 font-medium tracking-wide cursor-pointer transition-colors duration-200 py-2 group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
            ))}
            <Link to="contact" spy={true} smooth={true} duration={700}>
              <Button className="ml-4 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200">
                Začať projekt
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <div className="py-6 space-y-3 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={700}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={700}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-semibold">
                  Začať projekt
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
