import React from 'react';
import InfoCard from '../components/InfoCard';
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
    <div className="content">
      <InfoCard
        value={{
          env: 'landing-page',
          purpose: 'project',
          header: project.header,
          content: project.description,
          Svg: ProjectSvg,
          link: { href: 'o-nas', text: 'Poznaj nasz zespół' },
        }}
      />
      <InfoCard
        value={{
          env: 'landing-page',
          purpose: 'map',
          header: map.header,
          content: map.description,
          Svg: MapSvg,
        }}
      />
      <InfoCard
        value={{
          env: 'landing-page',
          purpose: 'encyclopedia',
          header: encyclopedia.header,
          content: encyclopedia.description,
          Svg: EncyclopediaSvg,
          link: { href: 'encyklopedia', text: 'Zajrzyj w tę zakładkę!' },
        }}
      />
      <InfoCard
        value={{
          env: 'landing-page',
          purpose: 'sensors',
          header: sensors.header,
          content: sensors.description,
          Svg: SensorSvg,
          link: { href: 'mierniki', text: 'Dowiedz się więcej' },
        }}
      />
      <InfoCard
        value={{
          env: 'landing-page',
          purpose: 'contact',
          header: contact.header,
          content: contact.description,
          Svg: ContactSvg,
          link: { href: 'kontakt', text: 'Napisz do nas' },
        }}
      />
    </div>
  </main>
);

export default LandingPage;
