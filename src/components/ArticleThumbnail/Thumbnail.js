import React from 'react';
import PropTypes from 'prop-types';
import './thumbnail.module.scss';

const Thumbnail = ({ link, thumbnail }) => {
  return (
    <a
      href={`/kampania/${link}`}
      className="article-container__thumbnail__link"
    >
      <img
        className="article-container__thumbnail__image"
        src={thumbnail}
        alt="Miniaturka"
      />
    </a>
  );
};

Thumbnail.propTypes = {
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Thumbnail;
