import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import setActiveSensor from './setActiveSensor';
import MapContext from '../../utils/map-context';

const Search = ({ measurements }) => {
  const [suggestions, setSuggestions] = useState([]);
  const { dispatch } = useContext(MapContext);

  const handleChange = ({ target: { value } }) => {
    if (value.length === 0) {
      setSuggestions([]);
    }
    if (value.length > 2) {
      setSuggestions(
        measurements.sort().filter((measurement) =>
          measurement.station.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/ł/g, 'l')
            .includes(
              value
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/ł/g, 'l'),
            ),
        ),
      );
    }
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <ul>
        {suggestions.map((suggestion) => (
          <li>
            <button
              type="button"
              // prettier-ignore
              onClick={() =>
                setActiveSensor(
                  { lat: suggestion.lat, lng: suggestion.lon },
                  dispatch,
                )}
            >
              {suggestion.station.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Search.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.objectOf(PropTypes.string),
      ]),
    ),
  ).isRequired,
};

export default Search;
