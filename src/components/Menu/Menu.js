import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = ({ isActive }) => (
  <nav className={`menu ${isActive ? 'menu--isActive' : ''}`}>
    <a href="/kampania" className="menu__item" tabIndex={isActive ? 0 : -1}>
      Kampania
    </a>
    <a href="/o-nas" className="menu__item" tabIndex={isActive ? 0 : -1}>
      O nas
    </a>
    <a href="/blog" className="menu__item" tabIndex={isActive ? 0 : -1}>
      Blog
    </a>
    <a href="/encyklopedia" className="menu__item" tabIndex={isActive ? 0 : -1}>
      Encyklopedia
    </a>
    <a href="/czujniki" className="menu__item" tabIndex={isActive ? 0 : -1}>
      Nasze czujniki
    </a>
    <a href="/partnerzy" className="menu__item" tabIndex={isActive ? 0 : -1}>
      Nasi partnerzy
    </a>
  </nav>
);
Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
export default Menu;
