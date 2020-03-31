import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
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

import countCaqi from '../countCaqi';

const Chart = ({ width }) => {
  const {
    activeSensor: { avg },
  } = useContext(MapContext);
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
    const constMargin = { top: 5, bottom: 0 };
    if (width < 1024) return { right: 5, left: -5, ...constMargin };
    if (width < 2560) return { right: 15, left: 15, ...constMargin };
    if (width < 3200) return { right: 50, left: 50, ...constMargin };
    return { right: 80, left: 80, ...constMargin };
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
            height={30}
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

Chart.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Chart;
