/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Info from '../../components/Sensors/Info';
import Ad from '../../components/Sensors/Ad';
import Image from '../../components/Sensors/Image';

const Sensors = () => {
  return (
    <main className="content">
      <h1>Nasze mierniki</h1>
      <Image />
      <Info />
      <Ad />
    </main>
  );
};

export default Sensors;
