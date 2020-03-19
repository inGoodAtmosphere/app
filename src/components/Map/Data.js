import React from 'react';
import Measurements from './Measurements';
import Chart from './Chart';
import Weather from './Weather';
import AboutDevice from './AboutDevice';
import useWindowWidth from '../../hooks/useWindowWidth';
import './data.module.scss';

const Data = () => {
  const width = useWindowWidth();
  return (
    <div className="data">
      <Measurements />
      <Chart width={width} />
      <Weather />
      <AboutDevice />
    </div>
  );
};

export default Data;
