import React from 'react';
import InfoCard from '../components/InfoCard';
import { content } from '../data/encyclopedia.json';

const { caqi, pm25, pm10 } = content;
const Encyclopedia = () => (
  <main className="content">
    <h1>Encyklopedia</h1>
    <div className="wrapper__cards">
      <InfoCard
        env="encyclopedia"
        purpose="caqi"
        header="CAQI"
        content={caqi.description}
      />
      <InfoCard
        env="encyclopedia"
        purpose="pm25"
        header="PM25"
        content={pm25.description}
      />
      <InfoCard
        env="encyclopedia"
        purpose="pm10"
        header="PM10"
        content={pm10.description}
      />
    </div>
  </main>
);

export default Encyclopedia;
