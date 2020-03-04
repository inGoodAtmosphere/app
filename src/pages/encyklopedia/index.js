import React from 'react';
import InfoCard from '../../components/InfoCard';
import { definitions } from '../../../public/data/encyclopedia.json';

const Encyclopedia = () => {
  return (
    <main className="content">
      <h1>Encyklopedia</h1>
      {definitions.map((definition) => (
        <InfoCard
          value={{ env: 'encyclopedia', ...definition }}
          key={definition.purpose}
        />
      ))}
    </main>
  );
};

export default Encyclopedia;
