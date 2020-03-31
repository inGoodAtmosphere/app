import React, { useContext } from 'react';
import './with-label.module.scss';
import Context from '../../utils/Context';

export default (WrappedComponent) => ({
  name,
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const { errors } = useContext(Context);
  const error = errors.find((err) => err.field === name);
  const isError = !!error;
  return (
    <>
      <div className="form__input__wrapper">
        {isError && <p className="form__error">{error.msg}</p>}
        <WrappedComponent
          name={name}
          id={id}
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
    </>
  );
};
