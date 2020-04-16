import React from 'react';
import fetch from 'isomorphic-unfetch';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Sensors = ({ data, sensors }) => {
  return <SubPage data={data} sensors={sensors} />;
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/locations');
  const data = await res.json();
  const sensors = 'sensors';
  return { props: { data, sensors } };
}

Sensors.propTypes = adminPropTypes;

export default Sensors;
