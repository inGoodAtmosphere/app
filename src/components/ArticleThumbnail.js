import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const ArticleThumbnail = ({
  thumbnail, header, description, link,
}) => (
  <div className="article-container">
    <img
      className="article-container__thumbnail"
      src={thumbnail}
      alt="Miniaturka"
    />
    <h3 className="article-container__header">{header}</h3>
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
};
export default ArticleThumbnail;
