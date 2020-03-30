import React from 'react';
import PropTypes from 'prop-types';
import withLabel from './withLabel';
import './text-area.module.scss';

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      // cols={40}
      // rows={10}
      placeholder={placeholder}
      className="form__input form__input__textarea"
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
