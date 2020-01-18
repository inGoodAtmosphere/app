import React from 'react';
import PropTypes from 'prop-types';

const InfoCard = ({ className, header, content }) => (
  <div className={`card__landing ${className}`}>
    <h1>{header}</h1>
    <p>{content}</p>
  </div>
);
InfoCard.defaultProps = {
  className: '',
};
InfoCard.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default InfoCard;
