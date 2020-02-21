import React from 'react';
import PropTypes from 'prop-types';
import './article-thumbnail.scss';
// prettier-ignore
const ArticleThumbnail = ({
  thumbnail,
  header,
  description,
  link,
  tags,
}) => (
  <div className="article-container">
    <img
      className="article-container__thumbnail"
      src={thumbnail}
      alt="Miniaturka"
    />
    <h3 className="article-container__header">{header}</h3>
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
    <a href={link} className="article-container__link">
      Czytaj więcej
    </a>
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
