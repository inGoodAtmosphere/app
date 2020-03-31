import React from 'react';
import './about-device.module.scss';
import Image from '../Sensors/Image';

const AboutDevice = () => {
  return (
    <a href="/mierniki">
      <Image className="map__about-device" />
    </a>
  );
};

export default AboutDevice;
