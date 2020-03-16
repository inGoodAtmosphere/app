import React from 'react';
import Caqi from './Caqi';
import Pm from './Pm';
import './measurements.module.scss';

const Measurements = () => {
  return (
    <>
      {/* <h1 className="map__city">{activeSensor.title}</h1> */}
      <Caqi />
      <div className="map__pm">
        <Pm purpose="pm2.5" />
        <Pm purpose="pm10" />
      </div>
    </>
  );
};

export default Measurements;
