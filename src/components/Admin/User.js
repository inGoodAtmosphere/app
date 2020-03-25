import React from 'react';
import PropTypes from 'prop-types';
import EditBtn from './EditBtn';

const User = ({ id }) => {
  return (
    <>
      <h2>Gall Anonim</h2>
      <p>{id}</p>
      <p>rola</p>
      <EditBtn />
    </>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
};
export default User;
