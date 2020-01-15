import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Menu from './Menu';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header>
        <a href="/">
          <img src="https://picsum.photos/225/50" alt="Logo" />
        </a>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </header>
      <Menu isActive={isActive} />
    </>
  );
};

export default Header;
