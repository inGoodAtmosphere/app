import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, placeholder, value, onChange }) => {
  return (
    <label htmlFor={name}>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className="form__input admin__form__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
Input.defaultProps = {
  placeholder: '',
};
Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
