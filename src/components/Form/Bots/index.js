import React, { useEffect } from 'react';
import Illustration from './Illustration';
import { logEvent } from '../../../utils/analytics';
import styles from './index.module.scss';

const Bots = () => {
  useEffect(() => {
    logEvent('Form', 'bots');
  }, []);
  return (
    <>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <Illustration />
        <p className={styles.text}>
          Jeżeli jesteś robotem, niezwłocznie zgłoś błąd oprogramowania w swojej
          fabryce, a jeżeli nie jesteś robotem to skontaktuj się z nami
          bezpośrednio przez maila
          <a href="mailto:ingoodaatmosphere@gmail.com" className={styles.mail}>
            ingoodatmosphere@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Bots;
