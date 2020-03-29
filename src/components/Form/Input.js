import React from 'react';
import PropTypes from 'prop-types';
import './input.module.scss';

const Input = ({ name, type, placeholder, value, onChange, label }) => {
  return (
    <label htmlFor={name}>
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="form__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
Input.defaultProps = {
  placeholder: '',
  type: 'text',
};
Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
