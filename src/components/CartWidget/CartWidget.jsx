import Cart from './assets/Cart.svg';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div  className="Cart-widget">
            <img src={Cart} alt="Carrito de Compras"/>
        </div>
    );
}

export default CartWidget;