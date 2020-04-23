import React, { useContext } from 'react';
import MapContext from '../../utils/map-context';
import styles from './Caqi.module.scss';
import useColor from './setColor';

const Caqi = () => {
  const {
    activeSensor: {
      data: { aqi },
    },
  } = useContext(MapContext);
  const { backgroundColor, status } = useColor(aqi);
  return (
    <a
      href="/encyklopedia#caqi"
      className={styles.caqi}
      style={{ backgroundColor }}
    >
      <div className={styles.wrapper}>
        <h3 className={styles.title}>CAQI</h3>
        <h2 className={styles.measurement}>{aqi}</h2>
      </div>
      <p className={styles.status}>{status}</p>
    </a>
  );
};

export default Caqi;
