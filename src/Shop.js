// Shop.js
import React, { useState } from 'react';

function Shop() {
  const [items, setItems] = useState([
    {
      image: "https://media.sweetwater.com/images/items/120/SM57-medium.jpg",
      url: "https://www.sweetwater.com/store/detail/SM57",
      manufacturer: "Shure",
      productName: "SM57 Cardioid Dynamic Instrument Microphone",
      itemid: "SM57",
      price: 99.0,
      description: "Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance, Includes Stand Adapter, and Zippered Carrying Case",
      available: 9
    },
    // Add other items here...
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cart.find((cartItem) => cartItem.itemid === item.itemid);
    if (itemInCart) {
      // Item already exists in cart, update its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.itemid === item.itemid ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      // Item doesn't exist in cart, add it
      setCart([...cart, { ...item, quantity: 1 }]);
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
    <div>
      <h1>Shop</h1>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.itemid} className="item">
            <img src={item.image} alt={item.productName} />
            <h3>{item.productName}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div id="cart">
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <div className="cart-item" key={item.itemid}>
            <img src={item.image} alt={item.productName} />
            <div className="cart-item-info">
              <h3>{item.productName}</h3>
              <p className="cart-item-description">{item.description}</p>
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
        ))}
        <div id="subtotal">
          <p>Subtotal: ${calculateSubtotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
