import {React, useEffect} from 'react';
import Quality from '../assets/quality2.svg';
import Technology from '../assets/technology.svg';
import Speed from '../assets/speed2.svg';
import Support from '../assets/support.svg';
import Custom from '../assets/custom.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000
    });
    }, []);

  return (
    <div class="bg-white flex items-center justify-center rounded-b-2xl">
        <div class="container mx-auto px-4 py-24 max-w-screen-xl">
            <span class="text-6xl text-gray-800 font-bold mb-2">Prečo práve my?</span>
            <div class="flex flex-wrap items-center py-2 justify-center md:justify-between">
                <span class="text-xl text-gray-500 font-semibold mb-2">Na Slovensku je mnoho softvérových firiem. Maradlo však stavia na osvedčené kalibre.</span>
            </div>

            <div class="flex-col md:flex md:flex-row gap-8 mt-16">
                <div class="bg-white shadow-xl md:w-1/3 p-8 flex flex-col items-center text-center" data-aos="fade-up">
                    <img src={Quality} width={64} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                    <span class="text-xl mt-4 text-gray-800 font-semibold">Kvalita služieb a produktov</span><br/>
                    <p class="mt-2 leading-normal text-xl text-gray-800">Vytvárame kvalitný softvér, ktorý vám bude slúžiť dlhé roky. Každá aplikácia je tvorená štýlom "ako keby sme ju mali používať my".</p>
                </div>

                <div class="bg-white shadow-xl md:w-1/3 mt-6 md:mt-0 p-8 flex flex-col items-center text-center" data-aos="fade-up">
                    <img src={Technology} width={64} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                    <span class="text-xl mt-4 text-gray-800 font-semibold">Technologická vyspelosť</span><br/>
                    <p class="mt-2 leading-normal text-xl text-gray-800">Nie sme 100 rokov za opicami. Využívamé najnovšie technológie a stále sa hýbeme dopredu.</p>
                </div>
                <div class="bg-white shadow-xl md:w-1/3 mt-6 md:mt-0 p-8 flex flex-col items-center text-center" data-aos="fade-up">
                    <img src={Speed} width={64} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                    <span class="text-xl mt-4 text-gray-800 font-semibold">Rýchlosť a efektivita</span><br/>
                    <p class="mt-2 leading-normal text-xl text-gray-800">Dokážeme sa rýchlo prispôsobiť vaším potrebám a ani na hotový produkt vás nenecháme dlho čakať.</p>
                </div>
            </div>
            <div class="flex-col md:flex md:flex-row gap-8 mt-16">
                <div class="bg-white shadow-xl md:w-1/2 p-8 flex flex-col items-center text-center" data-aos="fade-up">
                    <img src={Support} width={64} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                    <span class="text-xl mt-4 text-gray-800 font-semibold">Zákaznícka podpora</span><br/>
                    <p class="mt-2 leading-normal text-xl text-gray-800">Po dodaní produktu to u nás nekončí, podporu vám budeme poskytovať pokým ju sami budete chcieť.</p>
                </div>
                <div class="bg-white shadow-xl md:w-1/2 mt-6 md:mt-0 p-8 flex flex-col items-center text-center" data-aos="fade-up">
                    <img src={Custom} width={64} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                    <span class="text-xl mt-4 text-gray-800 font-semibold">Personalizácia služieb</span><br/>
                    <p class="mt-2 leading-normal text-xl text-gray-800">Dokážeme sa prispôsobiť vaším špecifickým požiadavkám a potrebám, aby ste boli čo najspokojnejší.</p>
                </div>
            </div>
        </div>
</div>
  );
};

export default WhyUs;