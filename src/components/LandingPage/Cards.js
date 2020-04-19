import React from 'react';
import InfoCard from '../InfoCard';
import ProjectSvg from './svg/Project';
import MapSvg from './svg/Map';
import EncyclopediaSvg from './svg/Encyclopedia';
import SensorSvg from './svg/Sensor';
import ContactSvg from './svg/Contact';
import { content } from '../../../public/data/landing-page.json';

const Cards = () => {
  const SVGs = [ProjectSvg, MapSvg, EncyclopediaSvg, SensorSvg, ContactSvg];
  return content.map((card, i) => (
    <InfoCard
      key={card.header}
      value={{
        env: 'landing-page',
        isEven: (i + 1) % 2 === 0,
        Svg: SVGs[i],
        ...card,
      }}
    />
  ));
};

export default Cards;
