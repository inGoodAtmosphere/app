import React from 'react';
import PropTypes from 'prop-types';
import withLabel from './withLabel';

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="form__input"
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withLabel(TextArea);
