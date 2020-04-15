import React from 'react';
import InfoCard from '../../components/InfoCard';
import { definitions } from '../../../public/data/encyclopedia.json';
import styles from './index.module.scss';

const Encyclopedia = () => {
  return (
    <main className={styles.content}>
      <h1>Encyklopedia</h1>
      {definitions.map((definition) => (
        <InfoCard
          key={definition.purpose}
          value={{ env: 'encyclopedia', ...definition }}
        />
      ))}
    </main>
  );
};

export default Encyclopedia;
