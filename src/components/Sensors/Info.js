import React from 'react';
import './info.module.scss';

const Info = () => {
  return (
    <div className="card sensors__info">
      <h2 className="sensors__h2">Kiedy będzie dostępny nasz miernik?</h2>
      <p className="sensors__paragraph">
        Już za niedługo nasz miernik będzie dostępny dla każdego i dane z
        naszych urządzeń będą dostępne dla każdego na naszej stronie
        internetowej oraz aplikacji.
      </p>
    </div>
  );
};

export default Info;
