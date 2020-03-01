import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './cookies-banner.scss';

const CookiesBanner = ({ isBannerOpen }) => {
  const [display, setDisplay] = useState(isBannerOpen);
  return (
    <div
      className={
        display === 'false'
          ? 'cookies-banner__wrapper--hidden'
          : 'cookies-banner__wrapper'
      }
    >
      <button
        type="button"
        aria-label="Zaakceptuj cookies"
        className="cookies-banner__btn"
        onClick={() => {
          document.cookie = `isBannerOpen=false; path=/; expires=${new Date(
            2021,
            1,
            1,
          )}`;
          setDisplay('false');
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <p className="cookies-banner__text">
        W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies.
        W każdym momencie możesz dokonać zmiany ustawień przeglądarki.
      </p>

      <a
        href="/polityka-prywatnosci"
        aria-label="Polityka prywatności"
        className="cookies-banner__link"
      >
        Zobacz politykę prywatności
      </a>
    </div>
  );
};
CookiesBanner.propTypes = {
  isBannerOpen: PropTypes.string.isRequired,
};
export default CookiesBanner;
