import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ purpose, setActiveChart, isActive }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${isActive && styles.buttonActive}`}
      onClick={() => {
        setActiveChart(purpose);
      }}
    >
      {purpose !== 'temperature' ? purpose.toUpperCase() : 'TEMPERATURA'}
    </button>
  );
};
Button.propTypes = {
  purpose: PropTypes.string.isRequired,
  setActiveChart: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default Button;
