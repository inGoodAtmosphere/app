import React from 'react';
import Clouds from './Clouds';
import styles from './index.module.scss';

const Loading = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <Clouds />
        <h1 className={styles.header}>Ładowanie</h1>
      </div>
    </div>
  );
};

export default Loading;
