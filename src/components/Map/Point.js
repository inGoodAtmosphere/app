import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import mapContext from '../../utils/map-context';
import Context from '../../utils/Context';
import useColor from '../../hooks/useColor';

const Point = ({ switchWindow }) => {
  const { dispatch } = useContext(mapContext);
  const { data } = useContext(Context);
  const color = useColor(data);
  const handleClick = () => {
    switchWindow();
    dispatch({ type: 'SET_ACTIVE_SENSOR', data });
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
      title={data.title}
    />
  );
};
Point.propTypes = {
  switchWindow: PropTypes.func.isRequired,
};
export default Point;
