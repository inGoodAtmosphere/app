/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

const Tooltip = ({ className, purpose, title }) => {
  return (
    <div className={className}>
      Wszystkie wartości są podane w standardzie AQI opracowanym przez Agencja
      Ochrony Środowiska (US EPA)
      <a href={`/encyklopedia#${purpose}`} className={styles.link}>
        Dowiedz się więcej o {title}
      </a>
    </div>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tooltip;
