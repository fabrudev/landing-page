import React from 'react';
import Iguazu1 from '../assets/iguazu1.jpg';
import Iguazu2 from '../assets/iguazu2.jpg';
import Glaciar1 from '../assets/glaciar1.jpg';
import Glaciar2 from '../assets/glaciar2.jpg';

import DestinationData from './DestinationData';
import './DestinationStyles.css'

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Destinos Populares</h1>
            <p>Piensa, cree y sueña.</p>

            <DestinationData
                heading="Puerto Iguazú, Misiones"
                text="Patrimonio natural de la humanidad desde 1984 y una de las 7 maravillas naturales del mundo desde 2011, el Parque Nacional Iguazú es un universo natural único. Lleno de vida, abundante vegetación y 275 saltos, entre ellos la Garganta del Diablo, cayendo a 82 metros de altura, es el lugar ideal para conectar con la naturaleza."
                img1={Iguazu1}
                img2={Iguazu2}
                cName= "first-des"
            />

            <DestinationData
                heading="Glaciar Perito Moreno, Santa Cruz"
                text="La imponente masa de hielo interminable rodeada de bosques y montañas es un espectáculo que pocos se quieren perder. De hecho, este lugar es, junto con Puerto Madryn (Chubut) y las Cataratas del Iguazú (Misiones), uno de los sitios del país más visitados por extranjeros y el turismo argentino."
                img1={Glaciar1}
                img2={Glaciar2}
                cName="first-des-reverse"
            />


        </div>
    );
};

export default Destination;