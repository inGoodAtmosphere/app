import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';
import Head from './Head';
import Header from './Header';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import Section from './Section';
import Paragraph from './Paragraph';

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
      <main className="content" ref={container}>
        <article className="card article__card">
          <Header />

          {subHeaders
            ? // prettier-ignore
              subHeaders.map((subHeader, i) => (
                <Section subHeader={subHeader} content={contentArray[i]} />
              ))
            : contents
                .split('\r\n')
                .map((content) => (
                  <Paragraph key={content.substring(1, 12)} content={content} />
                ))}
          <p className="article__author">{author}</p>
        </article>
      </main>
    </>
  );
};

Article.propTypes = {
  setArticleHeight: PropTypes.func.isRequired,
};

export default withContext(Article);
