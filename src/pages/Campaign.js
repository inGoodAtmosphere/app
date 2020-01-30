import React, { useState } from 'react';
import ArticleThumbnail from '../components/ArticleThumbnail';
import { articleThumbnails } from '../data/article-thumbnails.json';
import TextFilter from '../components/TextFilter';
import Warning from '../components/Warning';

const Campaign = () => {
  const [textFilter, setTextFilter] = useState('');
  // prettier-ignore
  const filteredArticles = articleThumbnails.filter((article) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    article.keywords.find((keyword) => keyword.includes(textFilter)));
  return (
    <main className="content">
      <h1>Nasze artykuły</h1>
      <h2 className="campaign__h2">
        Tutaj przeczytasz wszystkie nasze artykuły
      </h2>
      <TextFilter setTextFilter={setTextFilter} />
      {/*  prettier-ignore */}
      <div className="thumbnail-container">
        {
          filteredArticles.length
            ? (filteredArticles.map((article) => {
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
            })) : <Warning />
        }
      </div>
    </main>
  );
};

export default Campaign;
