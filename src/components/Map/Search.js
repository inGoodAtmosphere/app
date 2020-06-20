import React, { useState, useContext } from 'react';
import OutsideClick from 'react-outside-click-handler';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import setActiveSensor from './setActiveSensor';
import MapContext from '../../utils/map-context';
import styles from './Search.module.scss';

const Search = ({ measurements }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
  const [text, setText] = useState('');
  const { dispatch } = useContext(MapContext);
  const handleChange = ({ target: { value } }) => {
    setText(value);
    setError('');
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
    if (text.length > 2 && suggestions.length === 0) {
      setError('Nie znaleźliśmy takiego czujnika');
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
      <OutsideClick onOutsideClick={() => setSuggestions([])}>
        <ul className={styles.list}>
          {error && suggestions.length === 0 ? (
            <li className={styles.item}>{error}</li>
          ) : (
            suggestions.map((suggestion) => (
              <li key={suggestion.uid}>
                <button
                  className={styles.item}
                  type="button"
                  onClick={() => {
                    setActiveSensor(
                      { lat: suggestion.lat, lng: suggestion.lon },
                      dispatch,
                      suggestion.deviceId,
                    );
                    setSuggestions([]);
                    setText('');
                  }}
                >
                  {suggestion.station.name}
                </button>
              </li>
            ))
          )}
        </ul>
      </OutsideClick>
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
