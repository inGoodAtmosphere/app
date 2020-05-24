import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tags.module.scss';

const Tags = ({ tags }) => {
  return (
    <p className={styles.tags}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
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
