import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const ArticleThumbnail = ({
  thumbnail,
  header,
  description,
  link,
  tags,
  setTextFilter,
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
        <button key={tag} type="button" onClick={() => setTextFilter(tag)} className="article-container__tag">{`#${tag} `}</button>
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
  setTextFilter: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ArticleThumbnail;
