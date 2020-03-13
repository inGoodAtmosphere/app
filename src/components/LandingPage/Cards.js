import React from 'react';
import InfoCard from '../InfoCard';
import ProjectSvg from './svg/Project';
import MapSvg from './svg/Map';
import EncyclopediaSvg from './svg/Encyclopedia';
import SensorSvg from './svg/Sensor';
import ContactSvg from './svg/Contact';
import SupportSvg from './svg/Support';
import { content } from '../../../public/data/landing-page.json';

const Cards = () => {
  const SVGs = [
    ProjectSvg,
    MapSvg,
    EncyclopediaSvg,
    SensorSvg,
    ContactSvg,
    SupportSvg,
  ];
  return content.map((card, i) => (
    <InfoCard
      key={card.purpose}
      value={{
        env: 'landing-page',
        purpose: card.purpose,
        header: card.header,
        content: card.description,
        Svg: SVGs[i],
        link: { ...card.link },
      }}
    />
  ));
};

export default Cards;
