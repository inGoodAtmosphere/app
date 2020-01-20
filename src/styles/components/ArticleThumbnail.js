import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/campaign.scss';
// prettier-ignore
const ArticleThumbnail = ({
  thumbnail, header, description, link,
}) => (
  <div className="article-container">
    <img className="miniaturka" src={thumbnail} alt="Miniaturka" />
    <h3 className="header">{header}</h3>
    <p className="description">{description}</p>
    <a href={link} className="link">Czytaj więcej</a>
  </div>
);
ArticleThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default ArticleThumbnail;
