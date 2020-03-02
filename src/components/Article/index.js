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
  return (
    <>
      <Head />
      <main className="content">
        <article className="card article__card">
          <Header />

          {subHeaders.length
            ? // prettier-ignore
              subHeaders.map((subHeader, i) => (
                <Section subHeader={subHeader} content={contents[i]} />
              ))
            : contents[0]
                .split('\n')
                .map((content) => (
                  <Paragraph content={content} key={content.substring(1, 12)} />
                ))}
        </article>
      </main>
    </>
  );
};

export default withContext(Article);
