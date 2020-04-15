/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './EditBtn.module.scss';

const EditBtn = () => {
  return (
    <Link href="/admin">
      <a className={styles.button}>Edytuj</a>
    </Link>
  );
};

export default EditBtn;
