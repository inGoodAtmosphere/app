import React, { useContext } from 'react';
import ListItem from './ListItem';
import Context from '../../utils/Context';
import styles from './List.module.scss';

const List = () => {
  const { data } = useContext(Context);
  const setItem = () => {
    return data.map((element) => {
      return <ListItem key={element.id} id={element.id} data={element} />;
    });
  };
  const item = setItem();
  return <div className={styles.list}>{item}</div>;
};

export default List;
