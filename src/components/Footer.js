import React from 'react';
import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import partner1 from '../img/MSK-logo.png';

const Footer = () => (
  <footer>
    <div className="footer__icons">
      <a
        href="https://facebook.com"
        onClick={() => {
          ReactGA.event({
            category: 'Navigation',
            action: 'Redirect to Facebook',
          });
        }}
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
      </a>
      <a
        href="https://www.instagram.com/in.good.atmosphere/"
        onClick={() => {
          ReactGA.event({
            category: 'Navigation',
            action: 'Redirect to Instagram',
          });
        }}
      >
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
    </div>
    <div className="footer__links">
      <a href="/kontakt">Kontakt</a>
      <a href="/aplikacja">Aplikacja</a>
      <a href="/regulamin">Regulamin</a>
    </div>
    <h3>Nasi partnerzy: </h3>
    <div className="footer__partner">
      <a href="https://www.msk.earth/">
        <img src={partner1} alt="MSK" />
      </a>
      <a href="https://www.msk.earth/">
        <img src={partner1} alt="MSK" />
      </a>
      <a href="https://www.msk.earth/">
        <img src={partner1} alt="MSK" />
      </a>
    </div>
  </footer>
);

export default Footer;
