import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const landingPageHOC = (WrappedComponent) => ({
  link,
  env,
  purpose,
  header,
  content,
}) => (
  <>
    <WrappedComponent
      env={env}
      purpose={purpose}
      header={header}
      content={content}
    >
      <a className="landing-page__btn" href={`/${link.href}`}>
        {link.text}
      </a>
    </WrappedComponent>
  </>
);

export default landingPageHOC(InfoCard);
