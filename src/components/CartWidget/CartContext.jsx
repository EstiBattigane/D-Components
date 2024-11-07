import React, { createContext, useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loadCart = async () => {
      if (userId) {
        const userDoc = await getDoc(doc(db, "cuentas", userId));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setCartItems(userData.cart || []);
        } else {
          console.error('Carrito no encontrado en Firestore.');
        }
      }
    };
    loadCart();
  }, [userId]);

  const addItemToCart = (newItem) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find(item => item.id === newItem.id);

      if (itemInCart) {
        if (itemInCart.quantity >= newItem.stock) {
          alert("No puedes agregar más de este producto");
          return prevItems;
        }
        return prevItems.map(item =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
    updateCartInFirestore(userId, cartItems);
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map(item =>
          item.id === id && item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.id !== id || item.quantity > 0);
      updateCartInFirestore(userId, updatedItems);
      return updatedItems;
    });
  };

  const updateCartInFirestore = async (userId, cartItems) => {
    if (userId) {
      await updateDoc(doc(db, "cuentas", userId), { cart: cartItems });
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, setUserId }}>
      {children}
    </CartContext.Provider>
  );
};
