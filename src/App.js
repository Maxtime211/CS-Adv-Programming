// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LearnReactButton from './LearnReactButton';
import Cart from './Cart';
import Shop from './Shop'; // Import the Shop component

// Navigation bar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Website</p>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar /> {/* Include the navigation bar */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LearnReactButton />
        </header>
        <Routes>
          <Route path="/" exact element={<Cart />} />
          <Route path="/shop" element={<Shop />} /> {/* Route for the Shop page */}
        </Routes>
        <Footer /> {/* Include the footer */}
      </div>
    </Router>
  );
}

export default App;



