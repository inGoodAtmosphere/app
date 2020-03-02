import React, { useContext } from 'react';
import Context from '../../utils/Context';
import './button.module.scss';

const Button = () => {
  const { purpose, link } = useContext(Context);
  return purpose !== 'map' ? (
    <a
      href={`/${link.href}`}
      className="landing-page__btn"
      aria-label={link.href}
    >
      {link.text}
    </a>
  ) : (
    <span className="landing-page__btn landing-page__btn__map">
      Już wkrótce
    </span>
  );
};

export default Button;
