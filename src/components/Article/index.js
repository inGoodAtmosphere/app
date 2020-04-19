import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import Header from './Header';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import Section from './Section';
import Paragraph from './Paragraph';
import styles from './index.module.scss';

const Article = ({ setArticleHeight }) => {
  const { subHeaders, contents, author } = useContext(Context);
  const contentArray = contents.split('okoń');
  const container = useRef(null);
  useEffect(() => {
    setArticleHeight(container.current.offsetHeight);
  }, []);

  return (
    <>
      <Head />
      <main className={styles.content} id="content" ref={container}>
        <article className={styles.card}>
          <Header />

          {subHeaders
            ? // prettier-ignore
              subHeaders.map((subHeader, i) => (
                <Section className={styles.paragraph} subHeader={subHeader} content={contentArray[i]} key={subHeader} />
              ))
            : contents
                .split('\r\n')
                .map((content) => (
                  <Paragraph
                    key={content.substring(1, 12)}
                    content={content}
                    className={styles.paragraph}
                  />
                ))}
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
