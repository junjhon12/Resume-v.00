import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* The Logo (Just text in this style) */}
      <div className="logo">DEV_PORTFOLIO</div>
      
      {/* The Links */}
      <ul className="nav-links">
        <li><a href="#hero">HOME</a></li>
        <li><a href="#repo">REPO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;