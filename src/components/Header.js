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
          <div style={{ ...style, zIndex: 10 }}>
            <header>
              <a href="/" className="header__a">
                <Logo />
              </a>
              <Hamburger isActive={isActive} setIsActive={setIsActive} />
            </header>
            <Menu isActive={isActive} />
          </div>
        )}
      </Sticky>
    </div>
  );
};

export default Header;
