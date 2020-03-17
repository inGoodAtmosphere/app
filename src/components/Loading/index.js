import React from 'react';
import Clouds from './Clouds';
import './index.module.scss';

const Loading = () => {
  return (
    <div className="content loading__content" style={{}}>
      <div className="loading__wrapper">
        <Clouds />
        <h1 className="loading__header">Ładowanie</h1>
      </div>
    </div>
  );
};

export default Loading;
