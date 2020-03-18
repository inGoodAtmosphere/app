import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Illustration from './Illustration';
import { logEvent } from '../../utils/analytics';
import './index.module.scss';

const Error = ({ message }) => {
  useEffect(() => {
    logEvent('Error', message);
  }, []);
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="content error__content">
      <Illustration />
      <p className="error__text">
        Ups!
        <br />
        Coś poszło nie tak
      </p>
      <button type="button" className="error__btn" onClick={refreshPage}>
        Spróbuj ponownie
      </button>
    </div>
  );
};
Error.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Error;
