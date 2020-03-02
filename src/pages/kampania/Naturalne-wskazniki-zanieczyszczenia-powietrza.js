import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Article from '../../components/Article';
import { logEvent } from '../../utils/analytics';
import ArticleContext from '../../components/Article/Context';

const Bioindicators = () => {
  const router = useRouter();
  const header = router.pathname.replace('/kampania/', '');
  const [article, setArticle] = useState('');
  useEffect(() => {
    fetch(`/data/articles/${header}.json`)
      .then((resp) => resp.json())
      .then((json) => {
        setArticle(json);
      })
      .catch(() => {
        logEvent('Error', 'Article crashed');
        router.push('/404');
      });
  }, []);
  return (
    article && (
      <ArticleContext.Provider value={article}>
        <Article />
      </ArticleContext.Provider>
    )
  );
};

export default Bioindicators;
