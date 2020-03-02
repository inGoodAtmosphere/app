import React, { useContext } from 'react';
import Context from './Context';
import './image.module.scss';

const Image = () => {
  const { name, image } = useContext(Context);
  return (
    <div className="about-us__card__image__wrapper">
      <img
        src={image}
        alt={name}
        className={`about-us__card__image about-us__card__image__${name}`}
      />
    </div>
  );
};

export default Image;
