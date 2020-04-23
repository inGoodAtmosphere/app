/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Measurement.module.scss';

const Measurement = ({ purpose, value, priority }) => {
  const convertTitle = (title) => {
    switch (title) {
      case 'so2':
        return 'so\u2082';
      case 'o3':
        return 'o\u2083';
      case 'no2':
        return 'no\u2082';
      default:
        return title;
    }
  };
  const convertedTitle = convertTitle(purpose);
  return (
    <a
      className={`${styles.wrapper} ${styles[priority]}`}
      href={`/encyklopedia#${purpose}`}
    >
      <h3 className={styles.title}>{convertedTitle.toUpperCase()}</h3>
      <h2 className={styles.measurement}>{value} µg/m³</h2>
      <h2 className={`${styles.percent} ${styles.measurement}`}>
        {Math.round((value / (purpose === 'pm25' ? 25 : 50)) * 100)}%
      </h2>
    </a>
  );
};

Measurement.propTypes = {
  purpose: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired,
};

export default Measurement;
