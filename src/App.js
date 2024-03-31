import './App.css';
import React, { Suspense, lazy } from 'react';
const Navbar = lazy(() => import('./components/Navbar'));
const Splash = lazy(() => import('./components/Splash'));
const CompanyInfo = lazy(() => import('./components/CompanyInfo'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Price = lazy(() => import('./components/Price'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Načítávam...</div>}>
        <div id="top"></div>
        <Navbar />
        <div id="home" className="pt-16">
          <Splash />
        </div>
        <div id="company-info">
          <CompanyInfo />
        </div>
        <div id="why-us">
          <WhyUs />
        </div>
        <div id="price">
          <Price />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
    </Suspense>
  );
}

export default App;
