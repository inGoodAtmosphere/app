import React from 'react';
import fetch from 'isomorphic-unfetch';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Notifications = ({ notifications }) => {
  return <SubPage data={notifications} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/notifications');
  const notifications = await res.json();
  return { props: { notifications } };
}

Notifications.propTypes = adminPropTypes;

export default Notifications;
