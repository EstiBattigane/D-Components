import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../utils/Card.jsx";
import { db, storage} from "../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const ItemListContainer = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        console.log("Obteniendo productos...");

        const q = category ? query(collection(db, "products"), where("category", "==", category)) : collection(db, "products");
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("No se encontraron documentos");
        } else {
          console.log(`Se encontraron ${querySnapshot.size} documentos`)
        }
        
        const allProducts = await Promise.all(querySnapshot.docs.map(async doc => {
          const data = doc.data();
          console.log('Documento obtenido', data);

          if (typeof data.img !== "string" || !data.img.trim()) {
            console.error(`El campo 'img' en el documento con ID ${doc.id} no es una cadena válida`);
            return null;
          }

          const imgUrl = await getDownloadURL(ref(storage, data.img)).catch(error => {
            console.error(`Error obteniendo imagen para ${data.img}`, error);
            return null;
          });

          if (!imgUrl) return null;

          return { id: doc.id, ...data, img: imgUrl };
        }));

        console.log('Productos obtenidos:', allProducts);

        setFilteredProducts(allProducts.filter(product => product !== null));
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="productsContainer">
      {loading ? (
        <p>Cargando, por favor espere...</p>
      ) : (
        filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <Card
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              img={producto.img}
              stock={producto.stock}
            />
          ))
        ) : (
          <p>No hay productos disponibles en esta categoria</p>
        )
      )}
    </div>
  );
};

export default ItemListContainer;
