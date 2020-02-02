import React from 'react';
import PropTypes from 'prop-types';
import './text-filter.scss';

const TextFilter = ({ setTextFilter, textFilter }) => (
  <>
    <label htmlFor="filter" aria-label="Wyszukaj artykuł">
      <input
        id="filter"
        value={textFilter}
        type="search"
        placeholder="Wyszukaj artykuł"
        className="campaign__search"
        onChange={(e) => {
          setTextFilter(
            e.target.value
              .toLowerCase()
              .trim()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/ł/g, 'l'),
          );
        }}
      />
    </label>
    <div
      className="campaign__help"
      data-tooltip='Możesz wyszukać tytuł artykułu lub słowa kluczowe. Spróbuj np. "smog"'
    >
      ?
    </div>
  </>
);
TextFilter.propTypes = {
  setTextFilter: PropTypes.func.isRequired,
  textFilter: PropTypes.string.isRequired,
};
export default TextFilter;
