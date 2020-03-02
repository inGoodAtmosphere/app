import React, { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Context from '../../utils/Context';

const ArticleHead = () => {
  const {
    publishDate,
    author,
    section,
    header,
    description,
    image,
  } = useContext(Context);
  const router = useRouter();
  return (
    <Head>
      <meta
        key="og:url"
        property="og:url"
        content={`https://www.ingoodatmosphere.com/kampania/${router.pathname}`}
      />
      <meta key="og:type" property="og:type" content="article" />
      <meta
        key="article:published_time"
        property="article:published_time"
        content={publishDate}
      />
      <meta key="article:author" property="article:author" content={author} />
      <meta
        key="article:section"
        property="article:section"
        content={section}
      />
      <meta key="og:title" property="og:title" content={header} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta
        key="og:image"
        property="og:image"
        content={`https://ingoodatmosphere.com/${image[1]}`}
      />
    </Head>
  );
};

export default ArticleHead;
