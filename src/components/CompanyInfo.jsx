import {React, useEffect} from 'react';
import HappyPerson from '../assets/happy_person.svg';
import Handshake from '../assets/handshake.svg';
import Bug from '../assets/bug2.svg';
import Clock from '../assets/clock.svg';
import BinaryCode from '../assets/binary_code.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyInfo = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000
    });
    }, []);

  return (
    <div class="bg-white flex items-center justify-center rounded-b-2xl">
        <div class="container mx-auto px-4 py-24 max-w-screen-xl">
            <span class="text-6xl text-gray-800 font-bold mb-2">Kto sme a čo robíme?</span>
            
            <div class="flex flex-wrap items-center py-2 justify-center md:justify-between">
                <span class="text-xl text-gray-500 font-semibold mb-2">Cieľom firmy Maradlo je mať spokojného zákazníka. Najväčším potešením pre nás je, keď nás oslovíte zas a znova.</span>
            </div>

            <div class="flex flex-wrap items-center py-12 justify-center md:justify-between" data-aos="fade-left">
                <div class="order-last md:order-none w-max md:w-1/4 flex justify-center md:justify-end p-4">
                    <img src={HappyPerson} width={512} alt="HappyPersonImage" class="max-w-sm rounded-lg"/>
                </div>
                <div class="order-first md:order-none w-full md:w-1/2 text-white text-left p-4">
                    <span class="text-6xl text-gray-800 font-semibold">Vaša spokojnosť</span><br/>
                    <p class="mt-8 leading-normal text-2xl text-gray-800">Spokojný zákazník je pre nás najväčšia priorita. Len spokojný zákazník nebude rozmýšlať komu zverí svoj nápad, ale automaticky siahne po dobrej skúsenosti.</p>
                </div>
            </div>

            <div class="flex flex-wrap items-center py-12 justify-center md:justify-between" data-aos="fade-right">
                <div class="w-full md:w-1/2 text-white text-left p-4">
                    <span class="text-6xl text-gray-800 font-semibold">Komunikácia</span><br/>
                    <p class="mt-8 leading-normal text-2xl text-gray-800">Naším cieľom je čo najlepšie uspokojiť vaše požiadavky. Preto pravidelne komunikujeme a necháme vás zasahovať do procesu tvorby vášho nápadu.</p>
                </div>
                <div class="w-full md:w-1/4 flex justify-center md:justify-end p-4">
                    <img src={Handshake} width={512} alt="HandshakeImage" class="max-w-sm rounded-lg"/>
                </div>
            </div>

            <div class="flex flex-wrap items-center py-12 justify-center md:justify-between" data-aos="fade-left">
                <div class="order-last md:order-none w-max md:w-1/4 flex justify-center md:justify-end p-4">
                    <img src={Bug} width={512} alt="BigImage" class="max-w-sm rounded-lg"/>
                </div>
                <div class="order-first md:order-none w-full md:w-1/2 text-white text-left p-4">
                    <span class="text-6xl text-gray-800 font-semibold">Kvalita kódu</span><br/>
                    <p class="mt-8 leading-normal text-2xl text-gray-800">U nás sa to nerobí tak, že rýchlo zbúchame kód a ďalej neriešime. Náš kód je testovaný, bezpečný a dodržuje najnovšie postupy.</p>
                </div>
            </div>

            <div class="flex flex-wrap items-center py-12 justify-center md:justify-between" data-aos="fade-right">
                <div class="w-full md:w-1/2 text-white text-left p-4">
                    <span class="text-6xl text-gray-800 font-semibold">Starostlivosť</span><br/>
                    <p class="mt-8 leading-normal text-2xl text-gray-800">Maradlo vám ponúka spoluprácu aj po doručení objednávky. Za mesačný poplatok už od 50€ vám budeme poskytovať technologickú podporu a riešiť akékoľvek problémy.<br />Inými slovami, podržíme vám chrbát.</p>
                </div>
                <div class="w-full md:w-1/4 flex justify-center md:justify-end p-4">
                    <img src={BinaryCode} width={512} alt="BinaryCodeImage" class="max-w-sm rounded-lg"/>
                </div>
            </div>

            <div class="flex flex-wrap items-center py-12 justify-center md:justify-between" data-aos="fade-left">
                <div class="order-last md:order-none w-max md:w-1/4 flex justify-center md:justify-end p-4">
                    <img src={Clock} width={512} alt="ClockImage" class="max-w-sm rounded-lg"/>
                </div>
                <div class="order-first md:order-none w-full md:w-1/2 text-white text-left p-4">
                    <span class="text-6xl text-gray-800 font-semibold">Dodržiavanie termínov</span><br/>
                    <p class="mt-8 leading-normal text-2xl text-gray-800">Keď sa na niečom dohodneme, tak to proste dodržíme. Bodka. Koniec.</p>
                </div>
            </div>
        </div>
</div>
  );
};

export default CompanyInfo;