import React from 'react';
import ContactList from '../../components/Contact/List';
import ContactHeaders from '../../components/Contact/Headers';

const Contact = () => {
  return (
    <main className="content contact__content">
      <ContactHeaders />
      <ContactList />
    </main>
  );
};

export default Contact;
