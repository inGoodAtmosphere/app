import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ content, className }) => {
  const listContent = content.split('stencel');
  const reg = /\$link:([(\w|\s)]+)\$([\w-/|:|.|?]+)\$*/gm;
  const linkContent = content.split(reg);
  const createList = (text) => {
    const list = [];
    for (let i = 1; i < text.length; i += 1) {
      list.push(text[i]);
    }
    return list;
  };
  const list = createList(listContent);
  if (linkContent.length > 1) {
    // linkContent[3] because regex group looks like this: [0]: paragraph [1]: link text [2]: link href and [3] is a optional rest of the paragraph
    return (
      <p className={className}>
        {linkContent[0]}
        <a
          className={styles.link}
          href={linkContent[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkContent[1]}
        </a>
        {linkContent[3]}
      </p>
    );
  }
  if (list.length) {
    return (
      <>
        <p className={className}>{listContent[0]}</p>
        <ul className={styles.list}>
          {list.map((listItem) => (
            <li key={listItem.substr(1, 12)}>{listItem}</li>
          ))}
        </ul>
      </>
    );
  }
  return <p className={className}>{content}</p>;
};

Paragraph.defaultProps = {
  className: '',
};

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Paragraph;
