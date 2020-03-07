import React from 'react';
import Patron from './Patron';
import { patrons } from '../../../public/data/patrons.json';
import './patrons.module.scss';

const Patrons = () => {
  return (
    <>
      <div className="footer__headers">
        <h3>Nasi patroni: </h3>
        <h3>Patronat honorowy: </h3>
      </div>
      <div className="footer__patrons">
        {patrons.map(({ name, link, img }) => (
          <Patron key={name} name={name} link={link} img={img} />
        ))}
      </div>
    </>
  );
};

export default Patrons;
