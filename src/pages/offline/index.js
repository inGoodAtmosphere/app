import React from 'react';
import dynamic from 'next/dynamic';

const Error = dynamic(() => import('../../components/Error'));

const Offline = () => {
  return <Error status={0} text="Jesteś offline" />;
};

export default Offline;
