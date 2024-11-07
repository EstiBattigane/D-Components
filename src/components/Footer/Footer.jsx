import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 D-Components . Todos los derechos reservados.</p>
        <div className="socials">
          <span>Email<br /> estecarlita1324@gmail.com</span>
          <span>Discord<br /> destro22</span>
          <a href="https://www.instagram.com/esti_batti/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
