import React from 'react';
import Image from '../Sensors/Image';
import styles from './AboutDevice.module.scss';

const AboutDevice = () => {
  return (
    <a href="/mierniki">
      <Image className={styles.AboutDevice} />
    </a>
  );
};

export default AboutDevice;
