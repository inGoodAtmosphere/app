import React from 'react';
import InfoCard from '../components/InfoCard';
import { content } from '../data/encyclopedia.json';

const { caqi, pm25, pm10 } = content;
const Encyclopedia = () => (
  <main className="content">
    <h1>Encyklopedia</h1>
    <InfoCard
      className="encyclopedia__card"
      header="CAQI"
      content={caqi.description}
    />
    <InfoCard
      className="encyclopedia__card"
      header="PM25"
      content={pm25.description}
    />
    <InfoCard
      className="encyclopedia__card"
      header="PM10"
      content={pm10.description}
    />
  </main>
);

export default Encyclopedia;
