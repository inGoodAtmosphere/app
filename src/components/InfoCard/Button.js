import React, { useContext } from 'react';
import Context from '../../utils/Context';
import './button.module.scss';

const Button = () => {
  const { link } = useContext(Context);
  if (link.href === 'mapa')
    return <span className="landing-page__btn__map">Już wkrótce</span>;
  return (
    <a
      href={`/${link.href}`}
      className="landing-page__btn"
      aria-label={link.href}
    >
      {link.text}
    </a>
  );
};

export default Button;
