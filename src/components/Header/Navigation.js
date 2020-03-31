import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={styles.navigation}>
        <a href="/mapa" className={styles.button}>
          Mapa
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </a>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </div>
      <Menu isActive={isActive} />
    </>
  );
};

export default Navigation;
