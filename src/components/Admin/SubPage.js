import React from 'react';
import adminPropTypes from '../../utils/admin-prop-types';

const SubPage = ({ data }) => {
  return (
    <main className="content admin__content">
      {data.map((element) =>
        Object.keys(element).map((key) => <p key={key}>{element[key]}</p>),
      )}
    </main>
  );
};

SubPage.propTypes = adminPropTypes;

export default SubPage;
