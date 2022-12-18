import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import AboutImg from '../assets/6.jpg';

const About = () => {
    return (
        <div>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Nosotros"
                btnClass="hide"
            />
            <AboutUs />
        </div>
    );
};

export default About;