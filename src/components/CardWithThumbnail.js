import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const CardWithThumbnail = ({
  thumbnail, header, description, env,
}) => (
  <div className={`card ${env}__card`}>
    <img className={`${env}__thumbnail`} src={thumbnail} alt="Miniaturka" />
    <div className={`${env}__content`}>
      <h3 className={`${env}__header`}>{header}</h3>
      <p className={`${env}__description`}>{description}</p>
    </div>
  </div>
);
CardWithThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  env: PropTypes.string.isRequired,
};
export default CardWithThumbnail;
