import React from 'react';
import './hero-image.module.scss';

const HeroImage = () => {
  return (
    <div className="landing-page__hero">
      <img
        className="landing-page__hero__image"
        src="/img/hero-images/hero-image-1280.jpg"
        srcSet="/img/hero-images/hero-image-640.jpg 640w, /img/hero-images/hero-image-1280.jpg 1280w,/img/hero-images/hero-image-1920.jpg 1920w,/img/hero-images/hero-image-5266.jpg 5266w"
        alt="Hero"
      />
      <h1 className="landing-page__hero__text">
        Stwórzmy razem przyjazną atmosferę wolną od smogu w całej Polsce!
      </h1>
      <a href="/kampania" className="landing-page__hero__btn">
        Zobacz jak
      </a>
    </div>
  );
};

export default HeroImage;
