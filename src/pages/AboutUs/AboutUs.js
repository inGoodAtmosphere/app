/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';
import { people } from '../../data/about-us.json';
import useWindowWidth from '../../hooks/useWindowWidth';
import './about-us.scss';
import michal from '../../img/michał.jpg';
import olivier from '../../img/olivier.jpg';
import kubaC from '../../img/kubaC.jpg';
import julia from '../../img/julia.jpg';
import kubaT from '../../img/kubaT.jpg';
import antek from '../../img/antek.jpg';
import szymon from '../../img/szymon.jpg';
import rafal from '../../img/rafał.jpg';
import mateusz from '../../img/mateusz.jpg';

const portraits = [
  michal,
  olivier,
  julia,
  kubaC,
  kubaT,
  antek,
  szymon,
  rafal,
  mateusz,
];

const AboutUs = () => {
  const width = useWindowWidth();
  const setBreakpoints = () => {
    const breakpoints = [
      {
        slidesToShow: 1,
      },
      {
        slidesToShow: 2,
      },
      {
        slidesToShow: 3,
        renderCenterLeftControls({ previousSlide }) {
          return (
            <button
              type="button"
              className="slider__btn"
              onClick={previousSlide}
            >
              <FontAwesomeIcon size="2x" icon={faArrowLeft} />
            </button>
          );
        },
        renderCenterRightControls({ nextSlide }) {
          return (
            <button type="button" className="slider__btn" onClick={nextSlide}>
              <FontAwesomeIcon size="2x" icon={faArrowRight} />
            </button>
          );
        },
      },
    ];
    if (width < 500) return breakpoints[0];
    if (width < 1024) return breakpoints[1];
    return breakpoints[2];
  };
  return (
    <main className="wrapper content">
      <Carousel
        enableKeyboardControls
        cellSpacing={-40}
        slidesToShow={1}
        wrapAround
        transitionMode="scroll3d"
        renderCenterLeftControls={() => null}
        renderCenterRightControls={() => null}
        renderBottomCenterControls={() => null}
        {...setBreakpoints()}
      >
        {people.map((person, i) => (
          <AboutUsCard
            person={{ ...person, image: portraits[i] }}
            key={person.name}
          />
        ))}
      </Carousel>
    </main>
  );
};
export default AboutUs;
