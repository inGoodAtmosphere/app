import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './controls.module.scss';

const Controls = ({ previousSlide, nextSlide }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={previousSlide || nextSlide}
    >
      <FontAwesomeIcon
        size="2x"
        icon={previousSlide ? faArrowLeft : faArrowRight}
      />
    </button>
  );
};
Controls.defaultProps = {
  previousSlide: null,
  nextSlide: null,
};
Controls.propTypes = {
  previousSlide: PropTypes.func,
  nextSlide: PropTypes.func,
};
export default Controls;
