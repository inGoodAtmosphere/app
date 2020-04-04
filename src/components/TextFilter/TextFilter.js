import React from 'react';
import PropTypes from 'prop-types';
import './text-filter.scss';

const TextFilter = ({ setTextFilter, textFilter }) => (
  <input
    id="filter"
    value={textFilter}
    type="search"
    placeholder="Wyszukaj artykuł lub słowa kluczowe"
    className="campaign__search"
    onChange={(e) => {
      setTextFilter(
        e.target.value
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/ł/g, 'l'),
      );
    }}
  />
);
TextFilter.propTypes = {
  setTextFilter: PropTypes.func.isRequired,
  textFilter: PropTypes.string.isRequired,
};
export default TextFilter;
