import React from 'react';
import ArticleThumbnail from '../components/ArticleThumbnail';
import { articleThumbnails } from '../data/article-thumbnails.json';

const Campaign = () => (
  <main className="content">
    <h1>Nasze artykuły</h1>
    <h2 className="campaign__h2">Tutaj przeczytasz wszystkie nasze artykuły</h2>
    <div className="thumbnail-container">
      {articleThumbnails.map((article) => {
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
  </main>
);

export default Campaign;
