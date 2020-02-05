import React from 'react';
import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import partner1 from '../../img/MSK-logo.png';
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="footer__icons">
      <a
        aria-label="Facebook"
        href="https://www.facebook.com/inGoodAtmosphere-100599628162747"
        target="_blank"
        rel="noreferrer noopener"
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
        aria-label="Instagram"
        href="https://www.instagram.com/in.good.atmosphere/"
        target="_blank"
        rel="noreferrer noopener"
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
    <h3 className="footer__h3">Nasi patroni: </h3>
    <div className="footer__patrons">
      <a
        href="https://www.msk.earth/"
        target="_blank"
        rel="noreferrer noopener"
        className="footer__patrons__item"
      >
        <img
          src={partner1}
          alt="MSK"
          className="footer__patrons__item__image"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
