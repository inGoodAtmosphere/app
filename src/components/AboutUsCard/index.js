import React from 'react';
import Image from './Image';
import Card from './Card';
import withContext from '../../utils/withContext';
import styles from './index.module.scss';

const AboutUsCard = () => (
  <div className={styles.wrapper}>
    <Image />
    <Card />
  </div>
);

export default withContext(AboutUsCard);
