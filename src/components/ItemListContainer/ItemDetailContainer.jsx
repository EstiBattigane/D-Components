import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db, storage } from '../../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { CartContext } from '../CartWidget/CartContext';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItemDetails = async () => {
      setLoading(true);
      try {
        console.log(`Obteniendo detalles del producto con ID: ${id}`);

        const q = query(collection(db, "products"), where("id", "==", Number(id)));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const itemDoc = querySnapshot.docs[0];
          const data = itemDoc.data();
          console.log("Documento encontrado", data);

          const imgUrl = await getDownloadURL(ref(storage, data.img));
          setItem({ id: itemDoc.id, ...data, img: imgUrl });
        } else {
          console.log("¡No se encontró el documento!");
        }
      } catch (error) {
        console.error("Error obteniendo detalles del producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (loading) {
    return <p>Cargando, por favor espere...</p>;
  }

  if (!item) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="item-detail-container">
      <img src={item.img} alt={item.nombre} />
      <h1>{item.nombre}</h1>
      <p>Precio: ${item.precio}</p>
      <p>Stock: {item.stock}</p>
      <p>{item.descripcion}</p>
      <button onClick={() => addItemToCart(item)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemDetailContainer;