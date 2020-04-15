import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import GoogleLogo from './GoogleLogo';
import styles from './SocialMediaBtn.module.scss';

const SocialMediaBtn = ({ socialMedia, endpoint, purpose }) => {
  return (
    <a href={endpoint} className={`${styles.button} ${styles[socialMedia]}`}>
      {socialMedia === 'facebook' ? (
        <FontAwesomeIcon icon={faFacebook} />
      ) : (
        <GoogleLogo />
      )}
      {purpose === 'sign-in' ? 'Zaloguj się przez ' : 'Zarejestruj się przez '}
      {socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1)}
    </a>
  );
};

SocialMediaBtn.propTypes = {
  socialMedia: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
};

export default SocialMediaBtn;
