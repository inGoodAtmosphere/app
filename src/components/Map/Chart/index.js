import React, { useState, useContext } from 'react';
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
import moment from 'moment';
import 'moment/locale/pl';
import MapContext from '../../../utils/map-context';
import './index.module.scss';
import Button from './Button';
import useWindowSize from '../../../hooks/useWindowSize';
import countCaqi from '../countCaqi';

const Chart = () => {
  const {
    activeSensor: { avg },
  } = useContext(MapContext);
  const { width, height } = useWindowSize();
  const [activeChart, setActiveChart] = useState('pm');
  const formatDate = (day) => moment(day).format('dddd');
  const formattedData = avg.map((day) => {
    return {
      name: formatDate(day.measurementDate),
      'PM2.5': day['pm2.5'],
      PM10: day.pm10,
      PM1: day.pm1,
      CAQI: countCaqi(day['pm2.5'], day.pm10),
      Temperatura: day.temperature,
      Wilgotność: day.humidity,
    };
  });
  const setMargin = () => {
    if (width < 1024) return { top: 5, right: 0, bottom: 0, left: -5 };
    if (width < 2560) return { top: 5, right: 15, bottom: 0, left: 15 };
    if (width < 3200) return { top: 5, right: 50, bottom: 0, left: 50 };
    return { top: 5, right: 80, bottom: 0, left: 80 };
  };
  const margin = setMargin();

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
        <LineChart data={formattedData} margin={margin}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {
            // TODO: startIndex set to last 7 days
          }
          <Brush
            height={width < 1440 ? height / 25 : height / 40}
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
