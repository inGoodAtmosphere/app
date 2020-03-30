import React from 'react';
import './input.module.scss';

export default (WrappedComponent) => ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="form__input__wrapper">
      <WrappedComponent
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label
        className={`form__label ${type === 'textarea' &&
          'form__label__textarea'}`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};
