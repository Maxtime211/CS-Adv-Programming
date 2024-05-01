import React, { createContext, useState, useContext } from 'react';

// Create a context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const itemInCart = cart.find((cartItem) => cartItem.itemid === item.itemid);
    if (itemInCart) {
      // Item already exists in cart, update its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.itemid === item.itemid ? { ...cartItem, quantity: cartItem.quantity + parseInt(quantity) } : cartItem
      );
      setCart(updatedCart);
    } else {
      // Item doesn't exist in cart, add it
      setCart([...cart, { ...item, quantity: parseInt(quantity) }]);
    }
  };
  

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
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, deleteItem, calculateSubtotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
