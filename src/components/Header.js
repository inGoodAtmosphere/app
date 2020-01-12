import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ Hamburger }) => (
  <header>
    <Link to="/">
      <img src="https://picsum.photos/225/50" alt="Logo" />
    </Link>
    {Hamburger}
  </header>
);
Header.propTypes = {
  Hamburger: PropTypes.element.isRequired,
};

export default Header;
