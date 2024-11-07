import PropTypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartWidget/CartContext';

function Card({ id, nombre, precio, img, stock }) {
  const { addItemToCart } = useContext(CartContext);
  
  return (
    <div className='cardContainer'>
      <Link to={`/item/${id.toString()}`}>
        <img className='cardImg' src={img} alt={nombre} />
        <div className='cardInfo'>
          <p className='cardName'>{nombre}</p>
          <p><span className='cardPrice'>${precio}</span></p>
        </div>
      </Link>
      <div className='cardStock'>
        <p>Stock: {stock}</p>
      </div>
      <button onClick={() => addItemToCart({ id, nombre, precio, img, stock })}>Agregar al Carrito</button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};

export default Card;

