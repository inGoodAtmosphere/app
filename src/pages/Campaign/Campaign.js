import React from 'react';
import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import { articleThumbnails } from '../../data/article-thumbnails.json';
import './campaign.scss';

const Campaign = () => (
  <main className="content campaign__content">
    <h1>Nasze artykuły</h1>
    <h2 className="campaign__h2">Tutaj przeczytasz wszystkie nasze artykuły</h2>
    {// prettier-ignore
    articleThumbnails.length
    && articleThumbnails.map((article) => {
      const link = article.header
        .replace(/ /g, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ł/g, 'l');
      return (
        <ArticleThumbnail
          key={article.header}
          thumbnail={article.thumbnail}
          header={article.header}
          description={article.description}
          tags={article.tags}
          link={`/kampania/${link}`}
        />
      );
    })
    // prettier-ignore
    }
  </main>
);

export default Campaign;
