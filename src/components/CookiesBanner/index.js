import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Button from './Button';
import Content from './Content';

const CookiesBanner = ({ isBannerOpen }) => {
  const [display, setDisplay] = useState(isBannerOpen);
  return (
    <div
      className={
        display === 'false'
          ? 'cookies-banner__wrapper--hidden'
          : 'cookies-banner__wrapper'
      }
    >
      <Button setDisplay={setDisplay} />
      <Content />
    </div>
  );
};
CookiesBanner.propTypes = {
  isBannerOpen: PropTypes.string.isRequired,
};
export default CookiesBanner;
