import React, { useContext } from 'react';
import Context from '../../utils/Context';
import './button.module.scss';

const Button = () => {
  const { link } = useContext(Context);
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
