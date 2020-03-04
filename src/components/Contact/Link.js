import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './link.module.scss';

const ContactLink = ({ purpose, link, icon }) => {
  return (
    <li className="contact__list__item">
      <a
        target={purpose !== 'mail' ? '_blank' : ''}
        rel="noreferrer noopener"
        href={link}
        className={`contact__list__item__link contact__list__item__link__${purpose}`}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
        <p className="contact__list__item__link__text">
          {purpose === 'mail'
            ? 'ingoodatmosphere@gmail.com'
            : 'inGoodAtmosphere'}
        </p>
      </a>
    </li>
  );
};

ContactLink.propTypes = {
  purpose: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    iconName: PropTypes.string,
    icon: PropTypes.array,
    prefix: PropTypes.string,
  }).isRequired,
};

export default ContactLink;
