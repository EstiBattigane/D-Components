import React, { useState } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../assets/logo.ico';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav>
            <div className='Logo'>
                <img src={logo} alt="D-Components" href="/" />
                <h3 href='/'>D-Components</h3>
            </div>
            <div>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}><a>Productos</a>
                        {dropdown && <Dropdown />}
                    </li>
                    <li><a href="/Contact">Contacto</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
        
    );
};

export default Navbar;