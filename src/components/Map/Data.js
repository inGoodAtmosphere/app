import React, { useContext } from 'react';
import Measurements from './Measurements';
import Weather from './Weather';
import AboutDevice from './AboutDevice';
import Error from '../Error';
import withContext from '../../utils/withContext';
import MapContext from '../../utils/map-context';
import styles from './Data.module.scss';

const Data = () => {
  const {
    activeSensor: { status, data },
  } = useContext(MapContext);
  return (
    <div className={` ${status === 'ok' ? styles.data : styles.error}`}>
      {status === 'ok' ? (
        <>
          <Measurements />
          <Weather />
          <AboutDevice />
        </>
      ) : (
        <Error text="Ten czujnik jest niedostępny" status={500} label={data} />
      )}
    </div>
  );
};

export default withContext(Data);
