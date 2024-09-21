import Cart from './assets/Cart.svg';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="Cart-widget">
            <img src={Cart} alt="Carrito de Compras"/>
            <div className='Contador'>
            <span>0</span>
            </div>
        </div>
    );
}

export default CartWidget;