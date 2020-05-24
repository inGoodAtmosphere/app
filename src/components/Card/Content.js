import React, { useContext } from 'react';
import Button from './Button';
import Context from '../../utils/Context';
import styles from './Content.module.scss';

const Content = () => {
  const { env, header, text, link, isEven } = useContext(Context);
  return (
    <div
      className={`${styles.wrapper} ${typeof isEven === 'boolean' &&
        (isEven ? styles.even : styles.odd)}`}
    >
      <h2 className={`${styles.header} ${styles[`header${env}`]}`}>{header}</h2>

      <p className={`${styles.paragraph} ${styles[`paragraph${env}`]}`}>
        {text}
      </p>
      {env === 'LandingPage' && <Button link={link} />}
    </div>
  );
};

export default Content;
