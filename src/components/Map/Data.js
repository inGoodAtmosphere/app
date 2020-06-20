import React, { useContext } from 'react';
import Measurements from './MeasurementsContainer';
import Weather from './Weather';
import AboutDevice from './AboutDevice';
import Error from '../Error';
import withContext from '../../utils/withContext';
import MapContext from '../../utils/map-context';
import styles from './Data.module.scss';
import AboutData from './AboutData';
import Chart from './Chart';

const Data = () => {
  const {
    activeSensor: { status, data },
  } = useContext(MapContext);
  console.log(useContext(MapContext));
  return (
    <div className={` ${status === 'ok' ? styles.data : styles.error}`}>
      {status === 'ok' ? (
        <>
          <Measurements />
          <Weather />
          {data.idx === 71 && <Chart />}
          <AboutData id={data.idx} />
          <AboutDevice />
        </>
      ) : (
        <Error text="Ten czujnik jest niedostępny" status={500} label={data} />
      )}
    </div>
  );
};

export default withContext(Data);
