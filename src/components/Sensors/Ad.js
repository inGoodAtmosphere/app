import React from 'react';
import styles from './Ad.module.scss';

const Ad = () => {
  // prettier-ignore
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Zainteresowany miernikiem?</h2>
      <p className={styles.text}>
        <a href="/kontakt" className={styles.link}>
          Kliknij tutaj
        </a>
        {' '}
        i skontaktuj się z nami
      </p>
    </div>
  );
};

export default Ad;
