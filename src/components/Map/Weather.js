/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import mapContext from '../../utils/map-context';
import styles from './Weather.module.scss';

const Weather = () => {
  const {
    activeSensor: { current },
  } = useContext(mapContext);
  const { temperature, humidity } = current;
  return (
    <div className={styles.weather}>
      <div className={styles.data}>
        <span>Temperatura</span>
        <span>
          {temperature}
          &#8451;
        </span>
      </div>
      <div className={styles.data}>
        <span>Wilgotność</span>
        <span>{humidity}%</span>
      </div>
    </div>
  );
};

export default Weather;
