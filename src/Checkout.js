// Checkout.js
import './App.css';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import CartContext

function Checkout() {
  const { cart, clearCart } = useContext(CartContext); // Get cart and clearCart function from CartContext
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  const [message, setMessage] = useState('');

  const handleCheckout = () => {
    // Simulate checkout process (clear cart and show success message)
    clearCart(); // Clear the cart
    setMessage('Checkout successful! Your items have been purchased.'); // Set success message
    setTimeout(() => {
      setMessage('');
      navigate('/'); // Redirect to home page after a brief delay
    }, 3000); // 3 seconds delay
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Items in Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.itemid}>
              {item.productName} - ${item.price.toFixed(2)} ({item.quantity} units)
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleCheckout}>Checkout</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Checkout;

