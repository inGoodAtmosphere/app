import React, { useContext } from 'react';
import Caqi from './Caqi';
import Pm from './Pm';
import MapContext from '../../utils/map-context';
import useLocationName from '../../hooks/useLocationName';
import styles from './Measurements.module.scss';

const Measurements = () => {
  const {
    activeSensor: {
      current: { deviceId },
    },
    markers,
  } = useContext(MapContext);
  const { title, isLoaded } = useLocationName(markers, deviceId);
  return (
    <>
      <h1 className={styles.city}>{isLoaded ? '...' : title}</h1>
      <Caqi />
      <div className={styles.pm}>
        <Pm purpose="pm2.5" />
        <Pm purpose="pm10" />
      </div>
    </>
  );
};

export default Measurements;
