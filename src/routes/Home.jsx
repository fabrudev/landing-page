import React from 'react';
import Hero from '../components/Hero';
import HomeImg from '../assets/9.jpg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';

const Home = () => {
    return (
        <div>
            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Ve donde te sientas libre."
                text="Elige tu destino favorito ✈️"
                buttonText="Plan de Viaje"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
        </div>
    );
};

export default Home;