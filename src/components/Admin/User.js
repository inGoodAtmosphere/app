import React from 'react';
import PropTypes from 'prop-types';

const User = ({ id }) => {
  return (
    <>
      <h2>{id}</h2>
    </>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
};
export default User;
