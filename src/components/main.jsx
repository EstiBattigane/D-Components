import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Detail from "./ItemListContainer/ItemDetailContainer.jsx";
import Contact from "./pages/Contact.jsx";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default Main;
