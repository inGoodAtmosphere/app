/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/AboutUsCard';
import { people } from '../../../public/data/about-us.json';
import useWindowWidth from '../../hooks/useWindowWidth';
import './about-us.module.scss';

const portraits = [
  '/img/michał.jpg',
  '/img/olivier.jpg',
  '/img/julia.jpg',
  '/img/kubaC.jpg',
  '/img/kubaT.jpg',
  '/img/antek.jpg',
  '/img/szymon.jpg',
  '/img/rafał.jpg',
  '/img/mateusz.jpg',
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
    <main className="wrapper content about-us__wrapper">
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
          <Card key={person.name} value={{ ...person, image: portraits[i] }} />
        ))}
      </Carousel>
    </main>
  );
};
export default AboutUs;
