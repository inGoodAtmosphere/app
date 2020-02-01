import React from 'react';
import PropTypes from 'prop-types';

const TextFilter = ({ setTextFilter, textFilter }) => (
  <>
    <input
      value={textFilter}
      type="text"
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
