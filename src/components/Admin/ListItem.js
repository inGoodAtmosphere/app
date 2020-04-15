import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../utils/Context';
import Notification from './Notification';
import User from './User';
import Article from './Article';
import Sensor from './Sensor';
import styles from './ListItem.module.scss';

const ListItem = ({ id, data }) => {
  const { title } = useContext(Context);
  const setItem = () => {
    switch (title) {
      case 'Powiadomienia':
        return <Notification data={data} id={id} />;
      case 'Użytkownicy':
        return <User id={id} data={data} />;
      case 'Artykuły':
        return <Article id={id} data={data} />;
      case 'Mierniki':
        return <Sensor id={id} data={data} />;
      default:
        return <p>Błąd</p>;
    }
  };
  const item = setItem();
  return <div className={styles.card}>{item}</div>;
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
};

export default ListItem;
