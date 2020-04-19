import React from 'react';
import Card from '../Card';
import ProjectSvg from './svg/Project';
import MapSvg from './svg/Map';
import EncyclopediaSvg from './svg/Encyclopedia';
import SensorSvg from './svg/Sensor';
import ContactSvg from './svg/Contact';
import { content } from '../../../public/data/landing-page.json';

const Cards = () => {
  const SVGs = [ProjectSvg, MapSvg, EncyclopediaSvg, SensorSvg, ContactSvg];
  return content.map((card, i) => (
    <Card
      key={card.header}
      value={{
        env: 'LandingPage',
        isEven: (i + 1) % 2 === 0,
        Svg: SVGs[i],
        ...card,
      }}
    />
  ));
};

export default Cards;
