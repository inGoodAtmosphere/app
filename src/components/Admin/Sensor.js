import React from 'react';
import PropTypes from 'prop-types';
import EditBtn from './EditBtn';

const Sensor = ({ data, id }) => {
  return (
    <>
      <h2>{id}</h2>
      <p className="admin__sensor__type">Prototyp</p>
      <p className="admin__sensor__mac">MAC: 32432412</p>
      <p className="admin__sensor__coordinates">{data.lat}</p>
      <p className="admin__sensor__coordinates">{data.lng}</p>
      <EditBtn />
    </>
  );
};

Sensor.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Sensor;
