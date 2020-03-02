import React, { useContext } from 'react';
import Context from './Context';
import './card.module.scss';

const Card = () => {
  const { name, role, description } = useContext(Context);
  return (
    <>
      <div className="card about-us__card" />
      <div className="about-us__card__description">
        <h2 className="about-us__card__description__name">{name}</h2>
        <h3 className="about-us__card__description__role">{role}</h3>
        <p className="about-us__card__description__description">
          {description}
        </p>
      </div>
    </>
  );
};

export default Card;
