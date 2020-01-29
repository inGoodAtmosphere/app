/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AboutUsCard from '../components/AboutUsCard';
import { people } from '../data/about-us.json';
import useWindowWidth from '../hooks/useWindowWidth';

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
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          );
        },
        renderCenterRightControls({ nextSlide }) {
          return (
            <button type="button" className="slider__btn" onClick={nextSlide}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          );
        },
      },
    ];
    if (width < 500) return breakpoints[0];
    if (width < 1000) return breakpoints[1];
    return breakpoints[2];
  };
  return (
    <main className="wrapper content">
      <h1 className="about-us__header">O nas</h1>
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
        {people.map((person) => (
          <AboutUsCard person={person} key={person.name} />
        ))}
      </Carousel>
    </main>
  );
};
export default AboutUs;
