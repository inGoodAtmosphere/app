import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import ArticleContent from '../../components/Article';
import Loading from '../../components/Loading';

const Article = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) return <Loading />;
  return <ArticleContent value={data[0]} />;
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
