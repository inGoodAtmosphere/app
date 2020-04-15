import React, { useState } from 'react';
import adminPropTypes from '../../utils/admin-prop-types';
import Input from '../Form/Input';
import styles from './SubPage.module.scss';
import Card from './Card';

const SubPage = ({ data }) => {
  const [textFilter, setTextFilter] = useState('');
  const filteredData = data.filter((element) =>
    Object.values(element)
      .map((value) => value.toString())
      .find(() => '2'),
  );
  console.log(
    data.map((element) =>
      Object.values(element)
        .map((value) => value.toString())
        .find((el) => el === '13.2839'),
    ),
  );
  console.log(filteredData);
  return (
    <>
      <div className={styles.wrapper}>
        <Input
          className={styles.search}
          name="filter"
          id="filter"
          type="search"
          value={textFilter}
          placeholder="Wyszukaj artykuł lub słowa kluczowe"
          onChange={setTextFilter}
        />
        <main className={styles.content}>
          {data.map((element) => (
            <Card element={element} />
          ))}
        </main>
      </div>
    </>
  );
};

SubPage.propTypes = adminPropTypes;

export default SubPage;
