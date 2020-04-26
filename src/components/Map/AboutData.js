import React from 'react';
import styles from './AboutData.module.scss';

const AboutData = () => {
  return (
    <a
      href="https://waqi.info/"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/waqi.png" alt="WAQI" className={styles.image} />
      <p>Dane pochodzą ze strony waqi.info</p>
    </a>
  );
};

export default AboutData;
