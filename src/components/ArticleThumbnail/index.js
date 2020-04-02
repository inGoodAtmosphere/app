import React from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Thumbnail from './Thumbnail';
import Tags from './Tags';

const ArticleThumbnail = ({ images, header, description, tags, link }) => {
  return (
    <div className="article-thumbnail">
      <Thumbnail images={images} link={link} />
      <h2 className="article-thumbnail__header">{header}</h2>
      <Tags tags={tags} />
      <p className="article-thumbnail__description">{description}</p>
      <a href={`/kampania/${link}`} className="article-thumbnail__link">
        Czytaj więcej
      </a>
    </div>
  );
};

ArticleThumbnail.propTypes = {
  images: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleThumbnail;
