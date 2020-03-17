import React from 'react';
import ArticleContent from '../../components/Article';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';

const Article = () => {
  const { data, isLoaded, error } = useFetch('/api/articles/bioindicators');
  if (error) return <p>{error.message}</p>;
  return isLoaded ? <Loading /> : <ArticleContent value={data} />;
};

export default Article;
