import React from 'react';
import InfoCard from './InfoCard';
import { content } from '../data/landing-page.json';

const LandingPage = () => (
  <>
    <img src="https://picsum.photos/280/210" alt="Logo" />
    <h1>Feel the air</h1>
    <h2>{content.h2}</h2>
    <a href="/kampania">Zobacz jak</a>
    <InfoCard
      className="project"
      header="Nasz projekt"
      content={content.project}
    />
    <div className="map">
      <div className="map__header">
        <h2>Mapa z pomiarami z naszych czujników</h2>
        <img src="https://picsum.photos/100/130" alt="Mapa" />
      </div>
      <div className="map__content">
        <p>{content.p}</p>
      </div>
    </div>
  </>
);

export default LandingPage;
