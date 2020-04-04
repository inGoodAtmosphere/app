import React from 'react';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Sensors = ({ sensors }) => {
  return <SubPage data={sensors} />;
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/locations');
  const sensors = await res.json();
  return { props: { sensors } };
}

Sensors.propTypes = adminPropTypes;

export default Sensors;
