import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './button.module.scss';

const Button = ({ setDisplay }) => {
  return (
    <button
      type="button"
      aria-label="Zaakceptuj cookies"
      className="cookies-banner__btn"
      onClick={() => {
        document.cookie = `isBannerOpen=false; path=/; expires=${new Date(
          2021,
          1,
          1,
        )}`;
        setDisplay('false');
      }}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

Button.propTypes = {
  setDisplay: PropTypes.func.isRequired,
};
export default Button;
