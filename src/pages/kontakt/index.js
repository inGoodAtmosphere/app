import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import TextArea from '../../components/Form/TextArea';
import styles from './index.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);
  const data = { name, email, subject, content };

  return (
    <main className={styles.content}>
      <h1>Skontaktuj się z nami</h1>
      <h2>
        Masz pomysł jak usprawnić działanie naszej strony? Jesteś zainteresowany
        naszym czujnikiem? Wypełnij poniższy formularz kontaktowy
      </h2>
      <Form
        data={data}
        endpoint="/api/sendMail"
        submitText="Wyślij"
        value={{ errors, setErrors }}
      >
        <Input
          name="name"
          id="name"
          label="Imię i Nazwisko"
          value={name}
          onChange={setName}
        />
        <Input
          name="email"
          id="email"
          label="Adres e-mail"
          value={email}
          onChange={setEmail}
        />
        <Input
          name="subject"
          id="subject"
          label="Temat (opcjonalnie)"
          value={subject}
          onChange={setSubject}
        />
        <TextArea
          name="content"
          id="content"
          label="Treść"
          value={content}
          onChange={setContent}
          type="textarea"
        />
      </Form>
      {/* prettier-ignore */}
      <p className={styles.text}>
        lub skontaktuj się bezpośrednio na
        {' '}
        <a href="mailto:ingoodatmosphere@gmail.com" className={styles.link}>
          ingoodatmosphere@gmail.com
        </a>
      </p>
    </main>
  );
};

export default Contact;
