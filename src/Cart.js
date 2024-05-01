// Cart.js
import React, { useState } from 'react';
import './App.css';

function Cart() {
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
    <div>
      <h1>Your Cart</h1>
      <div id="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.itemid}>
              <img src={item.image} alt={item.productName} />
              <div className="cart-item-info">
                <h3>{item.productName}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.itemid, parseInt(e.target.value))}
                />
                <button onClick={() => deleteItem(item.itemid)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div id="subtotal">
        <p>Subtotal: ${calculateSubtotal()}</p>
      </div>
    </div>
  );
}

export default Cart;
