import React, { useState } from 'react';
import './index.moudle.scss';
import Input from './Input';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const data = { name, email, subject, content };
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/sendMail', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    // TODO uncomment this when Olivier adds errors if (json.errors.length) setMessage(json.errors);
    setMessage(json.message);
  };
  return (
    <form
      method="post"
      className="form admin__form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p>{message}</p>
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
      <button type="submit" className="form__btn admin__form__btn ">
        Zaloguj się
      </button>
    </form>
  );
};

export default Form;
