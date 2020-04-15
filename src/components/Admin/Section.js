/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import List from './List';
import withContext from '../../utils/withContext';
import Context from '../../utils/Context';
import styles from './Section.module.scss';

const Section = ({ link }) => {
  const { title } = useContext(Context);
  return (
    <section className={`${styles.section} ${styles[link]}`}>
      <h1 className={styles.header}>{title}</h1>
      <List />
      <Link href={`/admin/${link}`}>
        <a className={styles.link}>Wyświetl wszystko</a>
      </Link>
    </section>
  );
};

Section.propTypes = {
  link: PropTypes.string.isRequired,
};

export default withContext(Section);
