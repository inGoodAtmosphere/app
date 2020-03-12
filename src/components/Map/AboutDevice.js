import React from 'react';
import CardWithThumbnail from '../CardWithThumbnail';
import sensor300 from '../../../public/img/sensors/sensor-300.jpg';
import sensor800 from '../../../public/img/sensors/sensor-800.jpg';
import './about-device.module.scss';

const AboutDevice = () => {
  const value = {
    description:
      'Nasze mierniki określają stężenie pyłów poprzez użycie lasera. Następnie po dokonaniu obliczeń, zapisuje wyniki oraz wysyła je do naszych serwerów aby móc obserwować stan jakości powietrza',
    thumbnail: [sensor300, sensor800],
    env: 'map',
  };
  return <CardWithThumbnail value={value} />;
};

export default AboutDevice;
