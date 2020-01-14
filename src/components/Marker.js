import React from 'react';
import PropTypes from 'prop-types';
import { measurements } from '../data/measurements.json';

const Marker = ({ title, data }) => {
  const { pm25 } = measurements.find(
    (measurement) => data.id === measurement.id,
  );

  const chooseColor = () => {
    if (pm25 < 10) return '#44A368';
    if (pm25 < 20) return '#C1E080';
    if (pm25 < 50) return '#C19330';
    if (pm25 < 100) return '#E1625A';
    if (pm25 >= 100) return '#7C1D7A';
    return '#f11';
  };

  return (
    <div>
      <div
        className="marker"
        style={{
          backgroundColor: chooseColor(),
          boxShadow: ` 0px 0px 28px 26px  ${chooseColor()}`,
        }}
        title={title}
      />
      <div className="pulse" />
    </div>
  );
};
// NOTE: marker wywoluje sie przy component update
// TODO: przy mouncie okreslic kolor
Marker.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};
export default Marker;
