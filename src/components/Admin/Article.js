import React from 'react';
import PropTypes from 'prop-types';
import EditBtn from './EditBtn';

const Article = ({ data }) => {
  return (
    <>
      <h2>{data.header}</h2>
      <EditBtn />
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
