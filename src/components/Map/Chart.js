import React, { useState } from 'react';
import {
  LineChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Brush,
  ReferenceLine,
} from 'recharts';
import './chart.module.scss';
import Checkbox from './Checkbox';
import useWindowWidth from '../../hooks/useWindowWidth';

const Chart = () => {
  const width = useWindowWidth();
  const [units, setUnits] = useState({
    pm25: true,
    pm10: true,
    caqi: true,
  });
  const setMargin = () => {
    if (width < 1024) return { top: 0, right: 0, bottom: 0, left: -5 };
    if (width < 2560) return { top: 0, right: 15, bottom: 0, left: 15 };
    if (width < 3200) return { top: 0, right: 50, bottom: 0, left: 50 };
    return { top: 0, right: 80, bottom: 0, left: 80 };
  };
  const margin = setMargin();
  const data = [
    {
      name: 'Poniedziałek',
      PM25: 4000,
      PM10: 2400,
      CAQI: 3000,
    },
    {
      name: 'Wtorek',
      PM25: 3000,
      PM10: 1398,
      CAQI: 3000,
    },
    {
      name: 'Środa',
      PM25: 2000,
      PM10: 9800,
      CAQI: 3000,
    },
    {
      name: 'Czwartek',
      PM25: 2780,
      PM10: 3908,
      CAQI: 3000,
    },
    {
      name: 'Piątek',
      PM25: 1890,
      PM10: 4800,
      CAQI: 3000,
    },
    {
      name: 'Sobota',
      PM25: 2390,
      PM10: 3800,
      CAQI: 3000,
    },
    {
      name: 'Niedziela',
      PM25: 3490,
      PM10: 4300,
      CAQI: 3000,
    },
  ];

  return (
    <div className="card chart__card">
      <div className="chart__checkboxes">
        <Checkbox unit="pm25" units={units} setUnits={setUnits} />
        <Checkbox unit="pm10" units={units} setUnits={setUnits} />
        <Checkbox unit="caqi" units={units} setUnits={setUnits} />
      </div>
      <ResponsiveContainer>
        <LineChart data={data} margin={margin}>
          <Area strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {
            // TODO: startIndex set to last 7 days
          }
          <Brush height={20} travellerWidth={7} />
          <ReferenceLine
            y={9000}
            label="100%"
            stroke="red"
            strokeDasharray="3 3"
          />
          {units.pm25 && (
            <Line
              type="monotone"
              dataKey="PM25"
              stroke="#29bd38"
              strokeWidth={3}
              connectNulls
              unit="&#xb5;g/m³"
            />
          )}
          {units.pm10 && (
            <Line
              type="monotone"
              dataKey="PM10"
              stroke="#bd2929"
              strokeWidth={3}
              connectNulls
              unit="&#xb5;g/m³"
            />
          )}
          {units.caqi && (
            <Line
              type="monotone"
              dataKey="CAQI"
              stroke="#2988bd"
              strokeWidth={3}
              connectNulls
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
