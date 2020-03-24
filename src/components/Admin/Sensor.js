import React from 'react';
import PropTypes from 'prop-types';

const Sensor = ({ id }) => {
  return (
    <>
      <h2>{id}</h2>
    </>
  );
};

Sensor.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Sensor;
