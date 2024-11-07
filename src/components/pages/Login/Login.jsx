import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { CartContext } from '../../CartWidget/CartContext';
import './auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserId } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const q = query(collection(db, "cuentas"), where("username", "==", username), where("password", "==", password));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userId = userDoc.id;
      const username = userDoc.data().username;
      setUserId(userId);
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      console.log('Usuario autenticado');
      navigate('/');
      window.location.reload();
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="auth-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Nombre de usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          autoComplete="username"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          autoComplete="current-password"
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <button onClick={() => navigate('/register')}>¿No tienes una cuenta? Regístrate</button>
    </div>
  );
};

export default Login;





