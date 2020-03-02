import React from 'react';
import Navigation from './Navigation';
import Menu from '../Menu/Menu';
import Logo from './Logo';
import useWindowWidth from '../../hooks/useWindowWidth';
import './index.module.scss';

const Header = () => {
  const width = useWindowWidth();
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
