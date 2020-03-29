import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.moudle.scss';

const Form = ({ children, data, endpoint }) => {
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(endpoint, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.errors.length) {
      setMessage(json.errors);
    } else {
      setMessage(json.message);
    }
  };
  return (
    <form
      method="post"
      className="form admin__form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className="form__message">{message}</p>
      {children}
      <button type="submit" className="form__btn">
        Zaloguj się
      </button>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  endpoint: PropTypes.string.isRequired,
};

export default Form;
