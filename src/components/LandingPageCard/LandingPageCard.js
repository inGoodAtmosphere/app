import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from '../InfoCard/InfoCard';
import useWindowWidth from '../../hooks/useWindowWidth';
import './landing-page-card.scss';

const landingPageHOC = (WrappedComponent) => ({
  link,
  env,
  purpose,
  header,
  content,
  img,
}) => {
  const width = useWindowWidth();
  return (
    <>
      <WrappedComponent
        env={env}
        purpose={purpose}
        header={header}
        content={content}
        link={link && link.href}
      >
        {purpose !== 'map' ? (
          <Link
            to={`/${link.href}`}
            className="landing-page__btn"
            aria-label={link.href}
          >
            {link.text}
          </Link>
        ) : (
          <span className="landing-page__btn landing-page__btn__map">
            Już wkrótce
          </span>
        )}
        {width > 1024 && (
          <Link
            to={link && link.href}
            className="landing-page__svg__link"
            aria-label={link && link.href}
          >
            {img}
          </Link>
        )}
      </WrappedComponent>
    </>
  );
};

export default landingPageHOC(InfoCard);
