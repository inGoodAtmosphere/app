import React from 'react';
import Illustration from './Illustration';
import './index.module.scss';

const Error = () => {
  return (
    <main className="content not-found__content">
      <Illustration />
      <p className="not-found__text">Chyba się zgubiłeś</p>
      <a className="not-found__link" href="/">
        Strona Główna
      </a>
    </main>
  );
};

export default Error;
