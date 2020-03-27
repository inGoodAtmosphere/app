import React from 'react';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Sensors = ({ data }) => {
  return <SubPage data={data} />;
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/locations');
  const data = await res.json();
  return { props: { data } };
}

Sensors.propTypes = adminPropTypes;

export default Sensors;
