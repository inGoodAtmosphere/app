import React, { useState } from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Brush,
  ReferenceLine,
  Legend,
} from 'recharts';
import './index.module.scss';
import Button from './Button';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Chart = () => {
  const width = useWindowWidth();
  const [activeChart, setActiveChart] = useState('pm');
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
      'PM2.5': 4000,
      PM10: 2400,
      PM1: 3000,
      CAQI: 21,
      Temperatura: 12,
      Wilgotność: 65,
    },
    {
      name: 'Wtorek',
      'PM2.5': 3000,
      PM10: 1398,
      PM1: 3000,
      CAQI: 21,
      Temperatura: 12,
      Wilgotność: 65,
    },
    {
      name: 'Środa',
      'PM2.5': 2000,
      PM10: 9800,
      PM1: 3000,
      CAQI: 21,
      Temperatura: 12,
      Wilgotność: 65,
    },
    {
      name: 'Czwartek',
      'PM2.5': 2780,
      PM10: 3908,
      PM1: 3000,
      CAQI: 21,
      Temperatura: 12,
      Wilgotność: 65,
    },
    {
      name: 'Piątek',
      'PM2.5': 1890,
      PM10: 4800,
      PM1: 3000,
      CAQI: 21,
      Temperatura: 12,
      Wilgotność: 65,
    },
    {
      name: 'Sobota',
      'PM2.5': 2390,
      PM10: 3800,
      PM1: 3000,
      CAQI: 21,
      Temperatura: 12,
      Wilgotność: 65,
    },
    {
      name: 'Niedziela',
      'PM2.5': 3490,
      PM10: 4300,
      PM1: 3000,
      CAQI: 21,
      Temperatura: 12,
      Wilgotność: 65,
    },
  ];

  return (
    <div className="card chart__card">
      <div className="chart__buttons">
        <Button
          purpose="pm"
          isActive={activeChart === 'pm'}
          setActiveChart={setActiveChart}
        />
        <Button
          purpose="caqi"
          isActive={activeChart === 'caqi'}
          setActiveChart={setActiveChart}
        />
        <Button
          purpose="temperature"
          isActive={activeChart === 'temperature'}
          setActiveChart={setActiveChart}
        />
      </div>
      <ResponsiveContainer>
        <LineChart data={data} margin={margin}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {
            // TODO: startIndex set to last 7 days
          }
          <Brush
            height={20}
            travellerWidth={7}
            dataKey="name"
            stroke="#0E364F"
          />
          <Legend />
          <ReferenceLine
            y={9000}
            label="100%"
            stroke="red"
            strokeDasharray="3 3"
          />
          {activeChart === 'pm' && (
            <Line
              type="monotone"
              dataKey="PM2.5"
              stroke="#BD2929"
              strokeWidth={3}
              connectNulls
              unit="&#xb5;g/m³"
            />
          )}
          {activeChart === 'pm' && (
            <Line
              type="monotone"
              dataKey="PM10"
              stroke="#2988BD"
              strokeWidth={3}
              connectNulls
              unit="&#xb5;g/m³"
            />
          )}
          {activeChart === 'pm' && (
            <Line
              type="monotone"
              dataKey="PM1"
              stroke="#29BD38"
              strokeWidth={3}
              connectNulls
              unit="&#xb5;g/m³"
            />
          )}
          {activeChart === 'caqi' && (
            <Line
              type="monotone"
              dataKey="CAQI"
              stroke="#2988BD"
              strokeWidth={3}
              connectNulls
            />
          )}
          {activeChart === 'temperature' && (
            <Line
              type="monotone"
              dataKey="Temperatura"
              stroke="#2988BD"
              strokeWidth={3}
              connectNulls
              unit="&#8451;"
            />
          )}
          {activeChart === 'temperature' && (
            <Line
              type="monotone"
              dataKey="Wilgotność"
              stroke="#BD2929"
              strokeWidth={3}
              connectNulls
              unit="%"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
