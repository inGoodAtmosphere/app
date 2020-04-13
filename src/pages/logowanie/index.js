import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';
// import './index.module.scss';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const data = { login, password };

  return (
    <main className="content register__content">
      <Form
        data={data}
        endpoint="/api/signIn"
        submitText="Zarejestruj się"
        value={{ errors, setErrors }}
      >
        <Input
          name="login"
          id="login"
          label="Email lub login"
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
      </Form>
    </main>
  );
};

export default Login;
