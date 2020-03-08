import React from 'react';
import InfoCard from '../InfoCard';
import ProjectSvg from './svg/project';
import MapSvg from './svg/map';
import EncyclopediaSvg from './svg/encyclopedia';
import SensorSvg from './svg/sensor';
import ContactSvg from './svg/contact';
import { content } from '../../../public/data/landing-page.json';

const Cards = () => {
  const SVGs = [ProjectSvg, MapSvg, EncyclopediaSvg, SensorSvg, ContactSvg];
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
