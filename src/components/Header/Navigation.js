import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu';
import './navigation.module.scss';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="header__navigation">
        <a href="/mapa" className="header__navigation__btn">
          Mapa
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </a>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </div>
      <Menu isActive={isActive} />
    </>
  );
};

export default Navigation;
