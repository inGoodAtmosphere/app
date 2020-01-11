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
    className="modal"
  >
    <button type="button" onClick={closeModal}>
      X
    </button>

    <h3>Zarejestruj się, a otrzymasz:</h3>
    <br />
    <p>Możliwość dodawania czujników do ulubionych</p>
    <br />
    <p>Dostęp do codygodniowego newslettera</p>
    <br />
    <p>Lorem ipsum dolor sit amet</p>
    <br />
    <button type="button">Masz już konto zaloguj się</button>

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
