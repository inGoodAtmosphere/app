import React from 'react';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Users = ({ data }) => {
  return <SubPage data={data} />;
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();
  return { props: { data } };
}
Users.propTypes = adminPropTypes;

export default Users;
