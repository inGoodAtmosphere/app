import React, { useContext } from 'react';
import Button from './Button';
import Context from '../../utils/Context';
import styles from './Content.module.scss';
import Paragraph from '../Article/Paragraph';

const Content = () => {
  const { env, header, text, link, isEven } = useContext(Context);
  return (
    <div
      className={`${styles.wrapper} ${typeof isEven === 'boolean' &&
        (isEven ? styles.even : styles.odd)}`}
    >
      <h2 className={styles.header}>{header}</h2>
      <Paragraph content={text} className={styles.text} />
      {env === 'landing-page' && <Button link={link} />}
    </div>
  );
};

export default Content;
