import React, { useContext } from 'react';
import Context from '../../utils/Context';
import styles from './withLabel.module.scss';

export default (WrappedComponent) => ({
  name,
  id,
  label,
  type,
  placeholder,
  value,
  setState,
  className,
}) => {
  const context = useContext(Context);
  const error = context && context.errors.find((err) => err.field === name);
  const isError = !!error;
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ marginBottom: type === 'textarea' && '-0.3rem' }}
      >
        <WrappedComponent
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          setState={setState}
          isError={isError}
          className={`${className} ${
            type === 'textarea' ? styles.textArea : styles.input
          }`}
        />
        <label
          className={
            type === 'textarea'
              ? `${styles.labelTextArea} ${styles.label}`
              : styles.label
          }
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      {isError && <p className={styles.error}>{error.msg}</p>}
    </>
  );
};
