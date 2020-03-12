/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import mapContext from '../../utils/map-context';
import './weather.module.scss';

const Weather = () => {
  const {
    activeSensor: { temperature, humidity },
  } = useContext(mapContext);
  return (
    <div className="card map__weather">
      <div className="map__weather__temperature map__weather__data">
        <span>Temperatura</span>
        <span>
          {temperature}
          &#8451;
        </span>
      </div>
      <div className="map__weather__humidity map__weather__data">
        <span>Wilgotność</span>
        <span>{humidity}%</span>
      </div>
    </div>
  );
};

export default Weather;
