import React, { useReducer, useState, useEffect } from 'react';
import Map from '../../components/Map';
import Data from '../../components/Map/Data';
import MapContext from '../../utils/map-context';
import mapReducer from '../../reducers/map-reducer';
import Loading from '../../components/Loading';

// TODO: defaultState from gps/cookies

const MapPage = () => {
  const [measurements, setMeasurements] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [activeSensor, dispatch] = useReducer(mapReducer);
  useEffect(() => {
    const deviceId = parseInt(localStorage.getItem('activeSensor'), 10);
    const fetchData = async () => {
      try {
        const res = await Promise.all([
          fetch('/api/measurements'),
          fetch('/api/locations'),
        ]);
        const measurementsJson = await res[0].json();
        const markersJson = await res[1].json();
        setMeasurements(measurementsJson);
        dispatch({
          type: 'SET_ACTIVE_SENSOR',
          data: deviceId
            ? measurementsJson.find(
                (measurement) => measurement.device_id === deviceId,
              )
            : measurementsJson[0],
        });
        setMarkers(markersJson);
        setIsLoaded(false);
      } catch (err) {
        setError(err);
        setIsLoaded(false);
      }
    };
    fetchData();
  }, []);
  if (isLoaded) return <Loading />;
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <MapContext.Provider
      value={{ activeSensor, dispatch, measurements, markers }}
    >
      <main className="content">
        <Map />
        <Data />
      </main>
    </MapContext.Provider>
  );
};

export default MapPage;
