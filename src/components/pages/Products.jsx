import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../utils/Card.jsx";
import products from "./products/products.js";

const Products = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inicia la carga
      await new Promise(resolve => setTimeout(resolve, 2000)); // Delay de 2000 ms

      const result = category ? products.filter(producto => producto.category === category) : products;
      setFilteredProducts(result);
      setLoading(false); // Finaliza la carga
    };

    fetchData();
  }, [category]);

  return (
    <div className="productsContainer">
      {loading ? (
        <p>Cargando, por favor espere...</p> // Mensaje de carga
      ) : (
        filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <Card
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              img={producto.img}
            />
          ))
        ) : (
          <p>No hay productos disponibles en esta categoria</p>
        )
      )}
    </div>
  );
};

export default Products;