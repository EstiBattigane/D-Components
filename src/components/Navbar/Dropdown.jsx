import React from 'react';

const Dropdown = () => {
    return (
        <ul className="dropdown">
            <li><a href="/Pr">Procesadores</a></li>
            <li><a href="/Mo">Motherboards</a></li>
            <li><a href="/Me">Memorias Ram</a></li>
            <li><a href="/Pl">Placas de Video</a></li>
            <li><a href="/Di">Discos Rigidos</a></li>
        </ul>
    );
};

export default Dropdown;