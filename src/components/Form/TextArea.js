import React from 'react';
import PropTypes from 'prop-types';
import withLabel from './withLabel';
import './text-area.module.scss';

const TextArea = ({ name, id, placeholder, value, onChange, className }) => {
  return (
    <textarea
      name={name}
      id={id}
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withLabel(TextArea);
