import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './article-thumbnail.scss';

const ArticleThumbnail = ({ thumbnail, header, description, link, tags }) => (
  <div className="article-container">
    <Link to={link} className="article-container__thumbnail__link">
      <img
        className="article-container__thumbnail__image"
        src={thumbnail}
        alt="Miniaturka"
      />
    </Link>
    <h2 className="article-container__header">{header}</h2>
    <p className="article-container__tags">
      {tags.map((tag) => (
        <span
          key={tag}
          className="article-container__tag"
          aria-label="Znajdź inne artykuły z tym tagiem"
        >
          {`#${tag} `}
        </span>
      ))}
    </p>
    <p className="article-container__description">{description}</p>
    <Link to={link} className="article-container__link">
      Czytaj więcej
    </Link>
  </div>
);
ArticleThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ArticleThumbnail;
