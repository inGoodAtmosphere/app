/* eslint-disable react/prop-types */
import React from 'react';

import Controls from './Controls';

const breakpoints = [
  {
    slidesToShow: 1,
    renderCenterLeftControls() {
      return null;
    },
    renderCenterRightControls() {
      return null;
    },
  },
  {
    slidesToShow: 2,
    renderCenterLeftControls() {
      return null;
    },
    renderCenterRightControls() {
      return null;
    },
  },
  {
    slidesToShow: 3,
    renderCenterLeftControls({ previousSlide }) {
      return <Controls previousSlide={previousSlide} />;
    },
    renderCenterRightControls({ nextSlide }) {
      return <Controls nextSlide={nextSlide} />;
    },
  },
];

export default breakpoints;
