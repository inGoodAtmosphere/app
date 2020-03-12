import React, { useContext } from 'react';
import Button from './Button';
import Context from '../../utils/Context';
import './content.module.scss';

const Content = () => {
  const { env, header, content, link } = useContext(Context);
  return (
    <div className="landing-page__card__content">
      <h1 className={`${env}__header`}>{header}</h1>
      <p className={` ${env}__description`}>{content}</p>
      {env === 'landing-page' && <Button link={link} />}
    </div>
  );
};

export default Content;
