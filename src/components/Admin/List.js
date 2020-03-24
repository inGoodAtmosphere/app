import React, { useContext } from 'react';
import Notification from './Notification';
import User from './User';
import Article from './Article';
import Sensor from './Sensor';
import Context from '../../utils/Context';
import './list.module.scss';

const List = () => {
  const { data, title } = useContext(Context);
  const setItem = () => {
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
  const item = setItem();
  return <div className="admin__list">{item}</div>;
};

export default List;
