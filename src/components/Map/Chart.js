import React, { useState } from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';
import './chart.module.scss';
import Checkbox from './Checkbox';

const Chart = () => {
  const [units, setUnits] = useState({
    pm25: true,
    pm10: true,
    caqi: true,
  });
  console.log(units);
  const data = [
    {
      name: 'Page A',
      PM25: 4000,
      PM10: 2400,
      CAQI: 3000,
    },
    {
      name: 'Page B',
      PM25: 3000,
      PM10: 1398,
      CAQI: 3000,
    },
    {
      name: 'Page C',
      PM25: 2000,
      PM10: 9800,
      CAQI: 3000,
    },
    {
      name: 'Page D',
      PM25: 2780,
      PM10: 3908,
      CAQI: 3000,
    },
    {
      name: 'Page E',
      PM25: 1890,
      PM10: 4800,
      CAQI: 3000,
    },
    {
      name: 'Page F',
      PM25: 2390,
      PM10: 3800,
      CAQI: 3000,
    },
    {
      name: 'Page G',
      PM25: 3490,
      PM10: 4300,
      CAQI: 3000,
    },
  ];

  return (
    <div className="card chart__card">
      <Checkbox unit="pm25" units={units} setUnits={setUnits} />
      <Checkbox unit="pm10" units={units} setUnits={setUnits} />
      <Checkbox unit="caqi" units={units} setUnits={setUnits} />
      <ResponsiveContainer>
        <LineChart data={data} margin={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {units.pm25 && (
            <Line type="monotone" dataKey="PM25" stroke="#82ca9d" />
          )}
          {units.pm10 && (
            <Line type="monotone" dataKey="PM10" stroke="#8884d8" />
          )}
          {units.caqi && <Line type="monotone" dataKey="CAQI" stroke="#1cf" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
