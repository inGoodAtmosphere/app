import React from 'react';
import Navigation from './Navigation';
import Menu from '../Menu';
import Logo from './Logo';
import useWindowSize from '../../hooks/useWindowSize';
import './index.module.scss';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header className="header">
      <Logo />
      {width < 1024 ? (
        <>
          <Navigation />
        </>
      ) : (
        <Menu />
      )}
    </header>
  );
};

export default Header;
