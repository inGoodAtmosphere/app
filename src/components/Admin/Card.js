/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ element }) => {
  return (
    <div key={element.id} className={styles.card}>
      {Object.keys(element).map((key) => (
        <p key={key}>
          <b>{key}</b>: {element[key]}
        </p>
      ))}
    </div>
  );
};

Card.propTypes = {
  element: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
};

export default Card;
