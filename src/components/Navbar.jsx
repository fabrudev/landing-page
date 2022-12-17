import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { MenuItems } from './MenuItems';

const Navbar = () => {

    const [ isClicked, setIsClicked ] = useState(false);

    const click = () => {
        setIsClicked(!isClicked);
    }

    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>GoTo</h1>

            <div className='menu-icons' onClick={click}>
                <i className={ isClicked ? "fas fa-times" : "fa fa-bars" }></i>
            </div>

            <ul className={ isClicked ? "nav-menu active" : "nav-menu"}>
                {
                    MenuItems.map((item, index) => (
                        <li key={index}>
                            <Link className={item.cName} to={item.url} onClick={click}>
                                <i className={item.icon}></i> {item.title}
                            </Link>
                        </li>
                    ))
                }
                <button>Sign Up</button>
            </ul>
        </nav>
    );
};

export default Navbar;