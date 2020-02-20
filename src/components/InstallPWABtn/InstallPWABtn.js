import React, { useState } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import './install-pwa-btn.scss';

const InstallPWABtn = ({ isFooter }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [display, setDisplay] = useState('none');
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
      Zainstaluj aplikację
    </button>
  );
};

InstallPWABtn.defaultProps = {
  isFooter: false,
};
InstallPWABtn.propTypes = {
  isFooter: PropTypes.bool,
};
export default InstallPWABtn;
