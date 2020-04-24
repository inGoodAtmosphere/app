import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import MapContext from '../../utils/map-context';
import styles from './BackToLocationBtn.module.scss';

const BackToLocationBtn = () => {
  const { activeSensor, dispatch } = useContext(MapContext);
  return (
    <button
      type="button"
      className={styles.button}
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
  );
};

export default BackToLocationBtn;
