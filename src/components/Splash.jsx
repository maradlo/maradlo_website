
import {React} from 'react';
import Code from '../assets/code.svg';

const Splash = () => {
  return (
    <div class="bg-gradient-to-r from-green-500 via-green-600 to-green-700 flex items-center justify-center rounded-b-2xl">
        <div class="container mx-auto px-4 py-32 max-w-screen-xl">
            <div class="flex flex-wrap items-center justify-center md:justify-between">
            <div class="w-full md:w-1/2 text-white text-left p-4">
                <span class="text-6xl text-gray-800 font-normal mb-2">Potrebujete vytvoriť <span className="text-gray-950 font-bold">aplikáciu</span> alebo <span className="text-gray-950 font-bold">web</span>?</span>
                <p class="mt-8 leading-tight text-4xl text-gray-800">Firma <span className="text-gray-950 font-bold">Maradlo</span> je tu na to, aby vám s tým pomohla. Stačí jeden <span className="text-gray-950 font-bold">email</span> alebo <span className="text-gray-950 font-bold">telefonát</span> a Vaša predstava sa môže stať skutočnosťou.</p>
            </div>
            <div class="w-full md:w-1/2 flex justify-center md:justify-end p-4">
                <img src={Code} width={512} alt="Loyalty App" class="max-w-sm rounded-lg"/>
            </div>
            </div>
        </div>
</div>
  );
};

export default Splash;