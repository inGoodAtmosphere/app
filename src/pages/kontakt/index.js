import React from 'react';
import ContactList from '../../components/Contact/List';
import ContactHeaders from '../../components/Contact/Headers';
import Form from '../../components/Form';

const Contact = () => {
  return (
    <main className="content contact__content">
      <ContactHeaders />
      <ContactList />
      <Form />
    </main>
  );
};

export default Contact;
