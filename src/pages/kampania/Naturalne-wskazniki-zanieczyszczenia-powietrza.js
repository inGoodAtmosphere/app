import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import './article.module.scss';
import { logEvent } from '../../utils/analytics';

// prettier-ignore
const Article = () => {
  const router = useRouter()
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
      <>
        <Head>
          <meta
            key="og:url"
            property="og:url"
            content="https://www.ingoodatmosphere.com/kampania/Naturalne-wskazniki-zanieczyszczenia-powietrza"
          />
          <meta key="og:type" property="og:type" content="article" />
          <meta
            key="article:published_time"
            property="article:published_time"
            content="2020-02-19"
          />
          <meta
            key="article:author"
            property="article:author"
            content="Julia Papée"
          />
          <meta
            key="article:section"
            property="article:section"
            content="Ekologia"
          />
          <meta
            key="og:title"
            property="og:title"
            content="Naturalne wskaźniki zanieczyszczenia powietrza"
          />
          <meta
            key="og:description"
            property="og:description"
            content="Aby mierzyć zanieczyszczenie powietrza wcale nie potrzebujemy sprzętu za duże pieniądze. Dowiedz się czym są bioindykatory i jak można dzięki nim określić jakość powietrza w okolicy"
          />
          <meta
            key="og:image"
            property="og:image"
            content="https://ingoodatmosphere.com/data/articles/bioindicators/bioindicators-1280.jpg"
          />
        </Head>
        <main className="content">
          <article className="card article__card">
            <div className="article__header">
              <h1 className="article__header__text">{article.header}</h1>
              <img
                className="article__header__img"
                src={article.image[1]}
                alt="Miniaturka artykułu"
                srcSet={`${article.image[0]} 768w, ${article.image[1]} 1280w, ${article.image[2]} 1920w, ${article.image[3]} 5319w`}
              />
            </div>
            {article.subHeaders.length
              ? article.subHeaders.map((subHeader, i) => (
                <section key={subHeader}>
                  <h2>{subHeader}</h2>
                  <p>{article.contents[i]}</p>
                </section>
                ))
              : article.contents[0].split('\n').map((paragraph) => (
                <p
                  className="article__paragraph"
                  key={paragraph.substring(1, 12)}
                >
                  {paragraph}
                </p>
                ))}
          </article>
        </main>
      </>
    )
  );
};

export default Article;
