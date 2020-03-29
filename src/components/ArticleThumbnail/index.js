/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Thumbnail from './Thumbnail';
import Tags from './Tags';

const ArticleThumbnail = ({ images, header, description, tags, link }) => {
  return (
    <div className="article-container">
      <Thumbnail images={images} link={link} />
      <h2 className="article-container__header">{header}</h2>
      <Tags tags={tags} />
      <p className="article-container__description">{description}</p>
      <a href={`/kampania/${link}`} className="article-container__link">
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
