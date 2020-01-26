import React from 'react';
import InfoCard from '../components/InfoCard';
import { content } from '../data/landing-page.json';
import Logo from '../img/logo/logo';
// prettier-ignore
const {
  project,
  map,
  encyclopedia,
  sensors,
  newsletter,
  campaign,
} = content;
const LandingPage = () => (
  <main className="landing-page__main ">
    <div className="landing-page__hero">
      <Logo />
      <div className="air">
        <h1 className="air__motto">{campaign.header}</h1>
        <h2 className="air__h2">{campaign.description}</h2>
        <a className="air__btn" href="/kampania">
          Zobacz jak
        </a>
      </div>
    </div>
    <div className="landing-page__cards">
      <InfoCard
        className="project"
        header={project.header}
        content={project.description}
        link={{ href: 'o-nas', text: 'Dowiedz się więcej' }}
      />
      <InfoCard
        className="map"
        header={map.header}
        content={map.description}
        link={{ href: 'mapa', text: 'Otwórz mapę' }}
      />
      <InfoCard
        className="encyclopedia"
        header={encyclopedia.header}
        content={encyclopedia.description}
        link={{ href: 'encyklopedia', text: 'Przeczytaj tutaj' }}
      />
      <InfoCard
        className="sensors"
        header={sensors.header}
        content={sensors.description}
        link={{ href: 'czujniki', text: 'Dowiedz się więcej' }}
      />
      <InfoCard
        className="newsletter"
        header={newsletter.header}
        content={newsletter.description}
        link={{ href: 'newsletter', text: 'Zapisz się teraz' }}
      />
    </div>
  </main>
);

export default LandingPage;
