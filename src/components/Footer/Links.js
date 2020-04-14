import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Links.module.scss';

const InstallPWABtn = dynamic(() => import('../InstallPWABtn'), {
  ssr: false,
});

const Links = () => {
  const [display, setDisplay] = useState('none');
  return (
    <div className={styles.links}>
      <div className={styles.item}>
        <a href="/kontakt" className={styles.link}>
          Kontakt
        </a>
      </div>
      <div className={styles.item}>
        <a href="/polityka-prywatnosci" className={styles.link}>
          Polityka prywatności
        </a>
      </div>
      <div
        className={`${styles.item} ${display === 'none' && styles.itemHidden}`}
      >
        <InstallPWABtn isFooter setDisplay={setDisplay} display={display} />
      </div>
    </div>
  );
};

export default Links;
