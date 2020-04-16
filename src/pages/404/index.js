import React from 'react';
import Error from '../../components/Error';

const NotFoundPage = () => {
  return <Error status={404} text="Chyba się zgubiłeś" />;
};

export default NotFoundPage;
