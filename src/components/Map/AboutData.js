import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutData.module.scss';

const AboutData = ({ id }) => {
  return id === 71 ? (
    <div className={styles.card}>
      <img
        src="icons/favicon-192.png"
        alt="inGoodAtmosphere"
        className={styles.image}
      />
      <p>Dane pochodzą z czujnika inGoodAtmosphere</p>
    </div>
  ) : (
    <a
      href="https://waqi.info/"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/waqi.png" alt="WAQI" className={styles.image} />
      <p>Dane pochodzą ze strony waqi.info</p>
    </a>
  );
};

AboutData.defaultProps = {
  id: 0,
};

AboutData.propTypes = {
  id: PropTypes.number,
};

export default AboutData;
