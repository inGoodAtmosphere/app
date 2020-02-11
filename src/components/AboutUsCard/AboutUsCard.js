import React from 'react';
import PropTypes from 'prop-types';
import './about-us-card.scss';
// prettier-ignore
const AboutUsCard = (
  {
    person: {
      name, role, image, description,
    },
  },
) => (
  <div className="about-us__card__wrapper">
    <div className="about-us__card__image__wrapper">
      <img
        src={image}
        alt={name}
        className={`about-us__card__image about-us__card__image__${name}`}
      />
    </div>
    <div className="card about-us__card" />
    <div className="about-us__card__description">
      <h2 className="about-us__card__description__name">{name}</h2>
      <h3 className="about-us__card__description__role">{role}</h3>
      <p className="about-us__card__description__description">{description}</p>
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
