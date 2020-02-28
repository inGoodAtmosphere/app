import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.module.scss';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  return (
    <main className="content contact__content">
      <h1>Skontaktuj się z nami</h1>
      <h2 className="contact__h2">
        Masz pomysł jak usprawnić działanie naszej strony? Jesteś zainteresowany
        naszym czujnikiem?
      </h2>
      <ul className="contact__list">
        <CopyToClipboard
          text="ingoodatmosphere@gmail.com"
          onCopy={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        >
          <li className="contact__list__item">
            <a
              href="mailto:ingoodatmosphere@gmail.com"
              className="contact__list__item__link contact__list__item__link__mail"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <p className="contact__list__item__link__text">
                ingoodatmosphere@gmail.com
              </p>
            </a>
          </li>
        </CopyToClipboard>
        <li className="contact__list__item">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/inGoodAtmosphere-100599628162747"
            className="contact__list__item__link contact__list__item__link__facebook"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            <p className="contact__list__item__link__text">inGoodAtmosphere</p>
          </a>
        </li>
        <li className="contact__list__item">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://instagram.com/in.good.atmosphere?igshid=1ehmhou6voq0s"
            className="contact__list__item__link contact__list__item__link__instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <p className="contact__list__item__link__text">inGoodAtmosphere</p>
          </a>
        </li>
      </ul>
      <span
        className={`contact__copied__info ${copied &&
          'contact__copied__info--isActive'}`}
      >
        Skopiowano do schowka
      </span>
    </main>
  );
};

export default Contact;
