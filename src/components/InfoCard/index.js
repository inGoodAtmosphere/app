import React, { useContext } from 'react';
import Context from '../../utils/Context';
import Image from './Image';
import landingPageStyles from './LandingPage.module.scss';
import encyclopediaStyles from './Encyclopedia.module.scss';
import Content from './Content';
import withContext from '../../utils/withContext';

const InfoCard = () => {
  const { env, purpose } = useContext(Context);
  const styles =
    env === 'landing-page' ? landingPageStyles : encyclopediaStyles;
  return (
    <div id={purpose} className={`${styles.card} ${styles[purpose]}`}>
      <Content />
      {env === 'landing-page' && <Image />}
    </div>
  );
};

export default withContext(InfoCard);
