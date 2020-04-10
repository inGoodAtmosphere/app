import React from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Button from './Button';
import Content from './Content';

const CookiesBanner = ({ isBannerOpen, setIsBannerOpen }) => {
  return (
    <div
      className={`"cookies-banner__wrapper ${isBannerOpen === '' &&
        'cookies-banner__wrapper cookies-banner__wrapper--visible'}`}
    >
      <Button setIsBannerOpen={setIsBannerOpen} />
      <Content />
    </div>
  );
};

CookiesBanner.defaultProps = {
  isBannerOpen: '',
};

CookiesBanner.propTypes = {
  isBannerOpen: PropTypes.string,
  setIsBannerOpen: PropTypes.func.isRequired,
};
export default CookiesBanner;
