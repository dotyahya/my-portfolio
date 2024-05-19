import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>Muhammad Yahya.</h3>
          <p>A passionate computer scientist with a love for coding and problem-solving.</p>
        </div>
        <div className="footer-links">
          <div className="social-icons">
            <a href="mailto:your-email@example.com" className="footer-link">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.linkedin.com/in/myahyanaeem/" className="footer-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/dotyahya" className="footer-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="back-to-top">
            <a href="#top" className="footer-link">
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
