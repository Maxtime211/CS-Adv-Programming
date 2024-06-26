import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Import CartProvider
import './App.css';
import Cart from './Cart';
import Shop from './Shop';
import Checkout from './Checkout'; // Import Checkout component

// Navigation bar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Sweetwater Shop</p>
    </footer>
  );
};

// Home page component
function Home() {
  return (
    <div>
      <h1>Welcome to Sweetwater Shop</h1>
      <p>Explore our wide range of products and find exactly what you need.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap your entire application with CartProvider */}
        <div className="App">
          <header className="App-header">
            <Navbar /> {/* Include the navigation bar */}
          </header>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Define route for Home page */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Add route for checkout */}
          </Routes>
          <Footer /> {/* Include the footer */}
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;






