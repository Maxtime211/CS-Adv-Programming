// Shop.js
import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';
import { useCart } from './CartContext'; // Import useCart hook

function Shop() {
  const { addToCart } = useCart(); // Use useCart hook

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
    }
  ]);

  const [notification, setNotification] = useState({ message: '', visible: false });

  const handleAddToCart = (item) => {
    const quantityInput = document.getElementById(`quantity-${item.itemid}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    addToCart(item, quantity);
    
    // Set notification message
    setNotification({ message: `Added ${quantity} ${item.productName} to cart`, visible: true });

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 3000);
  };

  return (
    <div>
      <h1>Shop</h1>
      {/* Notification area */}
      {notification.visible && <div className="notification">{notification.message}</div>}
      <div className="item-list">
        {items.map((item) => (
          <div key={item.itemid} className="item">
            <img src={item.image} alt={item.productName} />
            <h3>{item.productName}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <input type="number" min="1" defaultValue="1" id={`quantity-${item.itemid}`} />
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
