import React, { useContext } from 'react';
import Button from './Button';
import Context from '../../utils/Context';
import styles from './Content.module.scss';

const Content = () => {
  const { env, header, content, link } = useContext(Context);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{header}</h1>
      <p className={styles.description}>{content}</p>
      {env === 'landing-page' && <Button link={link} />}
    </div>
  );
};

export default Content;
