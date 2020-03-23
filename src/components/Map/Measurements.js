import React, { useContext } from 'react';
import Caqi from './Caqi';
import Pm from './Pm';
import './measurements.module.scss';
import MapContext from '../../utils/map-context';
import useLocationName from '../../hooks/useLocationName';

const Measurements = () => {
  const {
    activeSensor: {
      current: { deviceId },
    },
    markers,
  } = useContext(MapContext);
  const { title, isLoaded } = useLocationName(markers, deviceId);
  return (
    <>
      <h1 className="map__city">{isLoaded ? '...' : title}</h1>
      <Caqi />
      <div className="map__pm">
        <Pm purpose="pm2.5" />
        <Pm purpose="pm10" />
      </div>
    </>
  );
};

export default Measurements;
