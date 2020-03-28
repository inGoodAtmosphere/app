import React from 'react';
import PropTypes from 'prop-types';
import './paragraph.module.scss';

const Paragraph = ({ content }) => {
  const listContent = content.split('stencel');
  const reg = /\$link:((\w|\s)+)\$((\w|-|\/|:|.|\?)+)(?:\${1})/g;
  const linkContent = content.split(reg);
  const createContent = (text) => {
    const list = [];
    for (let i = 1; i < text.length; i += 1) {
      list.push(text[i]);
    }
    return list;
  };
  const list = createContent(listContent);
  const link = createContent(linkContent);
  if (link.length) {
    // linkContent[3] because regex group looks like this: [0]: paragraph [1]: link text [3]: link href and [5] is a optional rest of the paragraph
    return (
      <p className="article__paragraph">
        {linkContent[0]}
        <a
          className="article__paragraph__link"
          href={linkContent[3]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkContent[1]}
        </a>
        {linkContent[5]}
      </p>
    );
  }
  if (list.length) {
    return (
      <>
        <p className="article__paragraph">{listContent[0]}</p>
        <ul className="article__paragraph__list">
          {list.map((listItem) => (
            <li key={listItem.substr(1, 12)}>{listItem}</li>
          ))}
        </ul>
      </>
    );
  }
  return <p className="article__paragraph">{content}</p>;
};

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
};
export default Paragraph;
