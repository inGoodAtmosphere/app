import React from 'react';
import NotFoundSvg from '../../img/not-found';
import './not-found.scss';

const NotFoundPage = () => (
  <main className="content not-found__content">
    <NotFoundSvg />
    <h1 className="not-found__text">Chyba się zgubiłeś</h1>
    <a className="not-found__link" href="/">
      Strona Główna
    </a>
  </main>
);

export default NotFoundPage;
