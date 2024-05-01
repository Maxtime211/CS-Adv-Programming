import React from 'react';
import { useCart } from './CartContext'; // Import useCart instead of CartContext
import './App.css';

function Cart() {
  const { cart, updateQuantity, deleteItem, calculateSubtotal } = useCart(); // Destructure values from CartContext

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
        <div id="subtotal">
          <p>Subtotal: ${calculateSubtotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

