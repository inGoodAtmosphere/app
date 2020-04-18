import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ header, children, color }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

Card.defaultProps = {
  color: '',
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Card;
