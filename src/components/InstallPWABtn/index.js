import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import { logEvent } from '../../utils/analytics';

const InstallPWABtn = ({ isFooter, display, setDisplay }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setDisplay('block');
  });

  const handleClick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        logEvent('PWA', 'Install');
      } else {
        logEvent('PWA', 'Dismiss');
      }
      setDeferredPrompt(null);
    });
  };
  return (
    <button
      className={`${isFooter ? 'footer__pwa__btn' : 'header__pwa__btn'}`}
      type="button"
      style={{ display }}
      onClick={handleClick}
    >
      {isFooter ? 'Aplikacja' : 'Zainstaluj aplikację'}
    </button>
  );
};

InstallPWABtn.defaultProps = {
  isFooter: false,
};
InstallPWABtn.propTypes = {
  isFooter: PropTypes.bool,
  display: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired,
};
export default InstallPWABtn;
