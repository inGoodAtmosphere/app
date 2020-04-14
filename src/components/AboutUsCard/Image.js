import React, { useContext } from 'react';
import Context from '../../utils/Context';
import styles from './Image.module.scss';

const Image = () => {
  const { name, image } = useContext(Context);
  return (
    <div className={styles.wrapper}>
      <img
        src={image}
        alt={name}
        className={`${styles.image} ${styles[name]}`}
      />
    </div>
  );
};

export default Image;
