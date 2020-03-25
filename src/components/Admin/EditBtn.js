/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import './edit-btn.module.scss';

const EditBtn = () => {
  return (
    <Link href="/admin">
      <a className="admin__section__edit-btn">Edytuj</a>
    </Link>
  );
};

export default EditBtn;
