import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ArticleContext from '../contexts/article-context';

const ArticleThumbnail = ({ thumbnail, header, description, link }) => {
  const { dispatch } = useContext(ArticleContext);
  return (
    <div className="article-container">
      <img
        className="article-container__thumbnail"
        src={thumbnail}
        alt="Miniaturka"
      />
      <h3 className="article-container__header">{header}</h3>
      <p className="article-container__description">{description}</p>
      <a
        href={link}
        className="article-container__link"
        onClick={() => {
          dispatch({ type: 'SET_ARTICLE', header });
        }}
      >
        Czytaj więcej
      </a>
    </div>
  );
};
ArticleThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default ArticleThumbnail;
