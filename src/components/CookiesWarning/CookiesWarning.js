import React, { useState } from 'react';
import './cookies-warning.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CookiesWarning = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={
        isOpen ? 'cookies-warning__wrapper' : 'cookies-warning__wrapper--hidden'
      }
    >
      <button
        type="button"
        className="cookies-warning__btn"
        onClick={() => setIsOpen(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <p className="cookies-warning__text">
        W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies.
        W każdym momencie możesz dokonać zmiany ustawień przeglądarki.
      </p>

      <a
        href="/polityka-prywatnosci"
        aria-label="Polityka prywatności"
        className="cookies-warning__link"
      >
        Zobacz politykę prywatności
      </a>
    </div>
  );
};

export default CookiesWarning;
