import {React, useEffect} from 'react';
import Money from '../assets/money.svg';
import Box from '../assets/box.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Price = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000
    });
    }, []);

  return (
    <div class="bg-white flex items-center justify-center rounded-b-2xl">
        <div class="container mx-auto px-4 py-24 max-w-screen-xl">
            <span class="text-6xl text-gray-800 font-bold mb-2">Ste pripravení na spoluprácu?</span>
            <div class="flex flex-wrap items-center py-2 justify-center md:justify-between">
                <span class="text-xl text-gray-500 font-semibold mb-2">Od spokojnosti s produktom vás delí už len jeden email alebo telefonát. Pozrite si, ako si ceníme našu prácu.</span>
            </div>
            <div class="md:flex md:flex-row gap-8 mt-16">
                <div class="w-full md:w-1/2 p-8 flex flex-col" data-aos="fade-up">
                    <img src={Money} width={128} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                    <span class="text-4xl mt-4 text-gray-800 font-bold">Cena</span><br/>
                    <p class="mt-2 leading-normal text-xl text-gray-800">Cena nie je jednotná. Je potrebné nás kontaktovať a popísať nám vaše požiadavky. My vám následne vytvoríme cenovú ponuku na mieru. Nemusíte sa však báť, nezruinujeme vás a produkt dodáme bez skrytých poplatkov alebo nečakaných prekvapení.</p>
                </div>

                <div class="w-full md:w-1/2 p-8 flex flex-col" data-aos="fade-up">
                    <img src={Box} width={128} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                    <span class="text-4xl mt-4 text-gray-800 font-bold">Čo je v cene?</span><br/>
                    <p class="mt-2 leading-normal text-xl text-gray-800">
                        - Konzultácie o vývoji aplikácie<br/>
                        - Neobmedzený prístup k vytvorenému produktu<br/>
                        - Zdrojový kód<br/>
                        - 14 dňová podpora<br/>
                    </p>
                </div>
            </div>
        </div>
</div>
  );
};

export default Price;