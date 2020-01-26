import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const Menu = ({ isActive }) => {
  const [registerModalIsOpen, setRegisterIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginIsOpen] = useState(false);
  const closeLoginModal = () => {
    setLoginIsOpen(false);
  };
  const openLoginModal = () => {
    setLoginIsOpen(true);
  };
  const closeRegisterModal = () => {
    setRegisterIsOpen(false);
  };
  const openRegisterModal = () => {
    setRegisterIsOpen(true);
  };
  return (
    <nav className={`menu ${isActive ? 'menu--isActive' : ''}`}>
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
      <div className="log-reg">
        <button
          type="button"
          onClick={openLoginModal}
          className="menu__item menu__login"
        >
          Zaloguj się
        </button>
        <LoginModal
          closeModal={closeLoginModal}
          modalIsOpen={loginModalIsOpen}
        />
        <button
          type="button"
          onClick={openRegisterModal}
          className="menu__item menu__register"
        >
          Zarejestruj się
        </button>
      </div>
      <RegisterModal
        closeModal={closeRegisterModal}
        modalIsOpen={registerModalIsOpen}
      />
    </nav>
  );
};
Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
export default Menu;
