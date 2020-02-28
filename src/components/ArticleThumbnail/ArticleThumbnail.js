import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import './article-thumbnail.scss';

const ArticleThumbnail = ({ thumbnail, header, description, tags }) => {
  const link = header
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l');
  return (
    <div className="article-container">
      <Link href="/kampania/[header]" as={`/kampania/${link}`}>
        <a className="article-container__thumbnail__link">
          <img
            className="article-container__thumbnail__image"
            src={thumbnail}
            alt="Miniaturka"
          />
        </a>
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
      <a href={link} className="article-container__link">
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
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ArticleThumbnail;
