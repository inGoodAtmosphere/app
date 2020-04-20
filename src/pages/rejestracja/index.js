import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import Checkbox from '../../components/Form/Checkbox';
import SocialMediaBtn from '../../components/Form/SocialMediaBtn';
import styles from './index.module.scss';

const SignUp = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState([]);
  const data = {
    login,
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    newsletter,
  };

  return (
    <main className={styles.content}>
      <h2 className={styles.header}>Zarejestruj się a otrzymasz:</h2>
      <p className={styles.text}>Dostęp do cotygodniowego newslettera</p>
      <p className={styles.text}>Możliwość dodawania czujników do ulubionych</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
      <a className={styles.link} href="/logowanie">
        Masz już konto? Zaloguj się
      </a>
      <SocialMediaBtn
        socialMedia="facebook"
        purpose="sign-up"
        endpoint="/api/signUp/facebook"
      />
      <SocialMediaBtn
        socialMedia="google"
        purpose="sign-up"
        endpoint="/api/signUp/google"
      />
      <p className={styles.or}>lub</p>
      <Form
        data={data}
        endpoint="/api/signUp"
        submitText="Zarejestruj się"
        value={{ errors, setErrors }}
      >
        <Input
          name="email"
          id="email"
          label="Email"
          setState={setEmail}
          value={email}
        />

        <Input
          name="login"
          id="login"
          label="Login"
          setState={setLogin}
          value={login}
        />
        <Input
          name="password"
          id="password"
          type="password"
          label="Hasło"
          setState={setPassword}
          value={password}
        />
        <Input
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          label="Powtórz Hasło"
          setState={setConfirmPassword}
          value={confirmPassword}
        />
        <Input
          name="firstName"
          id="firstName"
          label="Imię (opcjonalnie)"
          setState={setFirstName}
          value={firstName}
        />
        <Input
          name="lastName"
          id="lastName"
          label="Nazwisko (opcjonalnie)"
          setState={setLastName}
          value={lastName}
        />
        <Checkbox
          name="newsletter"
          ariaLabel="Zapisz się na newsletter"
          isChecked={newsletter}
          setIsChecked={setNewsletter}
        />
      </Form>
    </main>
  );
};

export default SignUp;
