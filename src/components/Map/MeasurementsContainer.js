import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import Caqi from './Caqi';
import MapContext from '../../utils/map-context';
import Measurements from './Measurements';
import { getMainData, getSecondaryData } from '../../utils/groupMapData';
import styles from './MeasurementsContainer.module.scss';

const MeasurementsContainer = () => {
  const {
    activeSensor: {
      data: { city, iaqi },
    },
    dispatch,
    activeSensor,
  } = useContext(MapContext);
  const convertTitle = (name) => {
    const index = name.lastIndexOf(',');
    const title = name.slice(0, index);
    if (title === 'K-Koźle') return 'Kędzierzyn Koźle';
    if (
      title ===
      'Moskovsky Prospekt,244, Kaliningrad, Russia (Московский проспект'
    )
      return 'Moskovsky Prospekt,244, Kaliningrad';
    return title;
  };
  const convertedTitle = convertTitle(city.name);
  const mainData = getMainData(iaqi);
  const secondaryData = getSecondaryData(iaqi);
  return (
    <>
      <h1 className={styles.city}>
        {convertedTitle}
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: 'SET_ACTIVE_SENSOR',
              activeSensor: {
                ...activeSensor,
                data: { ...activeSensor.data, change: true },
              },
            });
          }}
        >
          <FontAwesomeIcon icon={faLocationArrow} />
        </button>
      </h1>
      <Caqi />
      <Measurements priority="main" data={mainData} />
      <Measurements priority="secondary" data={secondaryData} />
    </>
  );
};

export default MeasurementsContainer;
