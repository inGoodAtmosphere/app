import React, { useContext } from 'react';
import mapContext from '../../utils/map-context';
import { descriptions } from '../../../public/data/caqi-descriptions.json';
import countCaqi from './countCaqi';
import styles from './Caqi.module.scss';

const Caqi = () => {
  const {
    activeSensor: { current },
  } = useContext(mapContext);
  const caqi = countCaqi(current['pm2.5'], current.pm10);
  const [veryBad, bad, medium, good, veryGood] = descriptions;
  const setStatus = (caqiValue) => {
    if (caqiValue < 25) return { backgroundColor: '#44a368', status: veryGood };
    if (caqiValue < 50) return { backgroundColor: '#a9c46e', status: good };
    if (caqiValue < 75) return { backgroundColor: '#c19330', status: medium };
    if (caqiValue < 100) return { backgroundColor: '#e1625a', status: bad };
    return { backgroundColor: '#7c1d7a', status: veryBad };
  };
  const { status, backgroundColor } = setStatus(caqi);
  return (
    <a
      href="/encyklopedia#caqi"
      className={styles.caqi}
      style={{ backgroundColor }}
    >
      <div className={styles.wrapper}>
        <h3 className={styles.title}>CAQI</h3>
        <h2 className={styles.measurement}>{caqi}</h2>
      </div>
      <p className={styles.status}>{status}</p>
    </a>
  );
};

export default Caqi;
