import React, { useState } from 'react';
import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import { articleThumbnails } from '../../data/article-thumbnails.json';
import TextFilter from '../../components/TextFilter/TextFilter';
import Warning from '../../components/Warning/Warning';
import './campaign.scss';

const Campaign = () => {
  const [textFilter, setTextFilter] = useState('');
  const tags = ['smog', 'natura'];
  // prettier-ignore
  const filteredArticles = articleThumbnails.filter(
    (article) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      article.tags.find((tag) => tag.includes(textFilter))
      || article.header.toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ł/g, 'l')
        .includes(textFilter),
  );
  return (
    <main className="content campaign__content">
      <h1>Nasze artykuły</h1>
      <h2 className="campaign__h2">
        Tutaj przeczytasz wszystkie nasze artykuły
      </h2>
      <TextFilter setTextFilter={setTextFilter} textFilter={textFilter} />
      <div className="campaign__tags">
        {tags.map((tag) => (
          <button
            className="campaign__tag__btn"
            key={tag}
            type="button"
            onClick={() => setTextFilter(tag)}
          >
            {`#${tag}`}
          </button>
        ))}
      </div>
      {filteredArticles.length ? (
        filteredArticles.map((article) => {
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
              setTextFilter={setTextFilter}
            />
          );
        })
      ) : (
        <Warning />
      )}
    </main>
  );
};

export default Campaign;
