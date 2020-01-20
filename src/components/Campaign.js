import React from 'react';
import { articles } from '../data/articles.json';
import ArticleThumbnail from './ArticleThumbnail';

const Campaign = () => (
  <div>
    <h1>Nasze artykuły</h1>
    <h2>Tutaj przeczytasz wszystkie nasze artykuły</h2>
    {articles.map((article) => {
      const link = `/kampania/${article.header}`;
      return (
        <ArticleThumbnail
          key={article.header}
          thumbnail={article.thumbnail}
          header={article.header}
          description={article.description}
          link={link}
        />
      );
    })}
  </div>
);

export default Campaign;
