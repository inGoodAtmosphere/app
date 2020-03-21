import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import fetch from 'isomorphic-unfetch';
import ArticleThumbnail from '../../components/ArticleThumbnail';

const Campaign = ({ data }) => {
  return (
    <main className="content campaign__content">
      <h1>Nasze artykuły</h1>
      <h2 className="campaign__h2">
        Tutaj przeczytasz wszystkie nasze artykuły
      </h2>
      {data.length &&
        data.map((article) => {
          const tags = article.tags.split(', ');
          return (
            <ArticleThumbnail
              key={article.id}
              imagesFolder={article.images}
              header={article.header}
              description={article.description}
              tags={tags}
            />
          );
        })}
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/articles/thumbnails');
  const data = await res.json();
  return { props: { data } };
}

Campaign.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
};

export default Campaign;
