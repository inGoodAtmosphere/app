import React from 'react';
import Svg from './Logo';
import styles from './Link.module.scss';

const Logo = () => {
  return (
    <a href="/" className={styles.link} aria-label="Strona główna">
      <Svg />
    </a>
  );
};

export default Logo;
