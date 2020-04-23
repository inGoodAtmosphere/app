import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import mapContext from '../../utils/map-context';
import setColor from './setColor';
import styles from './Marker.module.scss';

const Marker = ({ lat, lng, aqi }) => {
  const { dispatch } = useContext(mapContext);
  const { backgroundColor } = setColor(aqi);
  const shadowColor = setColor(aqi, '60');
  const handleClick = async () => {
    const coordinates = { lat, lng };
    const res = await fetch(
      `https://api.waqi.info/feed/geo:${coordinates.lat};${coordinates.lng}/?token=${process.env.WAQI_TOKEN}`,
    );
    const json = await res.json();
    dispatch({
      type: 'SET_ACTIVE_SENSOR',
      activeSensor: json,
    });
    localStorage.setItem('activeSensor', JSON.stringify(coordinates));
  };

  return (
    <button
      type="button"
      disabled={backgroundColor === 'hsl(0, 0, 50%)'}
      aria-label="Znacznik czujnika"
      onClick={handleClick}
      className={styles.marker}
      tabIndex={-1}
      style={{
        backgroundColor,
        boxShadow: ` 0px 0px ${backgroundColor !== 'hsl(0, 0, 50%)' &&
          '5px 5px'} ${shadowColor.backgroundColor}`,
      }}
    />
  );
};
Marker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  aqi: PropTypes.string.isRequired,
};
export default Marker;
