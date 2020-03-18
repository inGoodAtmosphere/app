import React from 'react';
import ArticleContent from '../../components/Article';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Article = () => {
  const { data, isLoaded, error } = useFetch('/api/articles/bioindicators');
  if (error) return <Error message={error.message} />;
  return isLoaded ? <Loading /> : <ArticleContent value={data} />;
};

export default Article;
