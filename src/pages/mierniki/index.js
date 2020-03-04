/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CardWithThumbnail from '../../components/CardWithThumbnail';
import Info from '../../components/Sensors/Info';
import Ad from '../../components/Sensors/Ad';
import sensor300 from '../../../public/img/sensors/sensor-300.jpg';
import sensor800 from '../../../public/img/sensors/sensor-800.jpg';

const Sensors = () => {
  const value = {
    header: 'Nasze urządzenia',
    description:
      'Nasz zespół jest w trakcie projektowania układu, dzięki któremu każdy będzie mógł poprzez naszą stonę lub aplikację zobaczyć jaki jest stan powietrza którym oddychamy.',
    thumbnail: [sensor300, sensor800],
    env: 'sensors',
  };
  return (
    <main className="content">
      <h1>Nasze mierniki</h1>
      <CardWithThumbnail value={value} />
      <Info />
      <Ad />
    </main>
  );
};

export default Sensors;
