
import {React, useState} from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg fixed-top">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link
                to="top"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center py-4 px-2 cursor-pointer"
              >
                <img src={Logo} width={150} height={150} />
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Button on the right */}
          <div className="hidden md:flex items-center">

          <Link
            to="company-info"
            spy={true}
            smooth={true}
            duration={500}
            className="py-4 px-2 text-gray-900 font-normal hover:text-green-500 transition duration-300 cursor-pointer"
          >
            Kto sme a čo robíme
          </Link>

          <Link
            to="why-us"
            spy={true}
            smooth={true}
            duration={500}
            className="py-4 px-2 text-gray-900 font-normal hover:text-green-500 transition duration-300 cursor-pointer"
          >
            Prečo práve my
          </Link>
          
          <Link
            to="price"
            spy={true}
            smooth={true}
            duration={500}
            className="py-4 px-2 text-gray-900 font-normal hover:text-green-500 transition duration-300 cursor-pointer"
          >
            Cena
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="py-4 px-2 text-gray-900 font-normal hover:text-green-500 transition duration-300 cursor-pointer"
          >
            Kontakt
          </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link
            to="company-info"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
          Kto sme a čo robíme
        </Link>

        <Link
            to="why-us"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
          Prečo práve my
        </Link>


        <Link
            to="price"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
          Cena
        </Link>
        <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Kontakt
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
