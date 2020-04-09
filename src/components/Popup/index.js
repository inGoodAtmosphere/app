import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.module.scss';
import useScroll from '../../hooks/useScroll';
import useWindowDimensions from '../../hooks/useWindowDimensions';

Modal.setAppElement('.content');

const Popup = ({ articleHeight }) => {
  const [isOpen, setIsOpen] = useState(true);
  const scroll = useScroll();
  const { height } = useWindowDimensions();
  const isScrolled = scroll > articleHeight - height / 2;
  return (
    <Modal
      className={`card popup ${
        isScrolled && isOpen ? 'popup--visible' : 'popup--invisible'
      }`}
      isOpen={isOpen}
      contentLabel="Ciekawostka"
      portalClassName="popup__portal"
      overlayClassName="popup__overlay"
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="popup__close"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <p className="popup__header">Czy wiesz, że...</p>
      <p>
        W miastach o dużym zaludnieniu, w których często dochodzi do korków,
        powietrze, które dostaje się do środka samochodu, może być aż 10 razy
        bardziej szkodliwe niż na zewnątrz. Działanie jest podobne jak w
        przypadku zamkniętych pomieszczeń. Brak cyrkulacji powietrza kumuluje w
        jednym miejscu coraz więcej szkodliwych pyłów. Może warto trzymać w
        schowku samochodowym maseczki antysmogowe, szczególnie jeśli w aucie
        znajdują się dzieci?
      </p>
    </Modal>
  );
};

Popup.propTypes = {
  articleHeight: PropTypes.number.isRequired,
};

export default Popup;
