import React, { useContext } from 'react';
import Caqi from './Caqi';
import Pm from './Pm';
import MapContext from '../../utils/map-context';
import styles from './Measurements.module.scss';

const Measurements = () => {
  const {
    activeSensor: { city },
  } = useContext(MapContext);
  const convertTitle = (name) => {
    const index = name.lastIndexOf(',');
    return name.slice(0, index);
  };
  const convertedTitle = convertTitle(city.name);
  return (
    <>
      <h1 className={styles.city}>{convertedTitle}</h1>
      <Caqi />
      <div className={styles.pm}>
        <Pm purpose="pm25" />
        <Pm purpose="pm10" />
      </div>
    </>
  );
};

export default Measurements;
