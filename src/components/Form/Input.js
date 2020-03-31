import React from 'react';
import PropTypes from 'prop-types';
import './input.module.scss';
import withLabel from './withLabel';

const Input = ({ name, type, placeholder, value, onChange, className }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      required
      onChange={(e) => onChange(e.target.value)}
    />
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
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default withLabel(Input);
