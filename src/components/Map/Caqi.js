import React, { useContext } from 'react';
import MapContext from '../../utils/map-context';
import Tooltip from './Tooltip';
import setColor from './setColor';
import styles from './Caqi.module.scss';

const Caqi = () => {
  const {
    activeSensor: {
      data: { aqi },
    },
  } = useContext(MapContext);
  const { backgroundColor, status } = setColor(aqi);
  return (
    <div className={styles.caqi} style={{ backgroundColor }}>
      <Tooltip className={styles.tooltip} purpose="caqi" title="CAQI" />
      <div className={styles.wrapper}>
        <h3 className={styles.title}>CAQI</h3>
        <h2 className={styles.measurement}>{aqi}</h2>
      </div>
      <p className={styles.status}>{status}</p>
    </div>
  );
};

export default Caqi;
