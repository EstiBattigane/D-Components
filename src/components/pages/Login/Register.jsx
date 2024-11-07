import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase-config.js';
import { collection, addDoc } from 'firebase/firestore';
import './auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "cuentas"), {
        username: username,
        password: password,
        cart: []
      });
      console.log("Registro exitoso");
      navigate('/login');
    } catch (error) {
      console.error("Error registrando el usuario:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

