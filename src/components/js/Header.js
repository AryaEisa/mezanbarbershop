import React, { useState } from 'react';
import '../css/Header.css';
import logo from '../../images/logo.jpg'; // Byt ut med din faktiska logotyp


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Barber Bros Logo" className="logo" />
        <span className="brand-name">Mazan Barbershop</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`navbar-right ${menuOpen ? 'show' : ''}`}>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li><a href="#history" onClick={() => setMenuOpen(false)}>History</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
    </ul>

    </nav>
  );
}

export default Header;
