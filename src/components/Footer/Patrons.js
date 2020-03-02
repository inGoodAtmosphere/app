import React from 'react';
import './patrons.module.scss';
import Patron from './Patron';

const Patrons = () => {
  return (
    <>
      <h2 className="footer__h2">Nasi patroni: </h2>
      <div className="footer__patrons">
        <Patron />
      </div>
    </>
  );
};

export default Patrons;
