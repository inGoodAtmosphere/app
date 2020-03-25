import React from 'react';

const Sensors = ({ sensors }) => {
  return sensors.map((sensor) => (
    <div className="card" key={sensor.id}>
      {sensor.id}
    </div>
  ));
};
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/locations');
  const sensors = await res.json();
  return { props: { sensors } };
}
export default Sensors;
