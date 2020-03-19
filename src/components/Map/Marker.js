import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import mapContext from '../../utils/map-context';
import useColor from '../../hooks/useColor';
import './marker.module.scss';

const Marker = ({ data: { data, error } }) => {
  const { dispatch } = useContext(mapContext);
  const color = error ? '#999999' : useColor(data);
  const handleClick = async () => {
    if (!error) {
      const sensorMeasurementRes = await fetch(
        `/api/measurements/${data.deviceId}`,
      );
      const sensorMeasurementJson = await sensorMeasurementRes.json();

      dispatch({
        type: 'SET_ACTIVE_SENSOR',
        current: data,
        avg: sensorMeasurementJson,
      });
      localStorage.setItem('activeSensor', JSON.stringify(data.deviceId));
    }
  };
  return (
    <button
      type="button"
      aria-label="Znacznik czujnika"
      onClick={handleClick}
      className="marker"
      style={{
        backgroundColor: color,
        boxShadow: ` 0px 0px ${color !== '#999999' &&
          '1.5rem 1.5rem'} ${color}`,
      }}
    />
  );
};
Marker.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number,
      deviceId: PropTypes.number,
      humidity: PropTypes.number,
      temperature: PropTypes.number,
      pm1: PropTypes.number,
      'pm2.5': PropTypes.number,
      pm10: PropTypes.number,
      measurementDate: PropTypes.string,
      measurementTime: PropTypes.string,
    }),
    error: PropTypes.string,
  }).isRequired,
};
export default Marker;
