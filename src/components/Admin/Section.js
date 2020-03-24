import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import './section.modules.scss';

const Section = ({ link }) => {
  const { title } = useContext(Context);
  return (
    <section className={`card admin__section admin__section__${link}`}>
      <h1 className="admin__section__header">{title}</h1>
      <List />
      <a href={`/admin/${link}`} className="admin__section__link">
        Wyświetl wszystko
      </a>
    </section>
  );
};

Section.propTypes = {
  link: PropTypes.string.isRequired,
};

export default withContext(Section);
