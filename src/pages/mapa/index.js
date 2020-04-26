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

const MapPage = ({ measurements: { data, status } }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [activeSensor, dispatch] = useReducer(mapReducer);
  useEffect(() => {
    if (status === 'error') {
      setError(data);
      setIsLoaded(false);
      return;
    }
    const fetchData = async () => {
      try {
        const deviceCoordinates = JSON.parse(
          localStorage.getItem('activeSensor'),
        ) || {
          lat: data[0].lat,
          lng: data[0].lon,
        };
        const sensorMeasurementRes = await fetch(
          `https://api.waqi.info/feed/geo:${deviceCoordinates.lat};${deviceCoordinates.lng}/?token=${process.env.WAQI_TOKEN}`,
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
    return <Error status={500} text="Coś poszło nie tak" label={error} />;
  }
  return (
    <main className={styles.content}>
      <MapContext.Provider
        value={{
          activeSensor,
          dispatch,
        }}
      >
        <Map measurements={data} />
        <Data />
      </MapContext.Provider>
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.waqi.info/map/bounds/?latlng=54.835663,14.124400,49.002032,24.145578&token=${process.env.WAQI_TOKEN}`,
  );

  const json = await res.json();
  const dataFromPoland = json.data.filter((location) =>
    location.station.name.includes('Poland'),
  );
  const formattedData = dataFromPoland.map((element) => ({
    ...element,
    station: {
      ...element.station,
      name: element.station.name.replace(', Poland', ''),
    },
  }));
  const measurements = { status: json.status, data: formattedData };
  return { props: { measurements } };
}

MapPage.propTypes = {
  measurements: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.objectOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.objectOf(PropTypes.string),
          ]),
        ),
      ),
      PropTypes.string,
    ]),
  ).isRequired,
};

export default MapPage;
