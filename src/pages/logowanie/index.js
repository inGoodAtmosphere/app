import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import SocialMediaBtn from '../../components/Form/SocialMediaBtn';
import Checkbox from '../../components/Form/Checkbox';
import './index.module.scss';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const data = { login, password, isRemember };

  return (
    <main className="content login__content">
      <SocialMediaBtn
        socialMedia="facebook"
        purpose="sign-in"
        endpoint="/api/signInFacebook"
      />
      <SocialMediaBtn
        socialMedia="google"
        purpose="sign-in"
        endpoint="/api/signInGoogle"
      />
      <p className="sign-in__or">lub</p>
      <Form
        data={data}
        endpoint="/api/signIn"
        submitText="Zaloguj się"
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
        <Checkbox
          ariaLabel="Zapamiętaj mnie"
          isChecked={isRemember}
          setIsChecked={setIsRemember}
          name="rememberMe"
        />
      </Form>
      <a href="/remind" className="sign-in__link">
        Nie pamiętasz hasła
      </a>
      <a href="/rejestracja" className="sign-in__link">
        Nie masz konta? Zarejestruj się
      </a>
    </main>
  );
};

export default Login;
