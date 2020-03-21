import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import ArticleContent from '../../components/Article';

const Article = ({ data }) => {
  return <ArticleContent value={data[0]} />;
};
export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/articles');
  const thumbnails = await res.json();
  const paths = thumbnails.map((thumbnail) => ({
    params: { header: thumbnail.link },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/articles/${params.header}`,
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
