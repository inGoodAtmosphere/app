import React, { useContext } from 'react';
import Context from '../../utils/Context';
import styles from './Button.module.scss';

const Button = () => {
  const { link, isEven } = useContext(Context);
  return (
    <a
      href={`/${link.href}`}
      className={`${styles.button} ${typeof isEven === 'boolean' &&
        (isEven ? styles.even : styles.odd)} ${styles[link.href]}`}
      aria-label={link.href}
    >
      {link.text}
    </a>
  );
};

export default Button;
