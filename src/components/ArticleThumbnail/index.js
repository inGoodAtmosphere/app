/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Thumbnail from './Thumbnail';
import Tags from './Tags';

const ArticleThumbnail = ({ thumbnail, header, description, tags }) => {
  const link = header
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l');
  return (
    <div className="article-container">
      <Thumbnail thumbnail={thumbnail} link={link} />
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
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleThumbnail;
