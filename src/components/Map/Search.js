import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import setActiveSensor from './setActiveSensor';
import MapContext from '../../utils/map-context';
import styles from './Search.module.scss';

const Search = ({ measurements }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');
  const { dispatch } = useContext(MapContext);

  const handleChange = ({ target: { value } }) => {
    setText(value);
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
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          value={text}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      </div>
      <ul className={styles.list}>
        {suggestions.map((suggestion) => (
          <li className={styles.item}>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                setActiveSensor(
                  { lat: suggestion.lat, lng: suggestion.lon },
                  dispatch,
                );
                setSuggestions([]);
                setText('');
              }}
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
