import React, { useContext } from 'react';
import Context from '../../utils/Context';
import styles from './Card.module.scss';

const Card = () => {
  const { name, role, description } = useContext(Context);
  return (
    <>
      <div className={styles.card} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.role}>{role}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};

export default Card;
