import React, { useState } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import './install-pwa-btn.scss';

const InstallPWABtn = ({ isFooter, display, setDisplay }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setDisplay('block');
  });
  return (
    <button
      className={`${isFooter ? 'footer__pwa__btn' : 'header__pwa__btn'}`}
      type="button"
      style={{ display }}
      onClick={() => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            ReactGA.event({
              category: 'PWA',
              action: 'Install',
            });
          } else {
            ReactGA.event({
              category: 'PWA',
              action: 'Dismiss',
            });
          }
          setDeferredPrompt(null);
        });
      }}
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
