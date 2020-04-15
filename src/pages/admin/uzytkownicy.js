import React from 'react';
import fetch from 'isomorphic-unfetch';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Users = ({ users }) => {
  return <SubPage data={users} />;
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();
  return { props: { users } };
}
Users.propTypes = adminPropTypes;

export default Users;
