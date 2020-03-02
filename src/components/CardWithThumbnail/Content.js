import React, { useContext } from 'react';
import Context from '../../utils/Context';
import './content.module.scss';

const Content = () => {
  const { header, description, env } = useContext(Context);
  return (
    <div className={`${env}__content`}>
      <h2 className={`${env}__header`}>{header}</h2>
      <p className={`${env}__description`}>{description}</p>
    </div>
  );
};

export default Content;
