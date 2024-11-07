import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from '../../firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import ImageSlider from './ImageSlider.jsx';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      const productsCollection = collection(db, "products");
      const snapshot = await getDocs(productsCollection);
      const productsList = await Promise.all(snapshot.docs.map(async (doc) => {
        const data = doc.data();
        const imgUrl = await getDownloadURL(ref(storage, data.img));
        return { id: doc.id, ...data, img: imgUrl };
      }));
      
      const shuffledProducts = productsList.sort(() => Math.random() - 0.5).slice(0, 3);
      setProducts(shuffledProducts);
    };

    fetchRandomProducts();
  }, []);

  return (
    <div className='Home'>
      <ImageSlider />

      <div className='products-container'>
        {products.map(product => (
          <div key={product.id} className='product-card'>
            <Link to={`/item/${product.id}`}>
              <img src={product.img} alt={product.nombre} className='product-img' />
              <h3>{product.nombre}</h3>
              <p>${product.precio}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


