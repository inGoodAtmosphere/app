import React, { useContext, useState } from 'react';
import mapContext from '../contexts/map-context';
import CanvasJSReact from '../charts/canvasjs.react';
import { options } from '../data/chart.json';
const { CanvasJSChart, CanvasJS } = CanvasJSReact;
const MapData = () => {
  const [value, setValue] = useState({});
  console.log(options.data.dataPoints);
  const { state } = useContext(mapContext);
  console.log(state[0]);
  return (
    <div className="data">
      <h2>{state[0].title}</h2>
      <div>{state[0].pm25}</div>
      <div>{state[0].pm10}</div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default MapData;
