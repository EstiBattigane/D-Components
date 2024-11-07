import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        <ul className="dropdown">
            <li><Link className="todo" to="/products">Todo</Link></li>
            <li><Link className="procesadores" to="/products/procesadores">Procesadores</Link></li>
            <li><Link className="graficas" to="/products/graficas">Tarjetas Graficas</Link></li>
        </ul>
    );
};

export default Dropdown;