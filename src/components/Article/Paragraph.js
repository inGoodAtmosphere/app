import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.module.scss';

const Paragraph = ({ content }) => {
  const splittedContent = content.split('stencel');
  const createList = () => {
    const list = [];
    for (let i = 1; i < splittedContent.length - 1; i += 1) {
      list.push(splittedContent[i]);
    }
    return list;
  };
  const list = createList();
  if (list.length) {
    return (
      <>
        <p className="article__paragraph">{splittedContent[0]}</p>
        <ul>
          {list.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
        <p>{splittedContent[splittedContent.length - 2]}</p>
      </>
    );
  }
  return <p className="article__paragraph">{content}</p>;
};

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
};
export default Paragraph;
