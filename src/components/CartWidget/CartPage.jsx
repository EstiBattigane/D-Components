import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext.jsx';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, removeItemFromCart } = useContext(CartContext);
    const [email, setEmail] = useState('');

    const handleGenerateTicket = async () => {
        if (!email) {
            alert("Por favor ingrese un correo electrónico.");
            return;
        }

        try {
            const ticket = {
                items: cartItems,
                email: email,
                date: new Date().toISOString()
            };

            const docRef = await addDoc(collection(db, 'tickets'), ticket);
            console.log("Ticket creado con ID:", docRef.id);
            alert(`Ticket generado con éxito. ID: ${docRef.id}`);

            const templateParams = {
                to_email: email,
                ticket_id: docRef.id,
                ticket_items: cartItems.map(item => `${item.nombre} (Cantidad: ${item.quantity})`).join(', ')
            };

            emailjs.send('service_psh2y9f', 'template_wz8f9hj', templateParams, 'pRe5C7b4h8120TuIJ')
                .then((response) => {
                    console.log('Correo enviado con éxito:', response.status, response.text);
                    alert('Correo enviado con éxito.');
                }, (error) => {
                    console.error('Error al enviar el correo:', error);
                    alert('Hubo un error al enviar el correo.');
                });

            setEmail('');
        } catch (error) {
            console.error("Error al generar el ticket:", error);
            alert("Hubo un error al generar el ticket.");
        }
    };

    return (
        <div className="cart-page">
            <h1>Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.img} alt={item.nombre} />
                                <div>
                                    <h2>{item.nombre}</h2>
                                    <p>Precio: ${item.precio}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Stock: {item.stock}</p>
                                    <button onClick={() => removeItemFromCart(item.id)}>Eliminar 1</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="generate-ticket">
                        <input 
                            type="email" 
                            placeholder="Ingrese su correo electrónico" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <button onClick={handleGenerateTicket}>Generar Ticket</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;