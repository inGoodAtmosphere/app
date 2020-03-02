import React from 'react';

const Content = () => {
  return (
    <>
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
    </>
  );
};

export default Content;
