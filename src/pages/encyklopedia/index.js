import React from 'react';
import Card from '../../components/Card';
import { content } from '../../../public/data/encyclopedia.json';
import styles from './index.module.scss';

const Encyclopedia = () => {
  return (
    <main className={styles.content}>
      <h1>Encyklopedia</h1>
      {content.map((card) => (
        <Card key={card.header} value={{ env: 'Encyclopedia', ...card }} />
      ))}
    </main>
  );
};

export default Encyclopedia;
