import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import ItemListContainer from "./ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./ItemListContainer/ItemDetailContainer.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Login/Register.jsx";
import CartPage from "./CartWidget/CartPage.jsx";
import UploadProduct from "./pages/UploadProduct.jsx";


const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/upload-product" element={<UploadProduct />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default Main;
