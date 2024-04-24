// App.js
import React, { useState } from 'react';
import './App.css';
import LearnReactButton from './LearnReactButton';

function App() {
  const [items, setItems] = useState([
    {
      image: "https://media.sweetwater.com/images/items/120/SM57-medium.jpg",
      url: "https://www.sweetwater.com/store/detail/SM57",
      manufacturer: "Shure",
      productName: "SM57 Cardioid Dynamic Instrument Microphone",
      itemid: "SM57",
      quantity: 1,
      price: 99.0,
      description: "Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance, Includes Stand Adapter, and Zippered Carrying Case",
      available: 9
    },
    {
      image: "https://media.sweetwater.com/images/guitars/SGSTHCCH/227130360/227130360-body-small.jpg",
      url: "https://www.sweetwater.com/store/detail/SGSTHCCH",
      manufacturer: "Gibson",
      productName: "SG Standard Electric Guitar - Heritage Cherry",
      itemid: "SGSTHCCH",
      quantity: 1,
      price: 1799.0,
      serial: 227130360,
      description: "Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry",
      available: 1
  },
  {
      image: "https://media.sweetwater.com/images/items/120/SM58-medium.jpg",
      url: "https://www.sweetwater.com/store/detail/SM58",
      manufacturer: "Shure",
      productName: "SM58 Cardioid Dynamic Vocal Microphone",
      itemid: "SM58",
      quantity: 3,
      price: 99.0,
      description: "Dynamic Vocal Microphone with Cardioid Pickup Pattern and 50Hz- 15kHz Frequency Response, Includes Stand Adapter, and Zippered Carrying Case",
      available: 6
  },
  {
      image: "https://media.sweetwater.com/images/items/120/R16-medium.jpg",
      url: "https://www.sweetwater.com/store/detail/R16",
      manufacturer: "Zoom",
      productName: "R16 16-track SD Recorder / Interface / Controller",
      itemid: "R16",
      quantity: 1,
      price: 399.99,
      description: "16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC",
      available: 14
  },
  {
      image: "https://media.sweetwater.com/m/products/image/b4ea91124f0H67L5GHDcNbMeoJH3qeD7Y01ca3d3.jpg?quality=82&width=750&ha=b4ea91124fb7723b",
      url: "https://www.sweetwater.com/store/detail/NE6D-73--nord-electro-6d-73",
      manufacturer: "Nord", 
      productName: "Nord Electro 6D 73 73-key Keyboard", 
      itemid: "NE6D-73", 
      quantity: 1,
      price: 2999.0,
      description: "73-note Stage Piano with Piano and Organ Sounds, Physical Drawbars, Effects, USB, and Rotary Speaker Emulator",
      available: 12

  },
  {
      image: "https://media.sweetwater.com/m/products/image/ef861881bdAVlVUmkZ4dbk3DpUVhEGuGmVmZ0elr.jpg?quality=82&width=750&ha=ef861881bdd7aa90",
      url: "https://www.sweetwater.com/store/detail/Hohnica48--hohner-1304-red-48-bass-entry-level-piano-accordion-pearl-red",
      manufacturer: "Hohner",
      productName: "Hohner Hohnica 1304 48 Bass Piano Accordion - Pearl Red",
      itemid: "Hohnica48", 
      quantity: 1,
      price: 749.0,
      description: "Piano Accordion with 26 Piano Keys and 48 Push-button Bass Keys - Pearl Red",
      available: 9

  },
  {
      image: "https://media.sweetwater.com/m/products/image/17f8ef87ebM2Ab08c5m48ghmWXup8QBSxYqx7p1a.jpg?quality=82&height=750&ha=17f8ef87eb4d13f9",
      url: "https://www.sweetwater.com/store/detail/StroboPHDC--peterson-stroboplus-hdc-chromatic-handheld-strobe-tuner",
      manufacturer: "Peterson", 
      productName: "Peterson StroboPLUS HDC - Chromatic Handheld Strobe Tuner", 
      itemid: "StroboPHDC", 
      quantity: 1,
      price: 179.0,
      description: "Chromatic Handheld Strobe Tuner",
      available: 9

  },
  {
      image: "https://media.sweetwater.com/m/products/image/077e544cbd9OfKXen6XJwBOBYpikpEbeiyLUZOkM.jpg?quality=82&height=750&ha=077e544cbdc545da",
      url: "https://www.sweetwater.com/store/detail/HypeMic--apogee-hypemic-for-ipad-iphone-mac-and-windows",
      manufacturer: "Apogee", 
      productName: "Apogee HypeMic for iPad, iPhone, Mac and Windows", 
      itemid: "HypeMic", 
      quantity: 1,
      price: 349.0,
      description: "Cardioid USB Microphone with 24-bit/96kHz PureDIGITAL Connection, Compressor, Headphone Output with Blend Feature, Tripod, Pop Filter, and Carrying Case - Mac/PC/iOS",
      available: 70

  },
  {
      image: "https://media.sweetwater.com/m/products/image/94a65b96ednsxNuQ55ZQG8sFZ4yGqAxSA07ZgzuN.jpg?quality=82&height=750&ha=94a65b96edfbbf7d",
      url: "https://www.sweetwater.com/store/detail/ResMicroCseBun--blackmagic-design-davinci-resolve-micro-panel-with-hardshell-case",
      manufacturer: "Blackmagic Design", 
      productName: "Blackmagic Design DaVinci Resolve Micro Panel with Hardshell Case", 
      itemid: "ResMicroCseBun", 
      quantity: 1,
      price: 1049.0,
      description: "DaVinci Resolve Workstation for Resolve/Resolve Studio 14.3 or Later with 3 Trackballs, 12 Color Correction Controls, 18 Nav/Transport Buttons, USB-C, and Hardshell iSeries Case",
      available: 10

  },
  
  ]);

  const displayItems = () => {
    return items.map((item, index) => (
      <div className="cart-item" key={index}>
        <img src={item.image} alt={item.productName} />
        <div className="cart-item-info">
          <h3>{item.productName}</h3>
          <p className="cart-item-description">{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <a href={item.url} target="_blank" className="view-item-button">View Item</a>
        </div>
        <div className="cart-item-actions">
          <input type="number" className="cart-item-quantity" value={item.quantity} min="1" onChange={(e) => updateQuantity(e, index)} />
          <button className="delete-item" onClick={() => deleteItem(index)}>Delete</button>
        </div>
      </div>
    ));
  };

  const calculateSubtotal = () => {
    let subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return subtotal.toFixed(2);
  };

  const updateQuantity = (e, index) => {
    const newItems = [...items];
    newItems[index].quantity = parseInt(e.target.value, 10);
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LearnReactButton />
      </header>
      <div>
        <div id="header">
          <h1>Your Cart</h1>
        </div>
        <div id="cart">
          {displayItems()}
        </div>
        <div id="subtotal">
          <p>Subtotal: $<span id="subtotalAmount">{calculateSubtotal()}</span></p>
        </div>
        <div id="checkout-buttons">
          <button className="checkout-button">Checkout</button>
          <button className="keep-shopping-button">Keep Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default App;

