/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NoData from './NoData';
import mapContext from '../../utils/map-context';
import styles from './Pm.module.scss';

const Caqi = ({ purpose }) => {
  const {
    activeSensor: {
      data: { iaqi },
    },
  } = useContext(mapContext);
  return (
    <a className={styles.pm} href={`/encyklopedia#${purpose}`}>
      <h3 className={styles.title}>
        {purpose === 'pm25' ? 'PM2.5' : purpose.toUpperCase()}
      </h3>
      {iaqi[purpose] ? (
        <>
          <h2 className={styles.measurement}>
            {iaqi[purpose] && iaqi[purpose].v} µg/m³
          </h2>
          <h2 className={`${styles.percent} ${styles.measurement}`}>
            {Math.round(
              (iaqi[purpose] &&
                iaqi[purpose].v / (purpose === 'pm25' ? 25 : 50)) * 100,
            )}
            %
          </h2>
        </>
      ) : (
        <>
          <NoData />
          <h2 className={`${styles.noData} ${styles.measurement}`}>
            Brak danych
          </h2>
        </>
      )}
    </a>
  );
};

Caqi.propTypes = { purpose: PropTypes.string.isRequired };

export default Caqi;
