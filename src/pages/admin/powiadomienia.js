import React from 'react';

const Notifications = ({ notifications }) => {
  return notifications.map((notification) => (
    <div className="card" key={notification.id}>
      {notification.id}
    </div>
  ));
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/notifications');
  const notifications = await res.json();
  return { props: { notifications } };
}

export default Notifications;
