import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../CartWidget/CartContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Link } from 'react-router-dom';
import logo from '../Img/logo.ico';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { userId, setUserId } = useContext(CartContext);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');
    if (storedUserId && storedUsername) {
      setUserId(storedUserId);
      setUsername(storedUsername);
    }
  }, [setUserId]);

  useEffect(() => {
    if (userId) {
      const fetchUsername = async () => {
        const userDoc = await getDoc(doc(db, "cuentas", userId));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        } else {
          console.error('Usuario no encontrado en Firestore.');
        }
      };
      fetchUsername();
    }
  }, [userId]);

  const handleLogout = () => {
    setUserId(null);
    setUsername('');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav>
      <div className='Logo'>
        <Link to="/"><img src={logo} alt="D-Components" /></Link>
        <Link to="/"><h3>D-Components</h3></Link>
      </div>
      <ul>
        <li><Link className="navigation" to="/">Inicio</Link></li>
        <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
          <Link className="products" to="/products">Productos</Link>{dropdown && <Dropdown />}
        </li>
      </ul>
      <div className='CartAndUser'>
        <CartWidget />
        {username ? (
          <div className="user-info" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <span className='auth-button'>{username}</span>
            {username === "admin" && (
              <div className='dropdown-content'>
                <Link to="/upload-product">Subir Producto</Link>
              </div>
            )}
            <button className='logout-button' onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <Link className='auth-button' to="/login">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


