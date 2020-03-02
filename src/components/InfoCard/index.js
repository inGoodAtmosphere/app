import React, { useContext } from 'react';
import Context from '../../utils/Context';
import Image from './Image';
import './index.module.scss';
import Content from './Content';
import withContext from '../../utils/withContext';

const InfoCard = () => {
  const { env, purpose } = useContext(Context);
  return (
    <div className={` card ${env}__card ${env}__${purpose}`}>
      <Content />
      {env === 'landing-page' && <Image />}
    </div>
  );
};

export default withContext(InfoCard);
