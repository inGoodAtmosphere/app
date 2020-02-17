import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const Menu = ({ isActive }) => {
  const width = useWindowWidth();
  return (
    <nav className={`menu ${isActive ? 'menu--isActive' : ''}`}>
      <a
        href="/kampania"
        className="menu__item"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        Kampania
      </a>
      <a
        href="/o-nas"
        className="menu__item menu__item__about-us"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        O nas
      </a>
      <a
        href="/encyklopedia"
        className="menu__item"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        Encyklopedia
      </a>
      <a
        href="/czujniki"
        className="menu__item"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        Nasze czujniki
      </a>
    </nav>
  );
};
Menu.defaultProps = {
  isActive: false,
};
Menu.propTypes = {
  isActive: PropTypes.bool,
};
export default Menu;
