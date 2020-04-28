import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Illustration500 from './Illustration500';
import Illustration404 from './Illustration404';
import { logEvent } from '../../utils/analytics';
import styles from './index.module.scss';

const Error = ({ status, text, label, value }) => {
  useEffect(() => {
    logEvent('Error', status && status.toString(), label, value);
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
      {status === 500 || status === 'Offline' ? (
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
Error.defaultProps = {
  label: '',
  value: '',
};
Error.propTypes = {
  status: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
};
export default Error;
