import React from 'react';
import Navigation from './Navigation';
import Menu from '../Menu';
import Logo from './Link';
import useWindowWidth from '../../hooks/useWindowDimensions';
import styles from './index.module.scss';

const Header = () => {
  const { width } = useWindowWidth();
  return (
    <header className={styles.header}>
      <Logo />
      {width < 1024 ? <Navigation /> : <Menu />}
    </header>
  );
};

export default Header;
