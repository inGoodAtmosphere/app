import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import ArticleContent from '../../components/Article';
import Loading from '../../components/Loading';
import Popup from '../../components/Popup';

const Article = () => {
  const router = useRouter();
  const [articleHeight, setArticleHeight] = useState(0);
  if (router.isFallback) return <Loading />;
  return (
    <>
      <Popup articleHeight={articleHeight} />
      <ArticleContent setArticleHeight={setArticleHeight} />
    </>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch('https://ingoodatmosphere.com/api/articles');
//   const thumbnails = await res.json();
//   const paths = thumbnails.map((thumbnail) => ({
//     params: { header: thumbnail.link },
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  return { props: { header: params.header } };
}

export default Article;
