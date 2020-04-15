import React from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.scss';

const Button = ({ setIsBannerOpen }) => {
  const handleClick = () => {
    Cookies.set('isBannerOpen', 'false', { expires: new Date(2021, 1, 1) });
    setIsBannerOpen('false');
  };
  return (
    <button
      type="button"
      aria-label="Zaakceptuj cookies"
      className={styles.button}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

Button.propTypes = {
  setIsBannerOpen: PropTypes.func.isRequired,
};
export default Button;
