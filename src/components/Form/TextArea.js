import React from 'react';
import PropTypes from 'prop-types';
import withLabel from './withLabel';
import './text-area.module.scss';

const TextArea = ({ name, placeholder, value, onChange, className }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={className}
      value={value}
      required
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

TextArea.defaultProps = {
  placeholder: '',
};
TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withLabel(TextArea);
