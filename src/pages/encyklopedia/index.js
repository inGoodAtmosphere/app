import React from 'react';
import InfoCard from '../../components/InfoCard';
import { content } from '../../../public/data/encyclopedia.json';
import './encyclopedia.module.scss';

const { caqi, pm25, pm10 } = content;
const Encyclopedia = () => (
  <main className="content">
    <h1>Encyklopedia</h1>
    <div className="wrapper__cards">
      <InfoCard
        value={{
          env: 'encyclopedia',
          purpose: 'caqi',
          header: 'CAQI',
          content: caqi.description,
        }}
      />
      <InfoCard
        value={{
          env: 'encyclopedia',
          purpose: 'pm25',
          header: 'PM2.5',
          content: pm25.description,
        }}
      />
      <InfoCard
        value={{
          env: 'encyclopedia',
          purpose: 'pm10',
          header: 'PM10',
          content: pm10.description,
        }}
      />
    </div>
  </main>
);

export default Encyclopedia;
