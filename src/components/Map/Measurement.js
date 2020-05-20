/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Measurement.module.scss';
import Tooltip from './Tooltip';

const Measurement = ({ purpose, value, priority }) => {
  const convertTitle = (title) => {
    switch (title) {
      case 'so2':
        return (
          <>
            SO<sub>2</sub>
          </>
        );
      case 'o3':
        return (
          <>
            SO<sub>2</sub>
          </>
        );
      case 'no2':
        return (
          <>
            SO<sub>2</sub>
          </>
        );
      default:
        return title.toUpperCase();
    }
  };
  const convertedTitle = convertTitle(purpose);
  return (
    <div className={`${styles.wrapper} ${styles[priority]}`}>
      <Tooltip
        className={styles.tooltip}
        title={convertedTitle}
        purpose={purpose}
      />
      <h3 className={styles.title}>{convertedTitle}</h3>
      <h2 className={styles.measurement}>{value}</h2>
    </div>
  );
};

Measurement.propTypes = {
  purpose: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired,
};

export default Measurement;
