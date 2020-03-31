import React, { useContext } from 'react';
import './input.module.scss';
import Context from '../../utils/Context';

export default (WrappedComponent) => ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const { errors } = useContext(Context);
  const isError = !!errors.find((error) => error.field === name);
  return (
    <div className="form__input__wrapper">
      <WrappedComponent
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form__input ${isError && 'form__input--error'} ${type ===
          'textarea' && 'form__input__textarea'}`}
      />
      <label
        className={`form__label ${type === 'textarea' &&
          'form__label__textarea'} `}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};
