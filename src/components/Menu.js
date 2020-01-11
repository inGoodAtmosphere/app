import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterModal from './RegisterModal';

const Menu = ({ isActive }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <nav className={`menu ${isActive && 'menu--isActive'}`}>
      <a href="/mapa" className="menu__item">
        Mapa
      </a>
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
      <button
        type="button"
        onClick={openModal}
        className="menu__item menu__login"
      >
        Zaloguj się
      </button>

      <button
        type="button"
        onClick={openModal}
        className="menu__item menu__register"
      >
        Zarejsetruj się
      </button>
      <RegisterModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </nav>
  );
};
Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
export default Menu;
