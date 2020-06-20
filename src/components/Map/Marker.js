import React from 'react';
import PropTypes from 'prop-types';
import setColor from './setColor';
import styles from './Marker.module.scss';

const Marker = ({ aqi, uid }) => {
  const { backgroundColor } = setColor(aqi);
  const shadowColor = setColor(aqi, '60');
  return (
    <button
      type="button"
      disabled={backgroundColor === 'hsl(0, 0, 50%)'}
      aria-label="Znacznik czujnika"
      className={styles.marker}
      tabIndex={-1}
      style={{
        backgroundColor,
        boxShadow: ` 0px 0px ${backgroundColor !== 'hsl(0, 0, 50%)' &&
          '5px 5px'} ${shadowColor.backgroundColor}`,
        borderRadius: uid === 71 ? '0px' : '100%',
        width: uid === 71 ? '1rem' : '0.625rem',
        height: uid === 71 ? '1rem' : '0.625rem',
      }}
    />
  );
};
Marker.propTypes = {
  aqi: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  uid: PropTypes.number.isRequired,
};
export default Marker;
