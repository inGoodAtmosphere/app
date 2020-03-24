import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ id }) => {
  return (
    <>
      <h2>{id}</h2>
    </>
  );
};

Notification.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Notification;
