import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ isActive }) => (
  <nav className={`menu ${isActive ? 'menu--isActive' : ''}`}>
    <a href="/kampania" className="menu__item">
      Kampania
    </a>
    <a href="/o-nas" className="menu__item">
      O nas
    </a>
    <a href="/blog" className="menu__item">
      Blog
    </a>
    <a href="/czujniki" className="menu__item">
      Nasze czujniki
    </a>
    <a href="partnerzy" className="menu__item">
      Nasi partnerzy
    </a>
  </nav>
);
Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
export default Menu;
