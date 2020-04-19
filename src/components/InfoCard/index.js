import React, { useContext } from 'react';
import Context from '../../utils/Context';
import Image from './Image';
import styles from './index.module.scss';
import Content from './Content';
import withContext from '../../utils/withContext';

const InfoCard = () => {
  const { env, color } = useContext(Context);
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <Content />
      {env === 'landing-page' && <Image />}
    </div>
  );
};

export default withContext(InfoCard);
