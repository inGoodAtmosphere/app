import React, { useState } from 'react';
import adminPropTypes from '../../utils/admin-prop-types';
import Input from '../Form/Input';
import styles from './SubPage.module.scss';
import Card from './Card';

const SubPage = ({ data }) => {
  const [textFilter, setTextFilter] = useState('');
  const keys = Object.keys(data[0]);
  const filteredData = data.filter((element) =>
    keys
      .map((key) =>
        element[key]
          .toString()
          .toLowerCase()
          .includes(
            textFilter
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/ł/g, 'l'),
          ),
      )
      .find((key) => key === true),
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
