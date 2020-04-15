import React, { useState } from 'react';
import adminPropTypes from '../../utils/admin-prop-types';
import TextFilter from '../TextFilter/TextFilter';
import styles from './SubPage.module.scss';

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
      <main className={styles.content}>
        <TextFilter textFilter={textFilter} setTextFilter={setTextFilter} />
        {data.map((element) => (
          <div key={element.id} className={styles.card}>
            {Object.keys(element).map((key) => (
              <p key={key}>{element[key]}</p>
            ))}
          </div>
        ))}
      </main>
    </>
  );
};

SubPage.propTypes = adminPropTypes;

export default SubPage;
