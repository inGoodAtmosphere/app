import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import ArticleThumbnail from '../../components/ArticleThumbnail';
import Loading from '../../components/Loading';
import styles from './index.module.scss';

const Campaign = () => {
  const router = useRouter();
  const [articles, setArticles] = useState(null);
  if (router.isFallback) return <Loading />;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
    };
    fetchData();
  }, []);
  return (
    <main className={styles.content}>
      <h1>Nasze artykuły</h1>
      <h2 className={styles.h2}>Tutaj przeczytasz wszystkie nasze artykuły</h2>
      {articles &&
        articles.map((article) => {
          const tags = article.tags.split(', ');
          return (
            <ArticleThumbnail
              key={article.id}
              images={article.images}
              header={article.header}
              subHeader={article.subHeaders}
              description={article.description}
              tags={tags}
              link={article.link}
            />
          );
        })}
    </main>
  );
};

export default Campaign;
