import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        <div className="dropdown">
            <Link className="todo" to="/products"><li><a>Todo</a></li></Link>
            <Link className="procesadores" to="/products/procesadores"><li><a>Procesadores</a></li></Link>
            <Link className="graficas" to="/products/graficas"><li><a>Tarjetas Graficas</a></li></Link>
        </div>
    );
};

export default Dropdown;