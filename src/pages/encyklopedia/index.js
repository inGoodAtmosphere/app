import React from 'react';
import { content } from '../../../public/data/encyclopedia.json';
import styles from './index.module.scss';
import EncyclopediaCard from '../../components/EncyclopediaCard';

const Encyclopedia = () => {
  return (
    <main className={styles.content}>
      <h1>Encyklopedia</h1>
      {content.map((card) => (
        <EncyclopediaCard key={card.id} content={card} />
      ))}
    </main>
  );
};

export default Encyclopedia;
