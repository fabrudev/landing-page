import React from 'react';
import './FooterStyles.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className='top-title'>
                    <h1>ToGo</h1>
                    <p>Elige tu destino favorito ✈️</p>
                </div>
                <div>
                    <a href="/">
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-behance-square'></i>
                    </a>
                </div>
            </div>

            <div className="bottom">

                <div>
                    <h4>Proyecto</h4>
                    <a href="/">Registro</a>
                    <a href="/">Estado</a>
                    <a href="/">Licencia</a>
                </div>

                <div>
                    <h4>Comunidad</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Proyecto</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4>Ayuda</h4>
                    <a href="/">Soporte</a>
                    <a href="/">Contactanos</a>
                </div>

                <div>
                    <h4>Otros</h4>
                    <a href="/">Terminos de servicio</a>
                    <a href="/">Política de privacidad</a>
                    <a href="/">Licencia</a>
                </div>

            </div>

            <p className='copy'>This web page was created by Fabrizio Zarate ©</p>
        </div>
    );
};

export default Footer;