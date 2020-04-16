import React from 'react';
import fetch from 'isomorphic-unfetch';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Notifications = ({ data, notifications }) => {
  return <SubPage data={data} notifications={notifications} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/notifications');
  const data = await res.json();
  const notifications = 'notifications';
  return { props: { data, notifications } };
}

Notifications.propTypes = adminPropTypes;

export default Notifications;
