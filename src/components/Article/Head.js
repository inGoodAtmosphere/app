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
    imagesFolder,
  } = useContext(Context);
  const router = useRouter();
  return (
    <Head>
      <meta name="robots" content="max-snippet:-1, max-image-preview:large" />
      <meta
        key="og:url"
        property="og:url"
        content={`https://ingoodatmosphere.com${router.asPath}`}
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
        content={`https://ingoodatmosphere.com/data/articles/${imagesFolder}/og.jpg`}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content="inGoodAtmosphere" />
      <meta
        name="twitter:image"
        content={`https://ingoodatmosphere.com/data/articles/${imagesFolder}/og.jpg`}
      />
      <title key="title">{header}</title>
    </Head>
  );
};

export default ArticleHead;
