import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import './article.module.scss';
import { logEvent } from '../../utils/analytics';

// prettier-ignore
// !BUG: When refresh browser move to 404 page
// ?FIX: GA show single article
const Article = () => {
  const router = useRouter()
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
  return (
    article && (
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
          {article.subHeaders
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
    )
  );
};

export default Article;
