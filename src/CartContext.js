// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateQuantity = (itemid, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.itemid === itemid ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const deleteItem = (itemid) => {
    const updatedCart = cart.filter((item) => item.itemid !== itemid);
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, deleteItem, calculateSubtotal }}>
      {children}
    </CartContext.Provider>
  );
};
