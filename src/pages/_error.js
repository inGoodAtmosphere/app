import React from 'react';
import NotFoundSvg from '../../public/img/not-found';
import './not-found.module.scss';

const NotFound = () => {
  return (
    <main className="content not-found__content">
      <NotFoundSvg />
      <h1 className="not-found__text">Chyba się zgubiłeś</h1>
      <a className="not-found__link" href="/">
        Strona Główna
      </a>
    </main>
  );
};

export default NotFound;
