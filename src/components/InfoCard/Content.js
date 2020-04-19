import React, { useContext } from 'react';
import Button from './Button';
import Context from '../../utils/Context';
import styles from './Content.module.scss';

const Content = () => {
  const { env, header, text, link, no } = useContext(Context);
  return (
    <div
      className={`${styles.wrapper} ${typeof no === 'number' &&
        ((no + 1) % 2 === 0 ? styles.even : styles.odd)}`}
    >
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.text}>{text}</p>
      {env === 'landing-page' && <Button link={link} />}
    </div>
  );
};

export default Content;
