import React from 'react';
import ArticleThumbnail from '../../components/ArticleThumbnail';
import useFetch from '../../hooks/useFetch';

const Campaign = () => {
  const { data, isLoaded, error } = useFetch('/api/article-thumbnails');
  return (
    <main className="content campaign__content">
      <h1>Nasze artykuły</h1>
      <h2 className="campaign__h2">
        Tutaj przeczytasz wszystkie nasze artykuły
      </h2>

      {error && <p>{error}</p>}
      {isLoaded ? (
        <p>Ładowanie</p>
      ) : (
        data.length &&
        data.map((article) => {
          return (
            <ArticleThumbnail
              key={article.header}
              imagesFolder={article.imagesFolder}
              header={article.header}
              description={article.description}
              tags={article.tags}
            />
          );
        })
      )}
    </main>
  );
};

export default Campaign;
