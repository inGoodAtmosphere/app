import React, { useState } from 'react';
import InfoWindow from './InfoWindow';
import Point from './Point';
import withContext from '../../utils/withContext';

const Marker = () => {
  const [show, setShow] = useState(false);
  const switchWindow = () => {
    setShow(!show);
  };
  return (
    <>
      <Point switchWindow={switchWindow} />
      {show && <InfoWindow switchWindow={switchWindow} />}
    </>
  );
};

export default withContext(Marker);
