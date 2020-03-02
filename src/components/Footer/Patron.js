import React from 'react';
import partner1 from '../../../public/img/MSK-logo.png';

const Patron = () => {
  return (
    <a
      href="https://www.msk.earth/"
      target="_blank"
      rel="noreferrer noopener"
      className="footer__patrons__item"
    >
      <img src={partner1} alt="MSK" className="footer__patrons__item__image" />
    </a>
  );
};

export default Patron;
