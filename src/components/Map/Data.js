import React from 'react';
import Measurements from './Measurements';
import Chart from './Chart';
import Weather from './Weather';
import AboutDevice from './AboutDevice';
import styles from './Data.module.scss';

const Data = () => {
  return (
    <div className={styles.data}>
      <Measurements />
      <Chart />
      <Weather />
      <AboutDevice />
    </div>
  );
};

export default Data;
