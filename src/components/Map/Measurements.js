import React, { useContext }  from 'react';
import Caqi from './Caqi'
import Pm from './Pm'
import mapContext from '../../utils/map-context';
import './measurements.module.scss';

const Measurements = () => {
  const { activeSensor } = useContext(mapContext);
  return (
    <>
      <h1 className="map__city">{activeSensor.title}</h1>
      <Caqi />
      <div className="map__pm">
        <Pm purpose='pm2.5' />
        <Pm purpose='pm10' />
      </div>
    </>
  );
};

export default Measurements;