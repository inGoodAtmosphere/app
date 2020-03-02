import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { logEvent } from '../../utils/analytics';
import './icon.module.scss';

const Icon = ({ socialMedia, link }) => {
  return (
    <a
      aria-label={socialMedia}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      onClick={() => {
        logEvent('Navigation', `Redirect to ${socialMedia}`);
      }}
    >
      <FontAwesomeIcon
        icon={socialMedia === 'Facebook' ? faFacebookSquare : faInstagram}
        size="4x"
      />
    </a>
  );
};

Icon.propTypes = {
  socialMedia: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default Icon;
