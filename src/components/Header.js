// components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Sales<sup>+</sup></div>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search for companies, contacts, industries, etc." />
        <span className="advanced-search">Advanced Search</span>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Intent</a>
        <a href="#">Tracker</a>
        <a href="#">Lists</a>
        <a href="#">WebSights</a>
        <a href="#">Workflows</a>
        <a href="#">Chat</a>
        <a href="#">More</a>
        <span className="icon">🔔</span>
      </nav>
    </header>
  );
}

export default Header;
