import React from 'react';
import fetch from 'isomorphic-unfetch';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Users = ({ data, users }) => {
  return <SubPage data={data} users={users} />;
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();
  const users = 'users';
  return { props: { data, users } };
}
Users.propTypes = adminPropTypes;

export default Users;
