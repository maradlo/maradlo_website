import './App.css';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import CompanyInfo from './components/CompanyInfo';
import WhyUs from './components/WhyUs';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div id="top"></div>
      <Navbar />
      <div id="home" class="pt-16">
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
    </div>
  );
}

export default App;
