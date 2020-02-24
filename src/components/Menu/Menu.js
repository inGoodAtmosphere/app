import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menu.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const Menu = ({ isActive }) => {
  const width = useWindowWidth();
  return (
    <nav className={`menu ${isActive ? 'menu--isActive' : ''}`}>
      <Link
        to="/kampania"
        className="menu__item"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        Kampania
      </Link>
      <Link
        to="/o-nas"
        className="menu__item menu__item__about-us"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        O nas
      </Link>
      <Link
        to="/encyklopedia"
        className="menu__item"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        Encyklopedia
      </Link>
      <Link
        to="/mierniki"
        className="menu__item"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        Nasze mierniki
      </Link>
      <Link
        to="/kontakt"
        className="menu__item"
        tabIndex={isActive || width > 1024 ? 0 : -1}
      >
        Kontakt
      </Link>
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
