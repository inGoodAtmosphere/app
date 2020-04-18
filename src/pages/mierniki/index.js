/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Card from '../../components/Sensors/Card';
import Image from '../../components/Sensors/Image';
import styles from './index.module.scss';

const Sensors = () => {
  return (
    <main className={styles.content}>
      <h1>mierniki</h1>
      <Image />
      <Card header="Kiedy będzie dostępny nasz miernik?" color="lightAccent">
        Już za niedługo nasz miernik będzie dostępny dla każdego i dane z
        naszych urządzeń będą dostępne dla każdego na naszej stronie
        internetowej oraz aplikacji.
      </Card>
      <Card header="Zainteresowany miernikiem?" color="darkAccent">
        <a href="/kontakt" className={styles.link}>
          Kliknij tutaj
        </a>{' '}
        i skontaktuj się z nami
      </Card>
    </main>
  );
};

export default Sensors;
