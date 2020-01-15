import React from 'react';
import partner1 from '../img/MSK-logo.png';

const Footer = () => (
  <footer>
    <div className="footer__icons">
      <a href="https://facebook.com">
        <i className="fab fa-facebook-square fa-4x" />
      </a>
      <a href="https://instagram.com">
        <i className="fab fa-instagram fa-4x" />
      </a>
    </div>
    <div className="footer__links">
      <a href="/kontakt">Kontakt</a>
      <a href="/aplikacja">Aplikacja</a>
      <a href="/regulamin">Regulamin</a>
    </div>
    <h3 className="footer__center">Nasi partnerzy: </h3>
    <div className="footer__partner">
      <img src={partner1} alt="MSK" />
      <img src={partner1} alt="MSK" />
      <img src={partner1} alt="MSK" />
    </div>
  </footer>
);

export default Footer;
