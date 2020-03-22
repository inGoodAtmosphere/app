import React from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Button from './Button';
import Content from './Content';

const CookiesBanner = ({ setIsBannerOpen }) => {
  return (
    <div className="cookies-banner__wrapper">
      <Button setIsBannerOpen={setIsBannerOpen} />
      <Content />
    </div>
  );
};
CookiesBanner.propTypes = {
  setIsBannerOpen: PropTypes.func.isRequired,
};
export default CookiesBanner;
