/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import AboutUsCard from './AboutUsCard';

const AboutUs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // lazyLoad: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };
  const content = {
    name: 'Anonim',
    role: 'Programista, elektronik',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vel rerum mollitia, in maiores deleniti eos quaerat animi ullam aut beatae vitae! Incidunt officiis obcaecati officia mollitia cumque natus qui!',
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
        <AboutUsCard image="https://picsum.photos/200/275" content={content} />
      </Slider>
    </div>
  );
};

export default AboutUs;
