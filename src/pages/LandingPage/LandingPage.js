import React from 'react';
import InfoCard from '../../components/LandingPageCard/LandingPageCard';
import { content } from '../../data/landing-page.json';
import './landing-page.scss';
import EncyclopediaSvg from '../../img/encyclopedia';
import MapSvg from '../../img/map';
import ProjectSvg from '../../img/project';
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
      <h1 className="landing-page__hero__text">{campaign.header}</h1>
      <a className="landing-page__hero__btn" href="/kampania">
        Zobacz jak
      </a>
    </div>
    <div className="landing-page__cards wrapper__cards">
      <InfoCard
        env="landing-page"
        purpose="project"
        header={project.header}
        content={project.description}
        link={{ href: 'o-nas', text: 'Poznaj nasz zespół' }}
        img={<ProjectSvg />}
      />
      <InfoCard
        env="landing-page"
        purpose="map"
        header={map.header}
        content={map.description}
        link={{ href: 'mapa', text: 'Otwórz mapę' }}
        img={<MapSvg />}
      />
      <InfoCard
        env="landing-page"
        purpose="encyclopedia"
        header={encyclopedia.header}
        content={encyclopedia.description}
        link={{ href: 'encyklopedia', text: 'Zajrzyj w tą zakładkę!' }}
        img={<EncyclopediaSvg />}
      />
      <InfoCard
        env="landing-page"
        purpose="sensors"
        header={sensors.header}
        content={sensors.description}
        link={{ href: 'mierniki', text: 'Dowiedz się więcej' }}
        img={<MapSvg />}
      />
    </div>
  </main>
);

export default LandingPage;
