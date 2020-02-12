import React from 'react';
import { useCookies } from 'react-cookie';
import './cookies-banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CookiesBanner = () => {
  const [cookies, setCookie] = useCookies(['isOpenBanner']);
  return (
    <div
      className={
        cookies.isOpenBanner === 'false'
          ? 'cookies-banner__wrapper--hidden'
          : 'cookies-banner__wrapper'
      }
    >
      <button
        type="button"
        aria-label="Zaakceptuj cookies"
        className="cookies-banner__btn"
        // prettier-ignore
        onClick={() => setCookie('isOpenBanner', 'false', {
          path: '/',
          expires: new Date(2021, 1, 1),
        })}
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

export default CookiesBanner;
