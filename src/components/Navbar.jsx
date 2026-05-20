import React from 'react';
import './Navbar.css';

const Navbar = ({scrollToSection}) => {
  return (
    <nav className="navbar">
      {/* The Logo (Just text in this style) */}
      <div className="logo">DEV_PORTFOLIO</div>
      
      {/* The Links */}
      <ul className="nav-links">
        <li><button onClick={() => scrollToSection('hero')} className="nav-btn">HOME</button></li>
        <li><button onClick={() => scrollToSection('repo')} className="nav-btn">REPO</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="nav-btn">CONTACT</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;