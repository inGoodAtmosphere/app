import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Section from '../../components/Admin/Section';
import './index.module.scss';

const Admin = ({ notifications, users, locations, articles }) => {
  return (
    <main className="content admin__content">
      <Section
        link="powiadomienia"
        value={{ data: notifications, title: 'Powiadomienia' }}
      />
      <Section
        link="uzytkownicy"
        value={{ data: users, title: 'Użytkownicy' }}
      />
      <Section link="mierniki" value={{ data: locations, title: 'Mierniki' }} />
      <Section link="artykuly" value={{ data: articles, title: 'Artykuły' }} />
    </main>
  );
};
export async function getServerSideProps() {
  const endpoints = ['notifications', 'users', 'locations', 'articles'];
  const fetchData = async (endpoint) =>
    fetch(`http://localhost:3000/api/${endpoint}`).then((res) => res.json());
  const res = await Promise.all(endpoints.map(fetchData));
  const slicedRes = res.map((endpoint) => endpoint.slice(0, 3));
  const [notifications, users, locations, articles] = slicedRes;

  return { props: { notifications, users, locations, articles } };
}

Admin.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ).isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ).isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ).isRequired,
};
export default Admin;
