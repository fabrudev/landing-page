import React from 'react';
import Hero from '../components/Hero';
import ContactImg from '../assets/5.jpg';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <Hero
                cName="hero-mid"
                heroImg={ContactImg}
                title="Contacto"
                btnClass="hide"
            />
            <ContactForm />
        </div>
    );
};

export default Contact;