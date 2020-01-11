import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ Hamburger }) => (
  <header>
    <img src="https://picsum.photos/225/50" alt="Logo" />
    {Hamburger}
  </header>
);
Header.propTypes = {
  Hamburger: PropTypes.element.isRequired,
};

export default Header;
