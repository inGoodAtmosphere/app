import React, { useState } from 'react';
import Modal from 'react-modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.module.scss';
import useScroll from '../../hooks/useScroll';
import useWindowDimensions from '../../hooks/useWindowDimensions';

Modal.setAppElement('.content');

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const scroll = useScroll();
  const { height } = useWindowDimensions();
  return (
    <Modal
      className={`card popup ${
        scroll > height / 4 && scroll < height
          ? 'popup--visible'
          : 'popup--invisible'
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        voluptatem cumque inventore.
      </p>
    </Modal>
  );
};

export default Popup;
