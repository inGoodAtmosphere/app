import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';
import Logo from '../../img/logo/logo_inline';
import './header.scss';
import useWindowWidth from '../../hooks/useWindowWidth';
import InstallPWABtn from '../InstallPWABtn/InstallPWABtn';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [display, setDisplay] = useState('none');
  const width = useWindowWidth();
  return (
    <div className="header__wrapper">
      <header className="header">
        <Link to="/" className="header__link" aria-label="Strona główna">
          <Logo />
        </Link>
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
