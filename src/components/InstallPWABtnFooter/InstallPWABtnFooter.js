import React from 'react';
import InstallPWABtn from '../InstallPWABtn/InstallPWABtn';

const inFooter = (WrappedComponent) => () => (
  // !BUG: have to conditional render div when beforeinstallprompt is active
  <div className="footer__links__item">
    <WrappedComponent isFooter />
  </div>
);

export default inFooter(InstallPWABtn);
