import React, { useContext } from 'react';
import Context from '../../utils/Context';
import './header.module.scss';

const ArticleTitle = () => {
  const { header, image } = useContext(Context);
  return (
    <div className="article__header">
      <h1 className="article__header__text">{header}</h1>
      <img
        className="article__header__img"
        src={image[1]}
        alt="Miniaturka artykułu"
        srcSet={`${image[0]} 768w, ${image[1]} 1280w, ${image[2]} 1920w, ${image[3]} 5319w`}
      />
    </div>
  );
};

export default ArticleTitle;
