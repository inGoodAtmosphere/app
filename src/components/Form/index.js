import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';

const Form = ({ children, data, endpoint, submitText }) => {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setMessage('');
    setIsLoaded(true);
    const res = await fetch(endpoint, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setIsLoaded(false);
    if (isLoaded) setMessage('Proszę czekać');
    if (json.errors.length) {
      setErrors(json.errors);
    } else {
      setMessage(json.message);
    }
  };
  return (
    <form
      method="post"
      className="form"
      onSubmit={(e) => handleSubmit(e)}
      noValidate
    >
      {errors.length ? (
        errors.map((error) => (
          <p key={error} className="form__error">
            {error}
          </p>
        ))
      ) : (
        <p className="form__message">{isLoaded ? 'Proszę czekać' : message}</p>
      )}
      {children}
      <button type="submit" className="form__btn">
        {submitText}
      </button>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  endpoint: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
};

export default Form;
