import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import partner1 from '../../../public/img/MSK-logo.png';
import { logEvent } from '../../utils/analytics';
import './footer.scss';

const InstallPWABtn = dynamic(() => import('../InstallPWABtn/InstallPWABtn'), {
  ssr: false,
});
const Footer = () => {
  const [display, setDisplay] = useState('none');
  return (
    <footer>
      <div className="footer__icons">
        <a
          aria-label="Facebook"
          href="https://www.facebook.com/inGoodAtmosphere-100599628162747"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => {
            logEvent('Navigation', 'Redirect to Facebook');
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
            logEvent('Navigation', 'Redirect to Instagram');
          }}
        >
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
      </div>
      <div className="footer__links">
        <div className="footer__links__item">
          <a href="/kontakt">Kontakt</a>
        </div>
        <div className="footer__links__item">
          <a href="/polityka-prywatnosci">Polityka prywatności</a>
        </div>
        <div
          className={`footer__links__item ${display === 'none' &&
            'footer__links__item--hidden'}`}
        >
          <InstallPWABtn isFooter setDisplay={setDisplay} display={display} />
        </div>
      </div>
      <h2 className="footer__h2">Nasi patroni: </h2>
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
};

export default Footer;
