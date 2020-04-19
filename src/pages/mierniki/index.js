/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import InfoCard from '../../components/InfoCard';
import Image from '../../components/Sensors/Image';
import { content } from '../../../public/data/sensors.json';
import styles from './index.module.scss';

const Sensors = () => {
  return (
    <main className={styles.content}>
      <h1>mierniki</h1>
      <Image />
      {content.map((card) => (
        <InfoCard value={{ env: 'sensors', ...card }} />
      ))}
    </main>
  );
};

export default Sensors;
