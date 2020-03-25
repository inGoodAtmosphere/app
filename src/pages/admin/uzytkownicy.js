import React from 'react';

const Users = ({ users }) => {
  return users.map((user) => (
    <div className="card" key={user.id}>
      {user.id}
    </div>
  ));
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();
  return { props: { users } };
}
export default Users;
