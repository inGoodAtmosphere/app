import React from 'react';
import styles from './HeroImage.module.scss';

const HeroImage = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="/img/hero-images/1280.jpg"
        srcSet="/img/hero-images/640.jpg 640w, /img/hero-images/1280.jpg 1280w,/img/hero-images/1920.jpg 1920w,/img/hero-images/4896.jpg 4896w"
        alt="Hero"
      />
      <h1 className={styles.text}>
        Stwórzmy razem przyjazną atmosferę wolną od smogu w całej Polsce!
      </h1>
      <a href="/kampania" className={styles.button}>
        Zobacz jak
      </a>
    </div>
  );
};

export default HeroImage;
