import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../style.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="p-3 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <RouterLink to="/" className="logo">cat portfolio.md</RouterLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <nav className="navbar d-none d-md-flex">
          <ScrollLink to="home" smooth={true} duration={500} className="nav-link mx-2">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="nav-link mx-2">About</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="nav-link mx-2">Services</ScrollLink>
          <ScrollLink to="portfolio" smooth={true} duration={500} className="nav-link mx-2">Portfolio</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="nav-link mx-2">Contact</ScrollLink>
        </nav>
        <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
          <ScrollLink to="home" smooth={true} duration={500} className="nav-link mx-2" onClick={closeMenu}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="nav-link mx-2" onClick={closeMenu}>About</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="nav-link mx-2" onClick={closeMenu}>Services</ScrollLink>
          <ScrollLink to="portfolio" smooth={true} duration={500} className="nav-link mx-2" onClick={closeMenu}>Portfolio</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="nav-link mx-2" onClick={closeMenu}>Contact</ScrollLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
