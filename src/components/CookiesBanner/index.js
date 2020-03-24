import React from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Button from './Button';
import Content from './Content';

const CookiesBanner = ({ isBannerOpen, setIsBannerOpen }) => {
  return (
    <div
      className={`cookies-banner__wrapper ${
        isBannerOpen ? 'cookies-banner__wrapper--hidden' : ''
      }`}
    >
      <Button setIsBannerOpen={setIsBannerOpen} />
      <Content />
    </div>
  );
};
CookiesBanner.propTypes = {
  isBannerOpen: PropTypes.bool.isRequired,
  setIsBannerOpen: PropTypes.func.isRequired,
};
export default CookiesBanner;
