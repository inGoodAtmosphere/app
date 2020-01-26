import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Menu from './Menu';
import Logo from '../img/logo/logo_inline';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header>
        <a href="/" className="header__a">
          <Logo />
        </a>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </header>
      <Menu isActive={isActive} />
    </>
  );
};

export default Header;
