/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Sensors = () => (
  <>
    <h1>Nasze czujniki</h1>
    <div className="sensor">
      <img src="https://picsum.photos/105/100" alt="Czujnik" />
      <div className="sensor__label">
        <p>
          Enim consectetur id occaecat minim magna pariatur esse qui non veniam
          consequat elit aute.
        </p>
      </div>
    </div>
    <div className="info">
      <h3 className="info__header">Lorem ipsum</h3>
      <p className="info__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis
        architecto aliquam quia, dolorem quidem!
      </p>
    </div>
    <div className="ad">
      <h3 className="ad__header">Zainteresowany kupnem?</h3>
      <p className="ad__paragraph">
        <a href="/kontakt" className="ad__link">
          Kliknij tutaj
        </a>{' '}
        i wypełnij formularz kontaktowy
      </p>
    </div>
  </>
);

export default Sensors;
