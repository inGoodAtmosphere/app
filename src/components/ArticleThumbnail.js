import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const ArticleThumbnail = ({
  thumbnail, header, description, link,
}) => (
  <div>
    <img src={thumbnail} alt="Miniaturka" />
    <h3>{header}</h3>
    <p>{description}</p>
    <a href={link}>Czytaj więcej</a>
  </div>
);
ArticleThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default ArticleThumbnail;
