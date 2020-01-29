import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
      });
  }, [header]);

  return article ? (
    <main className="content">
      <article className="card article__card">
        <h1 className="article__header">{header}</h1>
        {article.subHeaders.map((subHeader, i) => (
          <section key={subHeader}>
            <h2>{subHeader}</h2>
            <p>{article.contents[i]}</p>
          </section>
        ))}
      </article>
    </main>
  ) : (
    <main className="content">Ładowanie...</main>
  );
};

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ header: PropTypes.string }),
  }).isRequired,
};
export default Article;
