import React from 'react';
import PropTypes from 'prop-types';
import './button.module.scss';

const Button = ({ purpose, setActiveChart, isActive }) => {
  return (
    <button
      type="button"
      className={`chart__btn ${isActive && 'chart__btn--isActive'}`}
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
