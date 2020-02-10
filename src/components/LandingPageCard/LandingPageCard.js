import React from 'react';
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
        link={link.href}
      >
        <a
          className="landing-page__btn"
          aria-label={link.href}
          href={`/${link.href}`}
        >
          {link.text}
        </a>
        {width > 1024 && (
          <a
            className="landing-page__svg__link"
            aria-label={link.href}
            href={link.href}
          >
            {img}
          </a>
        )}
      </WrappedComponent>
    </>
  );
};

export default landingPageHOC(InfoCard);
