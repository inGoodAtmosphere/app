import React from 'react';
import Patron from './Patron';
import './patrons.module.scss';

const Patrons = () => {
  return (
    <>
      <div className="footer__patrons">
        <div className="footer__patron">
          <h3>Patronat honorowy: </h3>
          <Patron
            name="Gliwice"
            link="https://gliwice.eu/"
            img="/img/gliwice.png"
          />
        </div>
        <div className="footer__patron">
          <h3>Patron medialny: </h3>
          <Patron
            name="TVP"
            link="https://katowice.tvp.pl/"
            img="/img/tvp.png"
          />
        </div>
        <div className="footer__patron">
          <h3>Patroni: </h3>
          <Patron
            name="Młodzieżowy Strajk Klimatyczny"
            link="https://www.msk.earth/"
            img="/img/msk.png"
          />
        </div>
      </div>
    </>
  );
};

export default Patrons;
