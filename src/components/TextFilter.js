import React from 'react';
import PropTypes from 'prop-types';

const TextFilter = ({ setTextFilter }) => (
  <>
    <input
      type="text"
      placeholder="Wyszukaj artykuł"
      className="campaign__search"
      onChange={(e) => {
        setTextFilter(e.target.value.toLowerCase());
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
};
export default TextFilter;
