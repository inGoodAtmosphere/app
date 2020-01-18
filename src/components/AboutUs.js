/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import AboutUsCard from './AboutUsCard';
import { content } from '../data/about-us.json';

const AboutUs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
      </Slider>
    </div>
  );
};

export default AboutUs;
