import React, { useEffect } from 'react';
import Illustration from './Illustration';
import { logEvent } from '../../../utils/analytics';
import './index.module.scss';

const Bots = () => {
  useEffect(() => {
    logEvent('Form', 'bots');
  }, []);
  return (
    <>
      <div className="form__bots__bg" />
      <div className="form__bots">
        <Illustration />
        <p className="form__bots__text">
          Jeżeli jesteś robotem, niezwłocznie zgłoś błąd oprogramowania w swojej
          fabryce, a jeżeli nie jesteś robotem to skontaktuj się z nami
          bezpośrednio przez maila
          <a
            href="mailto:ingoodaatmosphere@gmail.com"
            className="form__bots__mail"
          >
            ingoodatmosphere@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Bots;
