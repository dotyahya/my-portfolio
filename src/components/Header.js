import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../style.css';

const Header = () => {
  return (
    <header className="p-3 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <RouterLink to="/" className="logo">cat portfolio.md</RouterLink>
        <nav className="navbar">
          <ScrollLink to="home" smooth={true} duration={500} className="nav-link mx-2">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="nav-link mx-2">About</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="nav-link mx-2">Services</ScrollLink>
          <ScrollLink to="portfolio" smooth={true} duration={500} className="nav-link mx-2">Portfolio</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="nav-link mx-2">Contact</ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
