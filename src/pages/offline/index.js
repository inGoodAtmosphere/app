import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Error = dynamic(() => import('../../components/Error'));

const Offline = ({ offline }) => {
  return <Error status={0} text={offline} />;
};

export async function getStaticProps() {
  const offline = 'Jesteś offline';
  return { props: { offline } };
}

Offline.propTypes = {
  offline: PropTypes.string.isRequired,
};

export default Offline;
