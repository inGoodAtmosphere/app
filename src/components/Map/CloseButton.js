import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './close-button.module.scss';

const CloseButton = ({ switchWindow }) => {
  return (
    <button
      type="button"
      className="marker__info-window__close"
      onClick={() => switchWindow()}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

CloseButton.propTypes = {
  switchWindow: PropTypes.func.isRequired,
};

export default CloseButton;
