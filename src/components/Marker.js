import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ color, title, data }) => {
  console.log(data);
  return (
    <div>
      <div
        className="marker"
        style={{ backgroundColor: color }}
        title={title}
      />
      <div className="pulse" />
    </div>
  );
};
// NOTE: marker wywoluje sie przy component update
// TODO: przy mouncie okreslic kolor
Marker.defaultProps = {
  color: '#000',
};
Marker.propTypes = {
  data: PropTypes.shape({
    pm25: PropTypes.number,
    pm10: PropTypes.number,
  }).isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};
export default Marker;
