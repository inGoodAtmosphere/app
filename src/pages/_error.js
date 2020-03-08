import React from 'react';
import NotFoundSvg from '../components/NotFound/svg/not-found';
import Content from '../components/NotFound/Content';
import './not-found.module.scss';

const NotFound = () => {
  return (
    <main className="content not-found__content">
      <NotFoundSvg />
      <Content />
    </main>
  );
};

export default NotFound;
