import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';

const Register = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState([]);
  const data = { login, password };

  return (
    <Form
      data={data}
      endpoint="/api/login"
      submitText="Zaloguj się"
      value={{ errors, setErrors }}
    >
      <Input
        name="email"
        id="email"
        label="Email"
        onChange={setEmail}
        value={email}
      />

      <Input
        name="login"
        id="login"
        label="Login"
        onChange={setLogin}
        value={login}
      />
      <Input
        name="password"
        id="password"
        type="password"
        label="Hasło"
        onChange={setPassword}
        value={password}
      />
      <Input
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        label="Hasło"
        onChange={setConfirmPassword}
        value={confirmPassword}
      />
      <Input
        name="firstName"
        id="firstName"
        label="Imię"
        onChange={setFirstName}
        value={firstName}
      />
      <Input
        name="lastName"
        id="lastName"
        label="Nazwisko"
        onChange={setLastName}
        value={lastName}
      />
      <Input
        name="newsletter"
        id="newsletter"
        type="checkbox"
        label="Newsletter"
        onChange={setNewsletter}
        value={newsletter}
      />
    </Form>
  );
};

export default Register;
