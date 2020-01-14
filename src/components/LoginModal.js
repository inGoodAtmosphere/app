import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');
const LoginModal = ({ modalIsOpen, closeModal }) => (
  <Modal
    isOpen={modalIsOpen}
    contentLabel="Zaloguj się"
    onRequestClose={closeModal}
    closeTimeoutMS={100}
    className="modal"
  >
    <button type="button" onClick={closeModal}>
      X
    </button>

    <button type="button">FB</button>
    <button type="button">Google</button>
    <p>lub</p>
    <form action="">
      <input type="text" placeholder="Adres e-mail" />
      <input type="password" placeholder="Hasło" />
      <button type="submit">Zaloguj się</button>
    </form>
  </Modal>
);
LoginModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default LoginModal;
