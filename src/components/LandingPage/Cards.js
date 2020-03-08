import React from 'react';
import InfoCard from '../InfoCard';
import ProjectSvg from '../../../public/img/project';
import MapSvg from '../../../public/img/map';
import EncyclopediaSvg from '../../../public/img/encyclopedia';
import SensorSvg from '../../../public/img/sensor';
import ContactSvg from '../../../public/img/contact';
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
