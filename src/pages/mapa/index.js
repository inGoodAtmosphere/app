import React, { useReducer, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Map from '../../components/Map';
import Data from '../../components/Map/Data';
import MapContext from '../../utils/map-context';
import mapReducer from '../../utils/map-reducer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import mapPropTypes from '../../utils/map-prop-types';
import styles from './index.module.scss';

const MapPage = ({ measurements }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [activeSensor, dispatch] = useReducer(mapReducer);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deviceCoordinates = JSON.parse(
          localStorage.getItem('activeSensor'),
        ) || {
          lat: measurements[0].lat,
          lng: measurements[0].lon,
        };
        const sensorMeasurementRes = await fetch(
          `https://api.waqi.info/feed/geo:${deviceCoordinates.lat};${deviceCoordinates.lng}/?token=b2b8543368a11919d02ea5c8fc303c4e8dae84cb`,
        );
        const sensorMeasurementJson = await sensorMeasurementRes.json();
        dispatch({
          type: 'SET_ACTIVE_SENSOR',
          activeSensor: sensorMeasurementJson,
        });
        setIsLoaded(false);
      } catch (err) {
        setError(err);
        setIsLoaded(false);
      }
    };
    fetchData();
  }, []);
  const router = useRouter();
  if (router.isFallback) return <Loading />;
  if (isLoaded) return <Loading />;
  if (error) {
    return <Error status={500} text="Coś poszło nie tak" />;
  }
  return (
    <main className={styles.content}>
      <MapContext.Provider
        value={{
          activeSensor,
          dispatch,
        }}
      >
        <Map measurements={measurements} />
        <Data />
      </MapContext.Provider>
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.waqi.info/map/bounds/?latlng=54.826651,14.473435,48.937351,24.053449&token=b2b8543368a11919d02ea5c8fc303c4e8dae84cb',
  );

  const json = await res.json();
  const measurements = json.data;
  return { props: { measurements } };
}

MapPage.propTypes = mapPropTypes;

export default MapPage;
