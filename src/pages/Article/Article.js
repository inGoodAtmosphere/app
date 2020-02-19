import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import './article.scss';
import history from '../../history/history';

// prettier-ignore
const Article = ({
  match: {
    params: { header },
  },
}) => {
  const [article, setArticle] = useState('');
  useEffect(() => {
    fetch(`/data/articles/${header}.json`)
      .then((resp) => resp.json())
      .then((json) => {
        setArticle(json);
      })
      .catch(() => {
        ReactGA.event({
          category: 'Error',
          action: 'Article crashed',
        });
        history.push('/404');
      });
  }, [header]);
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

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ header: PropTypes.string }),
  }).isRequired,
};
export default Article;
