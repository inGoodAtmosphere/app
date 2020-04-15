import React from 'react';
import styles from './Notification.module.scss';

const Notification = () => {
  return (
    <>
      <h2>Lorem ipsum dolor sit.</h2>
      <p>time</p>
      <p>Artykuł</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam.
      </p>
    </>
  );
};

export default Notification;
