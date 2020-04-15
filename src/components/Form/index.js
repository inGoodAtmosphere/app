import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import Bots from './Bots';
import styles from './index.module.scss';

const Form = ({ children, data, endpoint, submitText }) => {
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(null);
  const [score, setScore] = useState(1);
  const { setErrors } = useContext(Context);
  const captchaKey =
    process.env.NODE_ENV === 'production'
      ? process.env.CAPTCHA_SITE_KEY_PRODUCTION
      : process.env.CAPTCHA_SITE_KEY;
  // rejestracja powiodla sie
  // logowanie przebieglo pomyslnie
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${captchaKey}`;
    document.body.appendChild(script);
  }, []);

  const verifyCaptcha = () => {
    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(captchaKey);
      const res = await fetch('/api/captcha', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(token),
      });
      const { googleResponse } = await res.json();
      if (googleResponse) {
        setScore(googleResponse.score);
      }
    });
  };
  const performAction = async () => {
    if (score > 0.3) {
      setMessage('Proszę czekać');
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
        setIsSuccessful(false);
        setErrors(json.errors);
        setMessage('');
      } else {
        setIsSuccessful(true);
        setMessage(json.message);
        setErrors([]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCaptcha();
    performAction();
  };
  return (
    <form
      method="post"
      className={styles.form}
      onSubmit={(e) => handleSubmit(e)}
      noValidate
    >
      {children}
      <button
        type="submit"
        className={isSuccessful ? styles.buttonSuccess : styles.button}
        disabled={isSuccessful}
      >
        {message || submitText}
      </button>
      {score < 0.3 && <Bots />}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  ).isRequired,
  endpoint: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
};

export default withContext(Form);
