import React from 'react';
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import Copy from './Copy';
import ContactLink from './Link';
import './list.module.scss';

const ContactList = () => {
  return (
    <ul className="contact__list">
      <Copy />
      <ContactLink
        icon={faFacebookSquare}
        purpose="facebook"
        link="https://www.facebook.com/inGoodAtmosphere-100599628162747"
      />
      <ContactLink
        icon={faInstagram}
        link="https://instagram.com/in.good.atmosphere?igshid=1ehmhou6voq0s"
        purpose="instagram"
      />
    </ul>
  );
};

export default ContactList;
