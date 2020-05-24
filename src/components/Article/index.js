import React, { useContext, useRef, useEffect } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import Head from './Head';
import Header from './Header';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import styles from './index.module.scss';

const Article = ({ setArticleHeight }) => {
  const { contents, author } = useContext(Context);
  const container = useRef(null);
  useEffect(() => {
    setArticleHeight(container.current.offsetHeight);
  }, []);

  return (
    <>
      <Head />
      <main className={styles.content} id="content" ref={container}>
        <article className={styles.article}>
          <Header />
          {parse(contents)}
          <p className={styles.author}>{author}</p>
        </article>
      </main>
    </>
  );
};

Article.propTypes = {
  setArticleHeight: PropTypes.func.isRequired,
};

export default withContext(Article);
