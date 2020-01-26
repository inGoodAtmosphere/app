import React from 'react';
import PropTypes from 'prop-types';

const AboutUsCard = ({ image, content: { name, role, description } }) => (
  <div className="card about-us__card">
    <img className="about-us__card__image" src={image} alt={name} />

    <div className="about-us__card__description">
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
    </div>
  </div>
);

AboutUsCard.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default AboutUsCard;
