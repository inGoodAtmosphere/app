import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ measurements }) => {
  const [suggestions, setSuggestions] = useState([]);

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
          <li>{suggestion.station.name}</li>
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
