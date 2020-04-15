import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Checkbox.module.scss';

const Checkbox = ({ ariaLabel, name, isChecked, setIsChecked }) => {
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label htmlFor={name} className={styles.label}>
      <div className={styles.wrapper}>
        <input
          tabIndex={0}
          type="checkbox"
          aria-label={ariaLabel}
          id={name}
          name={name}
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleChange}
        />
        <div className={styles.checkboxStyled}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      {ariaLabel}
    </label>
  );
};
Checkbox.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
};
export default Checkbox;
