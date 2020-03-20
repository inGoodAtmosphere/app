import React from 'react';
import { useRouter } from 'next/router';
import ArticleContent from '../../components/Article';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Article = () => {
  const router = useRouter();
  const { header } = router.query;
  const { data, isLoaded, error } = useFetch(`/api/articles/${header}`);
  if (error) return <Error message={error.message} />;
  return isLoaded ? <Loading /> : <ArticleContent value={data[0]} />;
};

export default Article;
