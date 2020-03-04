import React from 'react';
import './ad.module.scss';

const Ad = () => {
  // prettier-ignore
  return (
    <div className="card sensors__ad">
      <h2 className="sensors__h2">Zainteresowany miernikiem?</h2>
      <p className="sensors__paragraph">
        <a href="/kontakt" className="sensors__ad__link">
          Kliknij tutaj
        </a>
        {' '}
        i skontaktuj się z nami
      </p>
    </div>
  );
};

export default Ad;
