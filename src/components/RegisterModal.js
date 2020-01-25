import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');
const RegisterModal = ({ modalIsOpen, closeModal }) => (
  <Modal
    isOpen={modalIsOpen}
    contentLabel="Zarejsetruj się"
    onRequestClose={closeModal}
    closeTimeoutMS={100}
    className="ReactModal__Overlay"
  >
    <button type="button" onClick={closeModal} className="close-button">
      X
    </button>

    <h3>Zarejestruj się, a otrzymasz:</h3>
    <ul>
      <li>Możliwość dodawania czujników do ulubionych</li>
      <li>Dostęp do codygodniowego newslettera</li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>
    <a href="/login" className="modal__text">
      Masz już konto? Zaloguj się
    </a>

    <button type="button">FB</button>
    <button type="button">Google</button>
    <p>lub</p>
    <form action="">
      <input type="text" placeholder="Adres e-mail" />
      <input type="text" placeholder="Login" />
      <input type="password" placeholder="Hasło" />
      <input type="password" placeholder="Powtórz hasło" />
      <input type="text" placeholder="Imię (opcjonalnie)" />
      <input type="text" placeholder="Nazwisko (opcjonalnie)" />
      <button type="submit">Zarejestruj się</button>
    </form>
  </Modal>
);
RegisterModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default RegisterModal;
