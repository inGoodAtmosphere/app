import React, { useState } from 'react';
import { Sticky } from 'react-sticky';
import Hamburger from './Hamburger';
import Menu from './Menu';
import Logo from '../img/logo/logo_inline';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <Sticky>
        {({ style }) => (
          <header style={style}>
            <a href="/" className="header__a">
              <Logo />
            </a>
            <Hamburger isActive={isActive} setIsActive={setIsActive} />
            <Menu isActive={isActive} />
          </header>
        )}
      </Sticky>
    </div>
  );
};

export default Header;
