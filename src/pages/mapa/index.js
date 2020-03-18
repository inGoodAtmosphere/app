import React, { useReducer, useState, useEffect } from 'react';
import Map from '../../components/Map';
import Data from '../../components/Map/Data';
import MapContext from '../../utils/map-context';
import mapReducer from '../../reducers/map-reducer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const MapPage = () => {
  const [measurements, setMeasurements] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [sensorMeasurement, setSensorMeasurement] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [activeSensor, dispatch] = useReducer(mapReducer);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Promise.all([
          fetch('/api/measurements'),
          fetch('/api/locations'),
        ]);
        const measurementsJson = await res[0].json();
        const markersJson = await res[1].json();
        const deviceId =
          parseInt(localStorage.getItem('activeSensor'), 10) ||
          measurementsJson[0].device_id;
        setMarkers(markersJson);
        dispatch({
          type: 'SET_ACTIVE_SENSOR',
          id: deviceId,
        });
        const sensorMeasurementRes = await fetch(
          `/api/measurements/${deviceId}`,
        );
        const sensorMeasurementJson = await sensorMeasurementRes.json();
        setMeasurements(measurementsJson);
        setSensorMeasurement(sensorMeasurementJson);
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
      <main className="content">
        <Map />
        <Data />
      </main>
    </MapContext.Provider>
  );
};

export default MapPage;
