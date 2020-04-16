import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Map from '../../components/Map';
import Data from '../../components/Map/Data';
import MapContext from '../../utils/map-context';
import mapReducer from '../../utils/map-reducer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './index.module.scss';

const MapPage = ({ measurements, markers }) => {
  const [sensorMeasurement, setSensorMeasurement] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [activeSensor, dispatch] = useReducer(mapReducer);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deviceId =
          parseInt(localStorage.getItem('activeSensor'), 10) ||
          measurements[0].deviceId;
        const sensorMeasurementRes = await fetch(
          `/api/measurements/${deviceId}`,
        );
        const sensorMeasurementJson = await sensorMeasurementRes.json();
        dispatch({
          type: 'SET_ACTIVE_SENSOR',
          current: measurements.find(
            (measurement) => measurement.deviceId === deviceId,
          ),
          avg: sensorMeasurementJson,
        });
        setSensorMeasurement(sensorMeasurementJson);
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
    return <Error message={error.message} />;
  }
  return (
    <MapContext.Provider
      value={{
        activeSensor,
        dispatch,
        measurements,
        markers,
        sensorMeasurement,
      }}
    >
      <main className={styles.content}>
        <Map />
        <Data />
      </main>
    </MapContext.Provider>
  );
};

export async function getServerSideProps() {
  const res = await Promise.all([
    fetch('https://obx88.usermd.net/api/measurements'),
    fetch('https://obx88.usermd.net/api/locations'),
  ]);
  const measurements = await res[0].json();
  const markers = await res[1].json();
  return { props: { measurements, markers } };
}

MapPage.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
  markers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
};

export default MapPage;
