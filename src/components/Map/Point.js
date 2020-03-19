import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import mapContext from '../../utils/map-context';
import Context from '../../utils/Context';
import useColor from '../../hooks/useColor';
import './point.module.scss';

const Point = ({ switchWindow }) => {
  const { dispatch } = useContext(mapContext);
  const { data, error } = useContext(Context);
  const color = error ? '#999999' : useColor(data);
  const handleClick = async () => {
    switchWindow();
    if (!error) {
      const sensorMeasurementRes = await fetch(
        `/api/measurements/${data.device_id}`,
      );
      const sensorMeasurementJson = await sensorMeasurementRes.json();

      dispatch({
        type: 'SET_ACTIVE_SENSOR',
        current: data,
        avg: sensorMeasurementJson,
      });
      localStorage.setItem('activeSensor', JSON.stringify(data.device_id));
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
Point.propTypes = {
  switchWindow: PropTypes.func.isRequired,
};
export default Point;
