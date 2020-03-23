import React, { useContext } from 'react';
import Notification from './Notification';
import User from './User';
import Article from './Article';
import Sensor from './Sensor';
import Context from '../../utils/Context';

const List = () => {
  const { data, title } = useContext(Context);
  return data.map((element) => {
    switch (title) {
      case 'Powiadomienia':
        return <Notification key={element.id} />;
      case 'Użytkownicy':
        return <User id={element.id} key={element.id} />;
      case 'Artykuły':
        return <Article key={element.id} />;
      case 'Mierniki':
        return <Sensor id={element.id} key={element.id} />;
      default:
        return <p>Błąd</p>;
    }
  });
};

export default List;
