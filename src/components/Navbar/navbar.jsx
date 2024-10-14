import React, { useState } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from '../Img/logo.ico';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav>
            <div className='Logo'>
                <Link to="/"><img src={logo} alt="D-Components" /></Link>
                <Link to="/"><h3>D-Components</h3></Link>
            </div>
            <div>
                <ul>
                    <li><Link className="navigation" to="/"><a>Inicio</a></Link></li>
                    <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}><Link className="products" to="/products"><a>Productos</a>{dropdown && <Dropdown />}
                    </Link></li>
                    <li><Link to="/contact"><a>Contacto</a></Link></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
        
    );
};

export default Navbar;