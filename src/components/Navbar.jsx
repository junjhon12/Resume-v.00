import React from 'react';
import './Navbar.css';

const Navbar = ({scrollToSection}) => {
  return (
    <nav className="navbar">
      {/* The Logo (Just text in this style) */}
      <div className="logo">DEV_PORTFOLIO</div>
      
      {/* The Links */}
      <ul className="nav-links">
        <li><span onClick={() => scrollToSection('hero')}>HOME</span></li>
        <li><span onClick={() => scrollToSection('repo')}>REPO</span></li>
        <li><span onClick={() => scrollToSection('contact')}>CONTACT</span></li>
      </ul>
    </nav>
  );
};

export default Navbar;