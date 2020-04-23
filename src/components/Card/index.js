import React, { useContext } from 'react';
import Context from '../../utils/Context';
import Image from './Image';
import styles from './index.module.scss';
import Content from './Content';
import withContext from '../../utils/withContext';

const Card = () => {
  const { env, color, isEven, id } = useContext(Context);
  return (
    <div
      id={id}
      className={`${styles.card} ${typeof isEven === 'boolean' &&
        (isEven ? styles.even : styles.odd)} ${styles[color]}`}
    >
      <Content />
      {env === 'LandingPage' && <Image />}
    </div>
  );
};

export default withContext(Card);
