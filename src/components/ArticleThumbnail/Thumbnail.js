import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.module.scss';

const Thumbnail = ({ link, images }) => {
  return (
    <a href={`/kampania/${link}`} className={styles.link}>
      <img
        className={styles.image}
        src={`/data/articles/${images}/thumbnail.jpg`}
        alt="Miniaturka"
      />
      <span className={styles.text}>Czytaj więcej</span>
    </a>
  );
};

Thumbnail.propTypes = {
  link: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Thumbnail;
