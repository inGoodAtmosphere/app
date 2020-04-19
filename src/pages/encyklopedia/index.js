import React from 'react';
import InfoCard from '../../components/InfoCard';
import { content } from '../../../public/data/encyclopedia.json';
import styles from './index.module.scss';

const Encyclopedia = () => {
  return (
    <main className={styles.content}>
      <h1>Encyklopedia</h1>
      {content.map((card) => (
        <InfoCard key={card.header} value={{ env: 'encyclopedia', ...card }} />
      ))}
    </main>
  );
};

export default Encyclopedia;
