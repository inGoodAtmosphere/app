import React, { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';
import Logo from '../../../public/img/logo/logo_inline';
import './header.scss';
import useWindowWidth from '../../hooks/useWindowWidth';
import dynamic from 'next/dynamic';
const InstallPWABtn = dynamic(() => import('../InstallPWABtn/InstallPWABtn'), {
  ssr: false,
});

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [display, setDisplay] = useState('none');
  const width = useWindowWidth();
  return (
    <div className="header__wrapper">
      <header className="header">
        <a href="/" className="header__link" aria-label="Strona główna">
          <Logo />
        </a>
        {width < 1024 ? (
          <>
            <div className="header__hamburger-pwa-wrapper">
              <InstallPWABtn display={display} setDisplay={setDisplay} />
              <Hamburger isActive={isActive} setIsActive={setIsActive} />
            </div>
            <Menu isActive={isActive} />
          </>
        ) : (
          <Menu />
        )}
      </header>
    </div>
  );
};

export default Header;
