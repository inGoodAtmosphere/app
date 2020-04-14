import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.module.scss';
import useScroll from '../../hooks/useScroll';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useFetch from '../../hooks/useFetch';

Modal.setAppElement('#content');

const Popup = ({ articleHeight }) => {
  const [isOpen, setIsOpen] = useState(true);
  const scroll = useScroll();
  const { height } = useWindowDimensions();
  const isScrolled = scroll > articleHeight - height / 2;
  const { data, isLoaded, error } = useFetch('/api/interestingFact');
  return (
    <Modal
      className={`card popup ${
        isScrolled && isOpen && !error && !isLoaded
          ? 'popup--visible'
          : 'popup--invisible'
      }`}
      isOpen={isOpen && !error && !isLoaded}
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
      {!isLoaded && <p>{data.content}</p>}
    </Modal>
  );
};

Popup.propTypes = {
  articleHeight: PropTypes.number.isRequired,
};

export default Popup;
