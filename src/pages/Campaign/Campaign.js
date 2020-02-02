import React, { useState } from 'react';
import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import { articleThumbnails } from '../../data/article-thumbnails.json';
import TextFilter from '../../components/TextFilter/TextFilter';
import Warning from '../../components/Warning/Warning';
import './campaign.scss';

const Campaign = () => {
  const [textFilter, setTextFilter] = useState('');
  // prettier-ignore
  const filteredArticles = articleThumbnails.filter(
    (article) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      article.tags.find((tag) => tag.includes(textFilter))
      || article.header.toLowerCase().includes(textFilter),
  );
  return (
    <main className="content">
      <h1>Nasze artykuły</h1>
      <h2 className="campaign__h2">
        Tutaj przeczytasz wszystkie nasze artykuły
      </h2>
      <TextFilter setTextFilter={setTextFilter} textFilter={textFilter} />
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
                  tags={article.tags}
                  link={link}
                  setTextFilter={setTextFilter}
                />
              );
            })) : <Warning />
        }
      </div>
    </main>
  );
};

export default Campaign;
