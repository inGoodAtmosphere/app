import React, { useContext } from 'react';
import mapContext from '../../contexts/map-context';
import Chart from './Chart';
import Weather from './Weather';
import AboutDevice from './AboutDevice';

const Data = () => {
  const { activeSensor } = useContext(mapContext);
  return (
    <div className="data">
      <h2 className="map__city">{activeSensor.title}</h2>
      <div className="map__data__caqi">{activeSensor.caqi}</div>
      <div className="map__data__pm">{activeSensor.pm25}</div>
      <div className="map__data__pm">{activeSensor.pm10}</div>
      <Chart />
      <Weather />
      <AboutDevice />
    </div>
  );
};

export default Data;
