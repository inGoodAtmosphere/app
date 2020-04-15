import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Content from './Content';
import styles from './index.module.scss';

const CookiesBanner = ({ isBannerOpen, setIsBannerOpen }) => {
  return (
    <div
      className={`${styles.wrapper} ${isBannerOpen === '' &&
        styles.wrapperVisible}`}
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
