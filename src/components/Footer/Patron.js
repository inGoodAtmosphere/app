import React from 'react';
import PropTypes from 'prop-types';
import styles from './Patron.module.scss';

const Patron = ({ name, link, img }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className={`${styles.item} ${styles[name]}`}
    >
      <img
        src={img}
        alt={name}
        className={`${styles.image} ${styles.imageName}`}
      />
    </a>
  );
};

Patron.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Patron;
