import React from 'react';
import partner1 from '../img/MSK-logo.png';

const Footer = () => (
  <footer>
    <a href="https://facebook.com">
      <i className="fab fa-facebook-square" />
    </a>
    <a href="https://instagram.com">
      <i className="fab fa-instagram" />
    </a>
    <a href="/kontakt">Kontakt</a>
    <a href="/aplikacja">Aplikacja</a>
    <a href="/regulamin">Regulamin</a>
    <h3>Nasi partnerzy: </h3>
    <img src={partner1} alt="MSK" />
  </footer>
);

export default Footer;
