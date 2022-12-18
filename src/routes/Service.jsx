import React from 'react';
import Hero from '../components/Hero';
import Trip from '../components/Trip'
import ServiceImg from '../assets/7.jpg';

const Service = () => {
    return (
        <div>
            <Hero
                cName="hero-mid"
                heroImg={ServiceImg}
                title="Servicios"
                btnClass="hide"
            />
            <Trip />
        </div>
    );
};

export default Service;