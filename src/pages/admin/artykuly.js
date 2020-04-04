import React from 'react';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Articles = ({ articles }) => {
  return <SubPage data={articles} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();
  return { props: { articles } };
}

Articles.propTypes = adminPropTypes;

export default Articles;
