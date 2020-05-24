import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hamburger.module.scss';

const Hamburger = ({ isActive, setIsActive }) => (
  <button
    type="button"
    className={`${styles.hamburger} ${isActive && styles.hamburgerIsActive}`}
    onClick={() => setIsActive(!isActive)}
    aria-hidden="true"
    aria-label="Otwórz menu"
    aria-haspopup="true"
    aria-expanded="false"
    aria-controls="menu"
  >
    <span className={styles.box} id="menu">
      <span className={styles.line} />
    </span>
  </button>
);
Hamburger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};
export default Hamburger;
