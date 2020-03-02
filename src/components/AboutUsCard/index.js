import React from 'react';
import './index.module.scss';
import Image from './Image';
import Card from './Card';
import withContext from '../../utils/withContext';

const AboutUsCard = () => (
  <div className="about-us__card__wrapper">
    <Image />
    <Card />
  </div>
);

export default withContext(AboutUsCard);
