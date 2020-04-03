import React from 'react';
import HeroImage from '../components/LandingPage/HeroImage';
import Cards from '../components/LandingPage/Cards';
import Popup from '../components/Popup';

const LandingPage = () => {
  return (
    <main className="content">
      <Popup />
      <HeroImage />
      <Cards />
    </main>
  );
};

export default LandingPage;
