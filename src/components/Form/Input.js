import React from 'react';
import PropTypes from 'prop-types';
import withLabel from './withLabel';
import styles from './Input.module.scss';

const Input = ({
  name,
  id,
  type,
  placeholder,
  value,
  onChange,
  isError,
  className,
}) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${className} ${styles.input} ${isError && styles.inputError}`}
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};
export default withLabel(Input);
