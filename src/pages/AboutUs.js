/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Carousel from 'nuka-carousel';
import AboutUsCard from '../components/AboutUsCard';

import { content } from '../data/about-us.json';

const AboutUs = () => {
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
      },
    ];
    if (window.innerWidth < 400) return breakpoints[0];
    if (window.innerWidth < 600) return breakpoints[1];
    if (window.innerWidth < 1000) return breakpoints[2];
    return breakpoints[3];
  };
  return (
    <div className="wrapper">
      <Carousel
        enableKeyboardControls
        cellSpacing={-40}
        slidesToShow={1}
        wrapAround
        transitionMode="scroll3d"
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
    </div>
  );
};

export default AboutUs;
