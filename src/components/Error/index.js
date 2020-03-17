import React from 'react';
import Illustration from './Illustration';
import './index.module.scss';

const Error = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="content error__content">
      <Illustration />
      <p className="error__text">
        Ups!
        <br />
        Coś poszło nie tak
      </p>
      <button type="button" className="error__btn" onClick={refreshPage}>
        Spróbuj ponownie
      </button>
    </div>
  );
};

export default Error;
