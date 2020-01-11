import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({ isActive, setIsActive }) => (
  <button
    type="button"
    className={`hamburger ${isActive && 'hamburger--isActive'}`}
    onClick={() => setIsActive(!isActive)}
  >
    Hamburger
  </button>
);
Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func,
};
export default Hamburger;
