import React, { useContext } from 'react';
import Context from '../../utils/Context';
import styles from './Header.module.scss';

const ArticleTitle = () => {
  const { header, images } = useContext(Context);
  const imagesPath = `/data/articles/${images}/`;
  return (
    <div className={styles.header}>
      <h1 className={styles.text}>{header}</h1>
      <img
        className={styles.image}
        src={`${imagesPath}1280.jpg`}
        alt="Miniaturka artykułu"
        srcSet={`${imagesPath}768.jpg 768w, ${imagesPath}1280.jpg 1280w, ${imagesPath}1920.jpg 1920w`}
      />
    </div>
  );
};

export default ArticleTitle;
