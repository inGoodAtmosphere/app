import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tags.module.scss';

const Tags = ({ tags }) => {
  return (
    <p className={styles.tags}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={styles.tag}
          aria-label="Znajdź inne artykuły z tym tagiem"
        >
          {`#${tag} `}
        </span>
      ))}
    </p>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
