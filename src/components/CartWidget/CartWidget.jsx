import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext.jsx';
import Cart from './assets/Cart.svg';
import './CartWidget.css';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="Cart-widget">
            <Link to="/cart" className='Cart-link'>
                <img src={Cart} alt="Carrito de Compras" />
                <span className='Contador'>{totalQuantity}</span>
            </Link>
        </div>
    );
}

export default CartWidget;
