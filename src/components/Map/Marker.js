import React from 'react';
import PropTypes from 'prop-types';
import setColor from './setColor';
import styles from './Marker.module.scss';

const Marker = ({ aqi }) => {
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
      }}
    />
  );
};
Marker.propTypes = {
  aqi: PropTypes.string.isRequired,
};
export default Marker;
