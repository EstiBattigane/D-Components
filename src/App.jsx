import React from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import Main from './components/main.jsx';
import Footer from './components/Footer/Footer.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import CartPage from './components/CartWidget/CartPage.jsx';
import { CartProvider } from './components/CartWidget/CartContext.jsx';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className='app-container'>
          <Navbar />
          <div className='content-wrap'>
            <Routes>
              <Route path="*" element={<Main />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
          <CartWidget />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
