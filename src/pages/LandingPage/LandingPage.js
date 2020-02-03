import React from 'react';
import InfoCard from '../../components/LandingPageCard/LandingPageCard';
import { content } from '../../data/landing-page.json';
import './landing-page.scss';
import './landing-page-card.scss';

// prettier-ignore
const {
  project,
  map,
  encyclopedia,
  sensors,
  campaign,
} = content;
const LandingPage = () => (
  <main className="landing-page__main ">
    <div className="landing-page__hero">
      <h1>Tu cos bedzie </h1>
      <div className="air">
        <h1 className="air__motto">{campaign.header}</h1>
        <h2 className="air__h2">{campaign.description}</h2>
        <a className="air__btn" href="/kampania">
          Zobacz jak
        </a>
      </div>
    </div>
    <div className="landing-page__cards wrapper__cards">
      <InfoCard
        env="landing-page"
        purpose="project"
        header={project.header}
        content={project.description}
        link={{ href: 'o-nas', text: 'Dowiedz się więcej' }}
      />
      <InfoCard
        env="landing-page"
        purpose="map"
        header={map.header}
        content={map.description}
        link={{ href: 'mapa', text: 'Otwórz mapę' }}
      />
      <InfoCard
        env="landing-page"
        purpose="encyclopedia"
        header={encyclopedia.header}
        content={encyclopedia.description}
        link={{ href: 'encyklopedia', text: 'Zajrzyj w tą zakładkę!' }}
      />
      <InfoCard
        env="landing-page"
        purpose="sensors"
        header={sensors.header}
        content={sensors.description}
        link={{ href: 'czujniki', text: 'Dowiedz się więcej' }}
      />
    </div>
  </main>
);

export default LandingPage;
