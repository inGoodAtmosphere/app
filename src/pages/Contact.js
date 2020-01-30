import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <main className="content">
    <h1>Skontaktuj się z nami</h1>
    <h3 className="contact__h3">
      Masz pomysł jak usprawnić działanie naszej strony? Chchaiłbyś współtworzyć
      naszego bloga? Jeśli tak napisz tutaj:
    </h3>
    <ul className="contact__list">
      <li className="contact__list__item">
        <a href="mailto:ingoodatmosphere@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <p>ingoodatmosphere@gmail.com</p>
        </a>
      </li>
      <li className="contact__list__item">
        <a href="https://facebook.com/ingoodatmosphere@gmail">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          <p>inGoodAtmosphere</p>
        </a>
      </li>
      <li className="contact__list__item">
        <a href="https://instagram.com/in.good.atmosphere?igshid=1ehmhou6voq0s">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <p>inGoodAtmosphere</p>
        </a>
      </li>
    </ul>
  </main>
);

export default Contact;
