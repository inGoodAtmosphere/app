import React from 'react';
import fetch from 'isomorphic-unfetch';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Articles = ({ data, articles }) => {
  return <SubPage data={data} articles={articles} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/articles');
  const data = await res.json();
  const articles = 'articles';
  return { props: { data, articles } };
}

Articles.propTypes = adminPropTypes;

export default Articles;
