import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ArticleContent from '../../components/Article';
import { logEvent } from '../../utils/analytics';

const Article = () => {
  const router = useRouter();
  const { header } = router.query;
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
  return article && <ArticleContent value={article} />;
};

export default Article;
