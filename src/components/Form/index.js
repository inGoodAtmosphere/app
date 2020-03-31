import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import withContext from '../../utils/withContext';
import './index.module.scss';
import Context from '../../utils/Context';

const Form = ({ children, data, endpoint, submitText }) => {
  const [message, setMessage] = useState('');
  const { setErrors } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.grecaptcha.execute(process.env.CAPTCHA_SITE_KEY).then((token) => {
      fetch('/api/verify', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token),
      });
      // fetch(
      //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${process.env.CAPTCHA_SITE_KEY}`,
      //   {
      //     method: 'post',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(token),
      //   },
      // );
    });
    setErrors([]);
    setMessage('');
    setMessage('Wysyłanie');
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
      setErrors(json.errors);
      setMessage('');
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
      {children}
      <button
        type="submit"
        className={`${
          message === 'Twój email został wysłany pomyślnie'
            ? 'form__btn--success'
            : 'form__btn'
        }`}
        disabled={!!message}
      >
        {message || submitText}
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

export default withContext(Form);
