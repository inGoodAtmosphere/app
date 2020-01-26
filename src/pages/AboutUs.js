/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Carousel from 'nuka-carousel';
import AboutUsCard from '../components/AboutUsCard';
import { content } from '../data/about-us.json';
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
      },
      {
        slidesToShow: 4,
        renderCenterLeftControls({ previousSlide }) {
          return (
            <button
              type="button"
              className="slider__btn"
              onClick={previousSlide}
            >
              <i className="fas fa-arrow-left" />
            </button>
          );
        },
        renderCenterRightControls({ nextSlide }) {
          return (
            <button type="button" className="slider__btn" onClick={nextSlide}>
              <i className="fas fa-arrow-right" />
            </button>
          );
        },
      },
    ];
    if (width < 400) return breakpoints[0];
    if (width < 600) return breakpoints[1];
    if (width < 1000) return breakpoints[2];
    return breakpoints[3];
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
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />

        <AboutUsCard image="https://picsum.photos/200/275" content={content} />

        <AboutUsCard image="https://picsum.photos/200/275" content={content} />

        <AboutUsCard image="https://picsum.photos/200/275" content={content} />

        <AboutUsCard image="https://picsum.photos/200/275" content={content} />

        <AboutUsCard image="https://picsum.photos/200/275" content={content} />

        <AboutUsCard image="https://picsum.photos/200/275" content={content} />

        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
      </Carousel>
    </main>
  );
};
export default AboutUs;
