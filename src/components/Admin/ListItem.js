import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../utils/Context';
import Notification from './Notification';
import User from './User';
import Article from './Article';
import Sensor from './Sensor';

const ListItem = ({ id }) => {
  const { title } = useContext(Context);
  const setItem = () => {
    switch (title) {
      case 'Powiadomienia':
        return <Notification />;
      case 'Użytkownicy':
        return <User id={id} />;
      case 'Artykuły':
        return <Article />;
      case 'Mierniki':
        return <Sensor id={id} />;
      default:
        return <p>Błąd</p>;
    }
  };
  const item = setItem();
  return <div className="card">{item}</div>;
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ListItem;
