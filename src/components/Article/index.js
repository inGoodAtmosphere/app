import React, { useContext } from 'react';
import './index.module.scss';
import Head from './Head';
import Header from './Header';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import Section from './Section';
import Paragraph from './Paragraph';

const Article = () => {
  const { subHeaders, contents } = useContext(Context);
  const contentArray = contents.split('okoń');
  return (
    <>
      <Head />
      <main className="content">
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
        </article>
      </main>
    </>
  );
};

export default withContext(Article);
