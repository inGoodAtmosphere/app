import React from 'react';
import ArticleThumbnail from '../../components/ArticleThumbnail';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Campaign = () => {
  const { data, isLoaded, error } = useFetch('/api/article-thumbnails');
  if (isLoaded) return <Loading />;
  if (error) return <Error message={error.message} />;
  return (
    <main className="content campaign__content">
      <h1>Nasze artykuły</h1>
      <h2 className="campaign__h2">
        Tutaj przeczytasz wszystkie nasze artykuły
      </h2>
      {data.length &&
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
        })}
    </main>
  );
};

export default Campaign;
