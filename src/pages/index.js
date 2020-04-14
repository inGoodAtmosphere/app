import React from 'react';
import HeroImage from '../components/LandingPage/HeroImage';
import Cards from '../components/LandingPage/Cards';
import styles from './index.module.scss';

const LandingPage = () => {
  return (
    <main className={styles.content}>
      <HeroImage />
      <Cards />
    </main>
  );
};

export default LandingPage;
