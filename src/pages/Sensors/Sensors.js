/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CardWithThumbnail from '../../components/CardWithThumbnail/CardWithThumbnail';
import './sensors.scss';
import sensor300 from '../../img/sensors/sensor-300.jpg';
import sensor800 from '../../img/sensors/sensor-800.jpg';

const Sensors = () => (
  <main className="content">
    <h1>Nasze mierniki</h1>
    <CardWithThumbnail
      header="Nasze urządzenia"
      description="Nasz zespół jest w trakcie projektowania układu dzięki któremu każdy będzie mógł poprzez naszą stonę lub aplikację zobaczyć jaki jest stan powietrza którym oddychamy."
      thumbnail={[sensor300, sensor800]}
      env="sensors"
    />
    <div className="card sensors__info">
      <h3 className="sensors__h3">Kiedy będzie dostępny nasz miernik?</h3>
      <p className="sensors__paragraph">
        Już za niedługo nasz miernik będzie dostępny dla każdego i dane z
        naszych urządzeń będą dostępne dla każdego na naszej stronie
        internetowej oraz aplikacji.
      </p>
    </div>
    <div className="card sensors__ad">
      <h3 className="sensors__h3">Zainteresowany miernikiem?</h3>
      <p className="sensors__paragraph">
        <a href="/kontakt" className="sensors__ad__link">
          Kliknij tutaj
        </a>{' '}
        i skontaktuj się z nami
      </p>
    </div>
  </main>
);

export default Sensors;
