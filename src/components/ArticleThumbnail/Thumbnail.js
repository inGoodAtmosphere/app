import React from 'react';
import PropTypes from 'prop-types';
import './thumbnail.module.scss';

const Thumbnail = ({ link, images }) => {
  return (
    <a
      href={`/kampania/${link}`}
      className="article-container__thumbnail__link"
    >
      <img
        className="article-container__thumbnail__image"
        src={`/data/articles/${images}/thumbnail.jpg`}
        alt="Miniaturka"
      />
      <span className="article-container__thumbnail__link__text">
        Czytaj więcej
      </span>
    </a>
  );
};

Thumbnail.propTypes = {
  link: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Thumbnail;
