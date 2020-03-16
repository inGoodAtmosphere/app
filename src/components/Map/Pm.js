/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import mapContext from '../../utils/map-context';
import './pm.module.scss';

const Caqi = ({ purpose }) => {
  const { activeSensor } = useContext(mapContext);
  return (
    <a className="map__data__pm" href={`/encyklopedia#${purpose}`}>
      <h3 className="map__data__pm__title">{purpose.toUpperCase()}</h3>
      <h2 className="map__data__pm__measurement">
        {activeSensor[purpose]} µg/m³
      </h2>
      <h2 className="map__data__percent map__data__pm__measurement">
        {(activeSensor[purpose] / (purpose === 'pm25' ? 25 : 50)) * 100}%
      </h2>
    </a>
  );
};

Caqi.propTypes = { purpose: PropTypes.string.isRequired };

export default Caqi;
