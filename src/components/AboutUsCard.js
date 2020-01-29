import React from 'react';
import PropTypes from 'prop-types';
// prettier-ignore
const AboutUsCard = ({
  person: {
    name, role, image, description,
  },
}) => (
  <div className="about-us__card__wrapper">
    <img className="about-us__card__image" src={image} alt={name} />
    <div className="card about-us__card" />
    <div className="about-us__card__description">
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
    </div>
  </div>
);

AboutUsCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
export default AboutUsCard;
