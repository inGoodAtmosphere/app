import React, { useState } from 'react';
import ContactList from '../../components/Contact/List';
import ContactHeaders from '../../components/Contact/Headers';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const data = { name, email, subject, content };
  return (
    <main className="content contact__content">
      <ContactHeaders />
      <ContactList />
      <Form data={data} endpoint="/api/sendMail">
        <Input
          name="name"
          label="Imię i Nazwisko"
          value={name}
          onChange={setName}
        />
        <Input
          name="email"
          label="Adres e-mail"
          value={email}
          onChange={setEmail}
        />
        <Input
          name="subject"
          label="Temat"
          value={subject}
          onChange={setSubject}
        />
        <Input
          name="content"
          label="Treść"
          value={content}
          onChange={setContent}
        />
      </Form>
    </main>
  );
};

export default Contact;
