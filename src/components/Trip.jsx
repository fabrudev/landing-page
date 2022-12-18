import React from 'react';
import TripData from './TripData';
import './TripStyles.css'
import Trip1 from '../assets/jujuy.jpg'
import Trip2 from '../assets/cordoba.jpg'
import Trip3 from '../assets/mendoza.jpg'

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Viajes Recientes</h1>
            <p>Puedes descubrir lugares unicos solo usando Google Maps. </p>

            <div className="tripcard">

                <TripData
                    image={Trip1}
                    heading="Viaje a Jujuy"
                    text="San Salvador de Jujuy es una ciudad del noroeste de Argentina, cabecera del departamento Doctor Manuel Belgrano y capital y ciudad más poblada de la provincia de Jujuy. Llamada popularmente 'Tacita de Plata', se encuentra ubicada en un fértil valle, en la confluencia de los ríos Grande y Xibi Xibi, rodeada de montañas que, hacia el oeste, en invierno, suelen estar cubiertas de nieve."
                />

                <TripData
                    image={Trip2}
                    heading="Viaje a Córdoba"
                    text="Córdoba es la ciudad capital de la provincia de Córdoba, Argentina. Se sitúa en la región central del país, a ambas orillas del río Suquía. Es la ciudad más grande de Argentina con una superficie de 576 km² y la segunda más poblada después de Buenos Aires. Se constituye en un importante centro cultural, económico, educativo, financiero y de entretenimiento de la región. También es conocida como La Docta o La Ciudad de las Campanas"
                />

                <TripData
                    image={Trip3}
                    heading="Viaje a Mendoza"
                    text="Mendoza es una ciudad de la región de Cuyo en Argentina y es el corazón de la zona vitivinícola argentina, famosa por sus Malbecs y otros vinos tintos. Sus distintas bodegas ofrecen degustaciones y visitas guiadas. La ciudad tiene calles amplias y frondosas rodeadas de edificios modernos y art déco, y con plazas más pequeñas que rodean la Plaza Independencia, sitio del Museo Municipal de Arte Moderno subterráneo, que exhibe arte moderno y contemporáneo."
                />

            </div>
        </div>
    );
};

export default Trip;