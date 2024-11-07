import React, { useState } from 'react';
import { db, storage } from '../../firebase-config';
import { addDoc, collection, doc, updateDoc} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './UploadProduct.css';

const UploadProduct = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'products'), {
        id: parseInt(id),
        nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock),
        descripcion,
        category,
      });

      if (image) {
        const imageRef = ref(storage, `Img/${docRef.id}`);
        await uploadBytes(imageRef, image);
        const imageURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, 'products', docRef.id), {
          img: imageURL
        });
      }
      
      alert('Producto subido con éxito');
    } catch (error) {
      console.error('Error subiendo el producto:', error);
      alert('Hubo un error al subir el producto');
    }
  };

  return (
    <div className="upload-container">
      <h1>Subir Producto</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          placeholder="ID del Producto" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Nombre del Producto" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Precio" 
          value={precio} 
          onChange={(e) => setPrecio(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Stock" 
          value={stock} 
          onChange={(e) => setStock(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Descripción" 
          value={descripcion} 
          onChange={(e) => setDescripcion(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Categoría" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
        <input 
          type="file" 
          onChange={handleImageChange} 
          required 
        />
        <button type="submit">Subir Producto</button>
      </form>
    </div>
  );
};

export default UploadProduct;
