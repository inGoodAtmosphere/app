import React from 'react';
import PropTypes from 'prop-types';
import styles from './Submit.module.scss';

const Submit = ({ isSuccessful, children }) => {
  return (
    <button
      type="submit"
      className={isSuccessful ? styles.buttonSuccess : styles.button}
      disabled={isSuccessful}
    >
      {children}
    </button>
  );
};

Submit.defaultProps = {
  isSuccessful: null,
};

Submit.propTypes = {
  children: PropTypes.string.isRequired,
  isSuccessful: PropTypes.bool,
};

export default Submit;
