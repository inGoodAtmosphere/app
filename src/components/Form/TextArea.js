import React from 'react';
import PropTypes from 'prop-types';
import withLabel from './withLabel';
import styles from './TextArea.module.scss';

const TextArea = ({
  name,
  id,
  placeholder,
  value,
  setState,
  isError,
  className,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${styles.input} ${className} ${isError && styles.inputError}`}
      value={value}
      required
      onChange={(e) => setState(e.target.value)}
    />
  );
};

TextArea.defaultProps = {
  placeholder: '',
};
TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default withLabel(TextArea);
