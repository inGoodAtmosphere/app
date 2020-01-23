/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Carousel from 'nuka-carousel';

import AboutUsCard from '../components/AboutUsCard';
import { content } from '../data/about-us.json';

const AboutUs = () => {
  return (
    <div className="wrapper">
      <Carousel
        enableKeyboardControls
        cellSpacing={0}
        cellAlign="center"
        slidesToShow={1}
        // initialSlideWidth={66}
        wrapAround
        heightMode="current"
        transitionMode="scroll3d"
        // // framePadding="0 -30px"
        SlideHeight="75%"
        SlideWidth="66%"
        width="80%"
        style={{ margin: 'auto' }}
        // opacityScale={0.5}
        // withoutControls
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
