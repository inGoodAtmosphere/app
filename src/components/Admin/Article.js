import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ data }) => {
  return (
    <>
      <h2>{data.header}</h2>
    </>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    header: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    images: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};

export default Article;
