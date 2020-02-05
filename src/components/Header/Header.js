import React, { useState } from 'react';
import { Sticky } from 'react-sticky';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';
import Logo from '../../img/logo/logo_inline';
import './header.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const width = useWindowWidth();
  return (
    <div>
      <Sticky>
        {({ style }) => (
          <div style={{ ...style, zIndex: 10 }}>
            <header>
              <a href="/" className="header__a" aria-label="Strona główna">
                <Logo />
              </a>
              {width < 1024 ? (
                <>
                  <Hamburger isActive={isActive} setIsActive={setIsActive} />
                  <Menu isActive={isActive} />
                </>
              ) : (
                <Menu />
              )}
            </header>
          </div>
        )}
      </Sticky>
    </div>
  );
};

export default Header;
