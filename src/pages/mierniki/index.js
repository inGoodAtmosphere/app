import React from 'react';
import Card from '../../components/Card';
import Image from '../../components/Sensors/Image';
import { content } from '../../../public/data/sensors.json';
import styles from './index.module.scss';

const Sensors = () => {
  return (
    <main className={styles.content}>
      <h1>mierniki</h1>
      <Image />
      {content.map((card) => (
        <Card value={{ env: 'Sensors', ...card }} key={card.header} />
      ))}
    </main>
  );
};

export default Sensors;
