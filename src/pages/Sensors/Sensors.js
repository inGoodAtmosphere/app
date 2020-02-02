/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CardWithThumbnail from '../../components/CardWithThumbnail/CardWithThumbnail';
import './sensors.scss';

const Sensors = () => (
  <main className="content">
    <h1>Nasze czujniki</h1>
    <CardWithThumbnail
      header="Czujnik do pomiaru pyłów PM2.5 i PM10"
      description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
      thumbnail="https://picsum.photos/90/100"
      env="sensors"
    />
    <div className="card sensors__info">
      <h3 className="sensors__h3">Lorem ipsum</h3>
      <p className="sensors__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis
        architecto aliquam quia, dolorem quidem!
      </p>
    </div>
    <div className="card sensors__ad">
      <h3 className="sensors__h3">Zainteresowany kupnem?</h3>
      <p className="sensors__paragraph">
        <a href="/kontakt" className="sensors__ad__link">
          Kliknij tutaj
        </a>{' '}
        i wypełnij formularz kontaktowy
      </p>
    </div>
  </main>
);

export default Sensors;
