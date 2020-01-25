import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ArticleContext from '../contexts/article-context';

const Article = ({ header, subHeaders, contents }) => {
  const { state, dispatch } = useContext(ArticleContext);
  console.log(state);
  return (
    <div className="card">
      {/* <h1 className="article__header">{header}</h1>
      {subHeaders.map((subHeader, i) => (
        <article>
          <h2>{subHeader}</h2>
          <p>{contents[i]}</p>
        </article>
      ))} */}
    </div>
  );
};

// Article.propTypes = {
//   header: PropTypes.string.isRequired,
//   subHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
//   contents: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
export default Article;
