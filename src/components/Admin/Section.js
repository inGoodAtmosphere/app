/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
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
      <Link href={`/admin/${link}`}>
        <a className="admin__section__link">Wyświetl wszystko</a>
      </Link>
    </section>
  );
};

Section.propTypes = {
  link: PropTypes.string.isRequired,
};

export default withContext(Section);
