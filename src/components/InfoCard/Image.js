import React, { useContext } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import Context from '../../utils/Context';
import './image.module.scss';

const Image = () => {
  const { link, Svg } = useContext(Context);
  const width = useWindowWidth();
  return (
    width > 1024 && (
      <a
        href={link && link.href}
        className="landing-page__svg__link"
        aria-label={link && link.href}
      >
        <Svg />
      </a>
    )
  );
};

export default Image;
