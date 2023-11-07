import {React, useEffect} from 'react';
import Email from '../assets/email.svg';
import Box from '../assets/box.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000
    });
    }, []);

  return (
    <div class="bg-white flex items-center justify-center rounded-b-2xl">
        <div class="container mx-auto px-4 py-24 max-w-screen-xl">
            <span class="text-6xl text-gray-800 font-bold mb-2">Kontakt</span>
            <div class="flex flex-wrap items-center py-2 justify-start md:justify-between">
                <span class="text-xl text-gray-500 font-semibold mb-2">Kontaktujte nás, nebudete ľutovať.</span>
            </div>

            <div class="md:flex md:flex-row">
                <div class="w-full md:w-1/2 p-8 flex flex-col justify-center text-start" data-aos="fade-up">
                    <a href='tel:+421917722223'><span class="text-2xl md:text-4xl text-gray-800 font-bold hover:text-green-500">+421 917 722 223</span><br/></a>
                    <a href='mailto:marek.zacik@maradlo.sk'><span class="text-2xl md:text-4xl text-gray-800 font-bold hover:text-green-500">marek.zacik@maradlo.sk</span><br/></a>
                </div>

                <div class="w-full md:w-1/2 p-8 flex flex-col" data-aos="fade-up">
                    <img src={Email} width={256} alt="Loyalty App" class="max-w-sm rounded-lg"/>
                </div>
            </div>
        </div>
</div>
  );
};

export default Contact;