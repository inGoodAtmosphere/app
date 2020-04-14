import React from 'react';
import Patrons from './Patrons';
import Icons from './Icons';
import Links from './Links';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Icons />
      <Links />
      <Patrons />
    </footer>
  );
};

export default Footer;
