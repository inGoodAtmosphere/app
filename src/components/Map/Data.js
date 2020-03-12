import React from 'react';
import Measurements from './Measurements';
import Chart from './Chart';
import Weather from './Weather';
import AboutDevice from './AboutDevice';

const Data = () => {
  return (
    <div className="data">
      <Measurements />
      <Chart />
      <Weather />
      <AboutDevice />
    </div>
  );
};

export default Data;
