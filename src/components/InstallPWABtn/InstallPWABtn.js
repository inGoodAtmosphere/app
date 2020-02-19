import React, { useState } from 'react';
import ReactGA from 'react-ga';
import './install-pwa-btn.scss';

const InstallPWABtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [display, setDisplay] = useState('block');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setDisplay('block');
  });
  return (
    <button
      className="header__pwa__btn"
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

export default InstallPWABtn;
