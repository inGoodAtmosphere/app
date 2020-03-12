import React, { useContext } from 'react';
import Context from '../../utils/Context';
import './image.module.scss';

const Image = () => {
  const { thumbnail, env } = useContext(Context);
  return (
    <img
      srcSet={`${thumbnail[0]} 300w, ${thumbnail[1]} 800w`}
      className={`${env}__card-with-thumbnail__thumbnail card-with-thumbnail__thumbnail`}
      src={thumbnail[0]}
      alt="Miniaturka"
    />
  );
};

export default Image;
