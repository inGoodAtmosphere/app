import React, { useContext } from 'react';
import Context from '../../utils/Context';
import './content.module.scss';

const Content = () => {
  const { header, description, env } = useContext(Context);
  return (
    <div
      className={`${env}__card-with-thumbnail__content card-with-thumbnail__content`}
    >
      <h2
        className={`${env}__card-with-thumbnail__header card-with-thumbnail__header`}
      >
        {header}
      </h2>
      <p
        className={`${env}__card-with-thumbnail__description card-with-thumbnail__description`}
      >
        {description}
      </p>
    </div>
  );
};

export default Content;
