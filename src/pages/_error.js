import React from 'react';
import PropTypes from 'prop-types';
import Error from '../components/Error';

const ErrorPage = ({ statusCode }) => (
  <Error status={statusCode} text="Coś poszło nie tak" />
);
export async function getStaticProps({ res, err }) {
  const setStatus = () => {
    if (res) {
      return res.statusCode;
    }
    if (err) {
      return err.statusCode;
    }
    return 404;
  };
  const statusCode = setStatus();
  return { props: { statusCode } };
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default ErrorPage;
