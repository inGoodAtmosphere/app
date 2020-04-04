import React, { useState } from 'react';
import adminPropTypes from '../../utils/admin-prop-types';
import TextFilter from '../TextFilter/TextFilter';

const SubPage = ({ data }) => {
  const [textFilter, setTextFilter] = useState('');
  return (
    <main className="content admin__content">
      <TextFilter textFilter={textFilter} setTextFilter={setTextFilter} />
      {data.map((element) => (
        <div key={element.id} className="card admin__subpage__card">
          {Object.keys(element).map((key) => (
            <p key={key}>{element[key]}</p>
          ))}
        </div>
      ))}
    </main>
  );
};

SubPage.propTypes = adminPropTypes;

export default SubPage;
