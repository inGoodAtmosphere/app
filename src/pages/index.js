import React from 'react';
import InfoCard from '../components/LandingPageCard/LandingPageCard';
import { content } from '../../public/landing-page.json';
import './landing-page.module.scss';
import EncyclopediaSvg from '../../public/img/encyclopedia';
import MapSvg from '../../public/img/map';
import ProjectSvg from '../../public/img/project';
import ContactSvg from '../../public/img/contact';
import SensorSvg from '../../public/img/sensor';

const { project, map, encyclopedia, sensors, campaign, contact } = content;
const LandingPage = () => (
  <main className="landing-page__main ">
    <div className="landing-page__hero">
      <img
        className="landing-page__hero__image"
        src="../../public/img/hero-images/hero-image-1280.jpg"
        srcSet="/img/hero-images/hero-image-640.jpg 640w, /img/hero-images/hero-image-1280.jpg 1280w,/img/hero-images/hero-image-1920.jpg 1920w,/img/hero-images/hero-image-5266.jpg 5266w"
        alt="Hero"
      />
      <h1 className="landing-page__hero__text">{campaign.header}</h1>
      <a href="/kampania" className="landing-page__hero__btn">
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
        Img={ProjectSvg}
      />
      <InfoCard
        env="landing-page"
        purpose="map"
        header={map.header}
        content={map.description}
        Img={MapSvg}
      />
      <InfoCard
        env="landing-page"
        purpose="encyclopedia"
        header={encyclopedia.header}
        content={encyclopedia.description}
        link={{ href: 'encyklopedia', text: 'Zajrzyj w tę zakładkę!' }}
        Img={EncyclopediaSvg}
      />
      <InfoCard
        env="landing-page"
        purpose="sensors"
        header={sensors.header}
        content={sensors.description}
        link={{ href: 'mierniki', text: 'Dowiedz się więcej' }}
        Img={SensorSvg}
      />
      <InfoCard
        env="landing-page"
        purpose="contact"
        header={contact.header}
        content={contact.description}
        link={{ href: 'kontakt', text: 'Napisz do nas' }}
        Img={ContactSvg}
      />
    </div>
  </main>
);

export default LandingPage;
