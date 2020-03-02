import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import './links.module.scss';

const InstallPWABtn = dynamic(() => import('../InstallPWABtn/InstallPWABtn'), {
  ssr: false,
});

const Links = () => {
  const [display, setDisplay] = useState('none');
  return (
    <div className="footer__links">
      <div className="footer__links__item">
        <a href="/kontakt">Kontakt</a>
      </div>
      <div className="footer__links__item">
        <a href="/polityka-prywatnosci">Polityka prywatności</a>
      </div>
      <div
        className={`footer__links__item ${display === 'none' &&
          'footer__links__item--hidden'}`}
      >
        <InstallPWABtn isFooter setDisplay={setDisplay} display={display} />
      </div>
    </div>
  );
};

export default Links;
