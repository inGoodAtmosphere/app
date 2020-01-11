import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from './Hamburger';

const Header = ({ isActive, setIsActive }) => (
  <header>
    <img src="https://picsum.photos/225/50" alt="Logo" />
    <Hamburger isActive={isActive} setIsActive={setIsActive} />
  </header>
);
// Header.propTypes = {
//   isActive: PropTypes.bool.isRequired,
//   setIsActive: PropTypes.func,
// };

export default Header;
