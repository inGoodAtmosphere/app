import React from 'react';
import PropTypes from 'prop-types';
import './card-with-thumbnail.scss';

const CardWithThumbnail = ({ thumbnail, header, description, env }) => (
  <div className={`card ${env}__card`}>
    <img
      srcSet={`${thumbnail[0]} 300w, ${thumbnail[1]} 800w`}
      className={`${env}__thumbnail`}
      src={thumbnail[0]}
      alt="Miniaturka"
    />
    <div className={`${env}__content`}>
      <h2 className={`${env}__header`}>{header}</h2>
      <p className={`${env}__description`}>{description}</p>
    </div>
  </div>
);
CardWithThumbnail.propTypes = {
  thumbnail: PropTypes.arrayOf(PropTypes.string).isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  env: PropTypes.string.isRequired,
};
export default CardWithThumbnail;
