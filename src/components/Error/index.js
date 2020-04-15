import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Illustration500 from './Illustration500';
import Illustration404 from './Illustration404';
import { logEvent } from '../../utils/analytics';
import styles from './index.module.scss';

const Error = ({ status, text }) => {
  useEffect(() => {
    logEvent('Error', status.toString());
  }, []);
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className={styles.content}>
      {status === 404 ? <Illustration404 /> : <Illustration500 />}
      <p className={styles.text}>
        Ups!
        <br />
        {text}
      </p>
      {status === 500 ? (
        <button type="button" className={styles.button} onClick={refreshPage}>
          Spróbuj ponownie
        </button>
      ) : (
        <a className={styles.button} href="/">
          Strona Główna
        </a>
      )}
    </div>
  );
};
Error.propTypes = {
  status: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default Error;
