/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import mapContext from '../../utils/map-context';
import styles from './Pm.module.scss';

const Caqi = ({ purpose }) => {
  // TODO: activeSensor is an array so data doesn't display properly (add to endpoint current measurement)
  const {
    activeSensor: { current },
  } = useContext(mapContext);
  return (
    <a className={styles.pm} href={`/encyklopedia#${purpose}`}>
      <h3 className={styles.title}>{purpose.toUpperCase()}</h3>
      <h2 className={styles.measurement}>{current[purpose]} µg/m³</h2>
      <h2 className={`${styles.percent} ${styles.measurement}`}>
        {Math.round((current[purpose] / (purpose === 'pm2.5' ? 25 : 50)) * 100)}
        %
      </h2>
    </a>
  );
};

Caqi.propTypes = { purpose: PropTypes.string.isRequired };

export default Caqi;
