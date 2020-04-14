import React, { useContext } from 'react';
import Context from '../../utils/Context';
import styles from './Button.module.scss';

const Button = () => {
  const { link } = useContext(Context);
  if (link.href === 'mapa')
    return <span className={styles.mapa}>Już wkrótce</span>;
  return (
    <a
      href={`/${link.href}`}
      className={`${styles.button} ${styles[link.href]}`}
      aria-label={link.href}
    >
      {link.text}
    </a>
  );
};

export default Button;
