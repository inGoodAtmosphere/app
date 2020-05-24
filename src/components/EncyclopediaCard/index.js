import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Bar from './Bar';

const EncyclopediaCard = ({ content }) => {
  return (
    <div className={styles.card} id={content.id}>
      <div className={styles.circleWrapper}>
        <svg
          className={styles.circle}
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill={content.color} />
        </svg>
        <h1 className={styles.header}>
          {content.header}
          <sub>{content.sub}</sub>
        </h1>
      </div>
      <p className={styles.paragraph}>{parse(content.text)}</p>
      {content.id === 'caqi' && <Bar />}
    </div>
  );
};

EncyclopediaCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    header: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    sub: PropTypes.string,
  }).isRequired,
};

export default EncyclopediaCard;
