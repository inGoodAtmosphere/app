import React from 'react';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <>
      <p className={styles.text}>
        W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies.
        W każdym momencie możesz dokonać zmiany ustawień przeglądarki.
      </p>
      <a
        href="/polityka-prywatnosci"
        aria-label="Polityka prywatności"
        className={styles.link}
      >
        Zobacz politykę prywatności
      </a>
    </>
  );
};

export default Content;
