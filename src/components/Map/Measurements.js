import React from 'react';
import PropTypes from 'prop-types';
import Measurement from './Measurement';
import styles from './Measurements.module.scss';

const Measurements = ({ data, priority }) => {
  return (
    <div className={styles.data}>
      {Object.entries(data).map(
        ([key, value]) =>
          value && (
            <Measurement purpose={key} value={value} priority={priority} />
          ),
      )}
    </div>
  );
};

Measurements.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  priority: PropTypes.string.isRequired,
};

export default Measurements;
