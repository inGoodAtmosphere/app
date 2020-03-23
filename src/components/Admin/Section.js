import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';

const Section = ({ link }) => {
  const { title } = useContext(Context);
  return (
    <section className="card">
      <h1>{title}</h1>
      <List />
      <a href={`/admin/${link}`}>Wyświetl wszystko</a>
    </section>
  );
};

Section.propTypes = {
  link: PropTypes.string.isRequired,
};

export default withContext(Section);
