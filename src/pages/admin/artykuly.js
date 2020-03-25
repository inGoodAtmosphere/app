import React from 'react';

const Articles = ({ articles }) => {
  return articles.map((article) => (
    <div className="card" key={article.id}>
      {article.id}
    </div>
  ));
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();
  return { props: { articles } };
}

export default Articles;
