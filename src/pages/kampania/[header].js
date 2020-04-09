import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import ArticleContent from '../../components/Article';
import Loading from '../../components/Loading';
import Popup from '../../components/Popup';

const Article = ({ data }) => {
  const router = useRouter();
  const [articleHeight, setArticleHeight] = useState();
  if (router.isFallback) return <Loading />;
  return (
    <>
      <Popup articleHeight={articleHeight} />
      <ArticleContent value={data[0]} setArticleHeight={setArticleHeight} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://obx88.usermd.net/api/articles');
  const thumbnails = await res.json();
  const paths = thumbnails.map((thumbnail) => ({
    params: { header: thumbnail.link },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://obx88.usermd.net/api/articles/${params.header}`,
  );
  const data = await res.json();
  return { props: { data } };
}

Article.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
};
export default Article;
