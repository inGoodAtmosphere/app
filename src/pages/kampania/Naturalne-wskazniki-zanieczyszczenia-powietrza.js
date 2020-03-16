import React from 'react';
import ArticleContent from '../../components/Article';
import useFetch from '../../hooks/useFetch';

const Article = () => {
  const { data, isLoaded, error } = useFetch('/api/articles/bioindicators');
  if (error) return <p>{error.message}</p>;
  return isLoaded ? <p>Ładowanie</p> : <ArticleContent value={data} />;
};

export default Article;
