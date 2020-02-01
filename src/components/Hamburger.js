import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({ isActive, setIsActive }) => (
  <button
    type="button"
    className={`hamburger ${isActive ? 'hamburger--isActive' : ''}`}
    onClick={() => setIsActive(!isActive)}
    aria-hidden="true"
    aria-label="Otwórz menu"
    aria-haspopup="true"
    aria-expanded="false"
    aria-controls="menu"
  >
    <span className="hamburger__box">
      <span className="hamburger__line" />
    </span>
  </button>
);
Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};
export default Hamburger;
