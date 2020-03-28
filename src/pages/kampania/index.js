import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import ArticleThumbnail from '../../components/ArticleThumbnail';
import Loading from '../../components/Loading';

const Campaign = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) return <Loading />;
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
              images={article.images}
              header={article.header}
              description={article.description}
              tags={tags}
              link={article.link}
            />
          );
        })}
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://ingoodatmosphere.com/api/articles');
  const data = await res.json();
  return { props: { data } };
}

Campaign.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
};

export default Campaign;
