import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu';
import styles from './Navigation.module.scss';

const InstallPWABtn = dynamic(() => import('../InstallPWABtn'), {
  ssr: false,
});

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const [display, setDisplay] = useState('none');
  return (
    <>
      <div className={styles.navigation}>
        <InstallPWABtn display={display} setDisplay={setDisplay} />
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </div>
      <Menu isActive={isActive} />
    </>
  );
};

export default Navigation;
