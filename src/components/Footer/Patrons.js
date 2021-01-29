import React from 'react';
import Patron from './Patron';
import styles from './Patrons.module.scss';

const Patrons = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.patron}>
          <h3>Patron honorowy: </h3>
          <Patron
            name="Gliwice"
            link="https://gliwice.eu/"
            img="/img/gliwice.png"
          />
        </div>
        
        <div className={styles.patron}>
          <h3>Patroni: </h3>
          <Patron
            name="Młodzieżowy Strajk Klimatyczny"
            link="https://www.msk.earth/"
            img="/img/msk.png"
          />
        </div>
        <div className={styles.break} />
        <div className={styles.patron}>
          <h3>Partnerzy: </h3>
          <Patron
            name="Botland"
            link="https://botland.com.pl/pl/"
            img="/img/botland.png"
          />
        </div>
      </div>
    </>
  );
};

export default Patrons;
