import React from 'react';
import SubPage from '../../components/Admin/SubPage';
import adminPropTypes from '../../utils/admin-prop-types';

const Articles = ({ data }) => {
  return <SubPage data={data} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/articles');
  const data = await res.json();
  return { props: { data } };
}

Articles.propTypes = adminPropTypes;

export default Articles;
