import React, { useState } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../icon/logo.ico';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav>
            <div className='Logo'>
                <img src={logo} alt="D-Components" href="/" />
            </div>
            <div>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}><a href="#">Productos</a>
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