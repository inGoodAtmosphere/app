import React, { useState } from 'react';
import InfoPopup from './InfoPopup';
import Point from './Point';
import withContext from '../../utils/withContext';
import './marker.module.scss';

const Marker = () => {
  const [show, setShow] = useState(false);
  const switchWindow = () => {
    setShow(!show);
  };
  return (
    <>
      <Point switchWindow={switchWindow} />
      {show && <InfoPopup switchWindow={switchWindow} />}
    </>
  );
};

export default withContext(Marker);
