import React from 'react';
import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Kiedy będzie dostępny nasz miernik?</h2>
      <p className={styles.text}>
        Już za niedługo nasz miernik będzie dostępny dla każdego i dane z
        naszych urządzeń będą dostępne dla każdego na naszej stronie
        internetowej oraz aplikacji.
      </p>
    </div>
  );
};

export default Info;
