import React, { useContext } from 'react';
import mapContext from '../../contexts/map-context';

const Data = () => {
  const { state } = useContext(mapContext);
  return (
    <div className="data">
      <h2>{state.title}</h2>
      <div>{state.pm25}</div>
      <div>{state.pm10}</div>
    </div>
  );
};

export default Data;
