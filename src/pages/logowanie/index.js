import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import SocialMediaBtn from '../../components/Form/SocialMediaBtn';
import Checkbox from '../../components/Form/Checkbox';
import styles from './index.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const data = { email, password, isRemember };

  return (
    <main className={styles.content}>
      <SocialMediaBtn
        socialMedia="facebook"
        purpose="sign-in"
        endpoint="/api/signIn/facebook"
      />
      <SocialMediaBtn
        socialMedia="google"
        purpose="sign-in"
        endpoint="/api/signIn/google"
      />
      <p className={styles.or}>lub</p>
      <Form
        data={data}
        endpoint="/api/signIn"
        submitText="Zaloguj się"
        value={{ errors, setErrors }}
      >
        <Input
          name="email"
          id="email"
          label="Email lub login"
          setState={setEmail}
          value={email}
        />
        <Input
          name="password"
          id="password"
          type="password"
          label="Hasło"
          setState={setPassword}
          value={password}
        />
        <Checkbox
          ariaLabel="Zapamiętaj mnie"
          isChecked={isRemember}
          setIsChecked={setIsRemember}
          name="rememberMe"
        />
      </Form>
      <a href="/remind" className={styles.link}>
        Nie pamiętasz hasła
      </a>
      <a href="/rejestracja" className={styles.link}>
        Nie masz konta? Zarejestruj się
      </a>
    </main>
  );
};

export default Login;
