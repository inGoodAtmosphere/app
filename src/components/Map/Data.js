import React from 'react';
import Measurements from './Measurements';
import Weather from './Weather';
import AboutDevice from './AboutDevice';
import withContext from '../../utils/withContext';
import styles from './Data.module.scss';

const Data = () => {
  return (
    <div className={styles.data}>
      <Measurements />
      <Weather />
      <AboutDevice />
    </div>
  );
};

export default withContext(Data);
