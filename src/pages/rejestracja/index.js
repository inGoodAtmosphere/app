import React, { useState } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import Checkbox from '../../components/Form/Checkbox';
import SocialMediaBtn from '../../components/Form/SocialMediaBtn';

const SignUp = () => {
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
    <main className="content sign-up__content">
      <h2 className="sign-up__header">Zarejsetruj się a otrzymasz:</h2>
      <p className="sign-up__text">Dostęp do cotygodniowego newslettera</p>
      <p className="sign-up__text">
        Możliwość dodawania czujników do ulubionych
      </p>
      <p className="sign-up__text">Lorem ipsum dolor sit amet.</p>
      <a className="sign-up__link" href="/login">
        Masz już konto? Zaloguj się
      </a>
      <SocialMediaBtn
        socialMedia="facebook"
        purpose="signup"
        endpoint="/api/signUpFacebook"
      />
      <SocialMediaBtn
        socialMedia="google"
        purpose="signup"
        endpoint="/api/signUpGoogle"
      />
      <p className="sign-up__or">lub</p>
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
          label="Powtórz Hasło"
          onChange={setConfirmPassword}
          value={confirmPassword}
        />
        <Input
          name="firstName"
          id="firstName"
          label="Imię (opcjonalnie)"
          onChange={setFirstName}
          value={firstName}
        />
        <Input
          name="lastName"
          id="lastName"
          label="Nazwisko (opcjonalnie)"
          onChange={setLastName}
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
